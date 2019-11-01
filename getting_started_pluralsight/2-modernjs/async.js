

const http = require('http');

function fetch(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data += rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

(async function read() {
    const data = await fetch('https://www.javascript.com');
    console.log(data);
})()