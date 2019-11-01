// function (exports, module, require, __filename, __dirname) {

    // g is not a global variable since the file is wrapped around with this function
    // scoped to the build-in wrappin function
    let g = 1;

    // exports = ... won't work since return is module.exports and you change the reference
    // use module.exports = ... instead

    exports.a = 42;
    module.exports.b = 37;
    console.log(arguments)


//  return module.exports;
// } (module.exports, module, ...)