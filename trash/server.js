const express = require('express');
const http = require('http');


const server = express();


// const server = http.createServer(requestListener)

server.get('/about', (req, res) => {
    res.send('About page');
})

server.get('/', (req, res) => {
    const name = req.query.name || 'New Hire';

	res.end(`Hello ${name}!`);
});

server.listen(8000, () => {
    console.log('Server is running...');
})