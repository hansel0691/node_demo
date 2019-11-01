// ! process is an event emitter 

console.log(process.argv.splice(1));

process.on('exit', (code) => {
    // ! do one final synchronous operation
    // ! before the node process terminates
    console.log(''.padEnd(10, '*'));
    console.log(`the process has ended... code ${code}`);
    console.log(''.padEnd(10, '*'));
})

process.on('uncaughtException', (err) => {
    console.log(`Mayday-Mayday we have a problem... `);
    console.log(''.padEnd(10, '*'));
    console.log(err.message);

    process.exit(1);
})

process.stdin.resume();

throw new Error('Por mis santos cojones!');