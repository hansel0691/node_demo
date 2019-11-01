const path = require('path');
const axios = require('axios');
const fs = require('fs');

exports.download = async () => {
	const url = 'http://localhost:3000/download/image.jpg';
	const filePath = path.resolve(__dirname, '..', 'images', 'download.jpg');
	const writer = fs.createWriteStream(filePath);

	const options = { responseType: 'stream' };
	const response = await axios.get(url, options);

	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', () => {
			resolve({ Success: true });
		});
		writer.on('error', reject);
	});
};
