const print = (stars, header) => {
    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
};

// ! True if file is invoked trough node | False if file is required
if (require.main == module)
    print(process.argv[1], process.argv[2]);
else
    module.exports = print;