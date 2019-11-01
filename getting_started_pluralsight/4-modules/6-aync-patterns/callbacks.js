const fs = require('fs');


// __filename is the parameter passed to the wrapping func 
// with the name of the file being excecuted.
const data = fs.readFileSync(__filename); // For Syncronous read file

//Callback pattern
// Callback function allways receives err argument as the 1st one ...is a standard.
fs.readFile(__filename, (err, data) => {
    console.log('File data is ' + data);
    fs.writeFile(__filename + '.copy', data, (err) => {
        // Nest more callbacks ...
    })
});

// console.log(data);
console.log('TEST...');