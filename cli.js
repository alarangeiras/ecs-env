#!/usr/bin/env node
const run = require('./lib/index');

require('.').run()
.catch(require('@oclif/errors/handle'))


