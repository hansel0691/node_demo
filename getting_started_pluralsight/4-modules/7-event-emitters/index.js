const EventEmitter = require('events');


const myEmitter = new EventEmitter();

// Subscribe to event
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired');
});

// Fire the one func subscribed so far
myEmitter.emit('TEST_EVENT');

// Delays the excecution on the emit until the next iteration of the Event Loop 
// Fites all the functions in the code
setImmediate(() => {
    myEmitter.emit('TEST_EVENT');

})

// Subscribe the rest of the functions 
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT excecuting another method');
});
myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT call back');
});

// process is an event emitter
process.on("exit", code => {
  // do one final synchronous operation
  // before the node process terminates
  console.log(`Mayday-Mayday we have a problem...`);
  console.log(`The application has ended with code ${code}`);
});



//Streams are Event Emitters 