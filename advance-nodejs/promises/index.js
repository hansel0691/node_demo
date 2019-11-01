const { promise1, promise2, promise3 } = require('./all');
const { asyncHey } = require('./hello_world');
const { StringDecoder } = require('string_decoder')
const path = require('path');
const fs = require('fs');


const decoder = new StringDecoder();

// async functions convert return value in Promise
async function doPromise() {
	return { Success: true };
}

const promise = Promise.resolve({ id: 3 });

function writeFile(file, data) {
	return new Promise(resolve => {
		fs.writeFile(file, data, resolve);
	});
}

function readFile(file) {
	return new Promise(resolve => { fs.readFile(file, (err, data) => resolve(decoder.write(data))); })
}

function wait(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
	
// const writeFile = (file, data) => new Promise((result, reject) => {})

(async function main() {
	try {
		console.log('stop execution...');
		// const response = await asyncHey('Hansel', 1000);
		// const promises = [promise1(), promise2(), promise3()];
		// const response = await Promise.all(promises);
		// const response = await Promise.race(promises);
		// const rejected = await Promise.reject(new Error('This one is rejected'));
		// const response = Promise.resolve({Success: true});

		// const response = await doPromise();

		// await wait(10000);

		const filePath = path.resolve(__dirname, 'data');
		
		await writeFile(filePath, 'This is a new text!');
		const content = await readFile(filePath);

		console.log(content);

		// .then((response) => {console.log(response);},(reason) => {console.log(reason.message);});
		// console.log(response);

		console.log('Completed');
	} catch (error) {
		console.log(error.message);
	}
})();
