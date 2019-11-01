// API MODULE
const util = require('util');
const http = require('http');

const requestListener = (req, res) => {
    console.log(req.url);
    // console.dir(req, {depth : 0});
    
    res.end('Hello Node!');
};

const server = http.createServer(requestListener);
// It's equivalent to ...
// server.on('request', requestListener);


server.listen(4242, () => {
    console.log('Server is runing...');
})
