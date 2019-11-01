const axios = require('axios');
const fs = require('fs');
const { StringDecoder } = require('string_decoder');
const path = require('path');

const decoder = new StringDecoder('utf8');

const writeFile = (file, data) =>
	new Promise(resolve => {
		fs.writeFile(file, data, resolve);
	});

async function logFetch(url) {
	try {
		const response = await axios.get(url);

		const data = Buffer.from(response.data.trim());
		const file = path.resolve(__dirname, 'data');

		await writeFile(file, data);
	} catch (error) {
		console.error(error);
	}
}

(async function main() {
	try {
		await logFetch('https://developers.google.com/web/fundamentals/primers/async-functions');
	} catch (err) {}
})();
