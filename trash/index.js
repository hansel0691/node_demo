// const print = require('hansel-frame-print');
const lodash = require('lodash');
const path = require('path');
const fs = require('fs').promises;
const print = require('./frame-print');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Delay to the next tick
setImmediate(() => {
    myEmitter.emit('TEST_EVENT');
})

myEmitter.on('TEST_EVENT', () => {
	console.log('TEST_EVENT was fired');
});
myEmitter.on('TEST_EVENT', () => {
	console.log('TEST_EVENT was fired');
});



const files = ['pvproctor.log', __filename];



async function readFiles(files) {
	try {
        
		files.forEach(async (file) => {
            const filePath = path.resolve(process.env.HOME, file);
			const data = await fs.readFile(filePath);
			console.log(`File data is ${data}`);
        });
        
	} catch (error) {
		console.error(error);
	}
}

//readFiles(files);
const sum = lodash.sum([1, 2, 3, 4, 5, 6, 7, 8]);


print('Ivannita');

console.log(`Sum is ${sum}`);



