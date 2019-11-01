
// ! this keyword is equal to module.exports
this.id = 'this = exports!';
console.log(module.exports.id);


const testerObj = {
    func1: function() {
        console.log('func1', this);
    },
    func2: () => {
        console.log('func2', this);
    }
}


testerObj.func1();
testerObj.func2();