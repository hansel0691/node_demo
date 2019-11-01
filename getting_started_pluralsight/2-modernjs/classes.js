// import { Http2SecureServer } from "http2";

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${ this.name }`);
    }
}

class Student extends Person {
    
    constructor(name, level) {
        super(name);
        this.level = level;
    }

    greet() {
        console.log(`Hello ${this.name} from ${this.level}`);
    } 
}

