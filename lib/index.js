const propertiesService = require('./services/properties-service');
const fileUtils = require('./utils/file');
const {Command, flags} = require('@oclif/command')

let fileName = '.env';

class EcsEnvCommand extends Command {
  async run() {
    try {
        const {flags} = this.parse(EcsEnvCommand);
        const serviceName = flags.serviceName;
        const region = flags.region;
        const optionalfileName = flags.optionalfileName;

        if (serviceName) {

          const properties = await propertiesService.getProperties(serviceName, region);

          const lines = properties.map(property => `${property.name}=${property.value}`);

          if (optionalfileName) {
              fileName = optionalfileName;
          }
      
          await fileUtils.writeToFile(fileName, lines);
        } else {
          if (!flags.help) {
            this._help();
          }
        }

    
    } catch(error) {
        console.log(error.message);
    }
  }

  async exit() {}
}

EcsEnvCommand.usage = `-s service-name -r us-east-1 -o application.properties`;

EcsEnvCommand.description = `ecs-env - converts ecs environment variables in .env's file
ecs-env is a script globally installed in your path
to help generate .env properties from environment variables
in task definitions Amazon ECS.
You can find in Releases session binaries to each platform too.`;

EcsEnvCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  serviceName: flags.string({char: 's', description: 'name of ecs-service'}),
  region: flags.string({char: 'r', description: 'optional region name'}),
  optionalfileName: flags.string({char: 'o', description: 'optional file name'}),
};

module.exports = EcsEnvCommand;