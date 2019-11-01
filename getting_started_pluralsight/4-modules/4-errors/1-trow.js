const fs = require('fs');
//const path = require('path');

const relativePath = `/Projects/node_exam/getting_started_pluralsight/4-modules/4-errors/`;
const files = ['input', 'teads', 'test'];

files.forEach(file => {
    try {
        const filePath = `${process.env.HOME}${relativePath}${file}`;
        // path.resolve(pricess.env.HOME, partialPath, file) does the concatenation too

        const data = fs.readFileSync(filePath);
        console.log('File data is ' + data);
    } catch (error) {
        if (error.code === 'ENOENT')
            console.log('File not found');
        else
                throw error;
    }
})

//ENOENT: File not found code