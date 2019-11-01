const server = require('http').createServer();
const fs = require('fs');

const port = process.env.PORT || 8000;




server.on('request', (req, res) => {
    const readStream = fs.createReadStream('./test_data_remove');

    // !
    // readStream.on('data', chunk => {
	// 	res.write(chunk);
	// });
    readStream.pipe(res);

    
    readStream.on('end', () => {
        res.end();
    })

});


server.listen(port, console.log(`Listening on port ${port}`));

