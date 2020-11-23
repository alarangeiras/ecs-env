#!/usr/bin/env node
const run = require('./lib/index');

const [,,serviceName, region] = process.argv;

(async() => {
    run(serviceName, region);
})();



