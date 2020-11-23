#!/usr/bin/env node
const run = require('./lib/index');

const [,,serviceName, region, fileName] = process.argv;

(async() => {
    run(serviceName, region, fileName);
})();



