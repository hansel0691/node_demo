const api = require('./simple-api');
const html = require('./string-api');
const templateGenerator = require('./function-api');

console.log(api.language, api.direction, api.encoding);

console.log(require('./array-api'));

// console.log(html);

const text = templateGenerator('Hello World');

console.log(text);

