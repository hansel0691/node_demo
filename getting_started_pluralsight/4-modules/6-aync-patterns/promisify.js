
const fs = require('fs');
const util = require('util');

// Promisify any build in asynchronous api method 
const readFile = util.promisify(fs.readFile);

async function main() {
    const data = await readFile(__filename);
    console.log('File data is ' + data);
}

main();

console.log('TEST...');


