const fs = require('fs');
const path = require('path');

async function readFile(file) {
	return new Promise((resolve, reject) => {
        const filePath = path.resolve(__dirname, file);

        if (typeof file != 'string') reject(new Error(`File should be a string. Instead got ${typeof file}`));

		if (!file) reject('File name should not be empty');
        
		fs.readFile(filePath, (err, buffer) => {
			if (err) reject(err);

			const lines = buffer
				.toString()
				.trim()
				.split('\n');
			resolve(lines);
		});
	});
}

(async function main() {
	try {
		const lines = await readFile(__filename);
		console.log(lines);
	} catch (error) {
		console.error(error);
	}
})();
