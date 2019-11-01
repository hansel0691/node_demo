const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const client = new EventEmitter();
const server = require('./serverEvent')(client);


client.on('response', (response) => {
    process.stdout.write(response);
    process.stdout.write('\n> ');
})

rl.on('line', (input) => {
    const [command, ...args] = input.split(' ');
    client.emit('command', command, args);
})
