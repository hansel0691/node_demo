const { Transform } = require('stream');
const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');


const file = './test_data_remove';


const progress = new Transform({
    transform(chunk, encoding, callback){
        process.stdout.write('.');
        // ! pass the chunk forward in the stream
        callback(null, chunk);
    }
});


// !
// Reads the file as stream
fs.createReadStream(file)
	// Creates compress stream
    .pipe(zlib.createGzip())
    .pipe(crypto.createCipher('aes192', 'a_secret'))
	// Transform compressed chunk in console logs and echoes chuck
	.pipe(progress)
	// writes chunks on file system
	.pipe(fs.createWriteStream(file + '.zz'))
	.on('finish', () => {
		console.log('Done!');
	});


//.on('data', () => {process.stdout.write('=');})
