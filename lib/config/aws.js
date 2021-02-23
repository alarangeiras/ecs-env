const AWS = require('aws-sdk');

process.env.AWS_SDK_LOAD_CONFIG = 1;

async function init(region) {
	if (region) {
		AWS.config.region = region;
	}

	return new AWS.ECS();
}

module.exports = {
	init,
};
