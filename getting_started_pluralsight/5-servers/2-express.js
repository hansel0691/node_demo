
const express = require('express');

const server = express();


// We define a listener per URL
server.get('/', (req, res) => {
    res.send('Hello Express');
});

server.get('/about', (req, res) => {
    const result = [1, 2, 3, 4];
    res.send(result);
});


server.listen(4242, () => {
    console.log('Express is runing');
    
});