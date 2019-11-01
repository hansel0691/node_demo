const { Transform } =  require('stream');


const upperStream = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});


process.stdin.pipe(upperStream).pipe(process.stdout);