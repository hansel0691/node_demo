// ! We can create buffers in one of three ways
// ! Buffer.from(), Buffer.alloc(), Buffer.allocUnsafe()
// ! Buffers don't have a character encoding by default
// ! Buffers can share the same memory with another buffer (see slice())
const fs = require('fs');
const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const convertMap = {
    '88': '65',
    '89': '66',
    '90': '67'
}

const s = 'Hello World';
const b = Buffer.from(s);

console.log(s, s.length);
console.log(b, b.length);



fs.readFile(__filename, (err, buffer) => {
    let tag = buffer.slice(-4);

    for (let i = 0; i < tag.length; i++)
        tag[i] = convertMap[tag[i]];

    console.log(buffer.toString());
});

process.stdin.on('readable', () => {
    const buffer = process.stdin.read();

    if (buffer != null){
        console.log(`With .toString() ${buffer.toString()}`);
        console.log(`With StringDecoder ${decoder.write(buffer)}`);
        
        
    }
})


// TAG: XYZ
