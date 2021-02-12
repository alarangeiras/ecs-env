const propertiesService = require('./services/properties-service');
const fileUtils = require('./utils/file');

let fileName = '.env';

async function run(serviceName, region, optionalfileName) {
    try {
        if (!serviceName) {
            throw new Error("Wrong parameters. Use: ecs-env SERVICE_NAME")
        }

        const properties = await propertiesService.getProperties(serviceName, region);

        const lines = properties.map(property => `${property.name}=${property.value}`);

        if (optionalfileName) {
            fileName = optionalfileName;
        }

    
        await fileUtils.writeToFile(fileName, lines);
    
    } catch(error) {
        console.error(error);
    }

}

module.exports = run;