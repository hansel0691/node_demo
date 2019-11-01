// ! When we require a file node loads its content to memory and execute the code
// ! Node will search the file (or folder package) in the module.path array 
const fs = require('find-me');
const config = require('../configuration.json');

// ! require('something');

// ! 1. try something.js
// ! 2. try something.json
// ! 3. try something.node (binary C++ addon)
const todos = require('data');
console.log(todos);

console.log(config);
// ! The module obj comes in the parameters of the wrapping function
// console.dir(module, { length: 1 });

const m1 = require('./lib/m1');
console.log(m1);