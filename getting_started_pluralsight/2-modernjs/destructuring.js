
// Destructuring PI, E  properties and pow function from the Math object 
const { PI, E, pow} = Math;

const circle = {
    label: 'circus X',
    radius: 2
};


// function requires an object with shcema { radius: ... }
// presition parameter is optional with value 2 by default
const circleArea = ({ radius }, presition = 2) => {
    var area = PI * pow(radius, 2);
    return area.toFixed(presition);
};

console.log(circleArea(circle));
console.log(circleArea(circle , 5));

// ! blank to skip
const [first, second, , forth] = [1, 2, 3, 4];
// ! (...) rest operator = spread from object values
const [initial, ...restOfItems] = [100, 200, 300, 400];


const data = {
    temp1: 1,
    temp2: 2,
    firstName: 'Hansel',
    lastName: 'Garcia'
};

// ! (...) rest operator = spread from object values
// { <property_name> } = <data> 
// ! creates new var <property_name> with value <data>.<property_name>
const {temp1, temp2, ...person} = data;

const newArray = [...restOfItems];
const newPerson = {...person};

console.log(newArray);
console.log(newPerson);



