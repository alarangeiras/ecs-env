const propertiesService = require('./services/properties-service');
const file = require('./utils/file');
const fileUtils = require('./utils/file');

let fileName = 'application-prod.properties';

async function run(serviceName, region, optionalfileName) {
    try {
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