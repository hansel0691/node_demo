const fs = require('fs');
const path = require('path');

function fileSize(file, cb) {
    if(typeof file != 'string')
        return process.nextTick(cb, new Error('Argument should be string'));

    const filePath = path.resolve(__dirname, file);
    
    fs.stat(filePath, (error, stats) => {
        if (error)
            return cb(err);
        
            return cb(null, stats.size);
    });
}

fileSize(1, (err, size) => {
    if (err) throw err;

    console.log(`Size in Kb ${size/1024}`);
});

console.log('Hello!');
