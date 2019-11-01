const server = require('net').createServer();
const sockets = {};
let counter = 0;

// ! Socket is a by(way) stream (write/read)
server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;

    // ! data is of data type Buffer
    socket.on('data', data => {
        console.log(data.toString());
        Object.entries(sockets).forEach(([, cs]) => {
            cs.write(`${socket.id}: ${data}`);
        })
    });

    socket.on('end', () => {
        delete(sockets[socket.id]);
        console.log('Connection closed!')
    });

    socket.write('Hello There');
});

server.listen(8000, () => console.log('Server Bound'));
