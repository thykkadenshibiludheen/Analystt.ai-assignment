'use strict';

const exampleApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(exampleApp(), 'Hello from exampleApp');
console.info('exampleApp tests passed');
