
const mistery = 'answer';
// ! Destructuring PI property from the Math object 
const { PI } = Math;

const obj = {
    p1: 10,
    p2: 20,
    f1() {},
    f2: () => {},
    [mistery]: 42,
    PI
}

console.log(obj);