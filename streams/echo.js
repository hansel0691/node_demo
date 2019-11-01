const { Writable, Readable, Transform, Duplex }  = require('stream');

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        console.log('chunk', chunk.toString());
        callback();
    }
})


let currentCode = 65;
const readableStream = new Readable({
    read(size) {
        // !
        this.push(String.fromCharCode(currentCode++))
        if (currentCode > 90)
            // ! pushing null stops the readable stream
            this.push(null)
    }
})

// ! process.stdout ReadableStream
// process.stdin.pipe(writableStream);

// ! process.stdin WritableStream
readableStream.pipe(process.stdin);