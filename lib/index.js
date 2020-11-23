const propertiesService = require('./services/properties-service');
const fileUtils = require('./utils/file');

const fileName = 'application-prod.properties';

async function run(serviceName, region) {
    try {
        const properties = await propertiesService.getProperties(serviceName, region);

        const lines = properties.map(property => `${property.name}=${property.value}`);
    
        await fileUtils.writeToFile(fileName, lines);
    
    } catch(error) {
        console.error(error);
    }

}

module.exports = run;