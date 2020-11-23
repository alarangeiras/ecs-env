const awsConfig = require('../config/aws');


async function getProperties(serviceName, region) {
    const ecs = await awsConfig.init(region);

    const taskDefinition = await ecs.listTaskDefinitions({familyPrefix: serviceName, sort: 'DESC'}).promise();

    const taskDefinitionArns = taskDefinition['taskDefinitionArns'];

    if (taskDefinitionArns && taskDefinitionArns.length == 0) {
        throw new Error(`Nenhuma task definition encontrada para o serviço ${serviceName}`);
    }

    const firstTaskDefinitionArn = taskDefinitionArns[0];

    const taskDefinitionDescription = await ecs.describeTaskDefinition({taskDefinition: firstTaskDefinitionArn}).promise();

    const containerDefinitions = taskDefinitionDescription.taskDefinition.containerDefinitions;

    if (containerDefinitions && containerDefinitions.length == 0)  {
        throw new Error(`Nenhuma definição de container encontrado para o serviço ${serviceName}`);
    }

    const environmentVariables = containerDefinitions[0].environment;

    if (environmentVariables && environmentVariables.length == 0)  {
        throw new Error(`Nenhuma variável de ambiente encontrado para o serviço ${serviceName}`);
    }

    return environmentVariables;

}

module.exports = {
    getProperties
}