const crypto = require('crypto');

const NUM_REQUEST = 4;

for (let i = 0; i < NUM_REQUEST; i++) {
    console.log(new Date().getMilliseconds())
    crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', (err, key) => {
        console.log(key);
        console.log(new Date().getMilliseconds())
    })
}