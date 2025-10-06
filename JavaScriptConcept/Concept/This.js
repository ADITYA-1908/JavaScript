//!In Global Context
console.log(this);


//! Inside Object Method
//Refers to the object that owns the method.
const persons = {
    name: "Aditya",
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
};

persons.greet(); // Hello, Aditya


// In Constructor Functions / Classes
function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log(`Hello, ${this.name}`);
    }
}

const aditya = new Person("Aditya");
aditya.greet(); // Hello, Aditya

//!In Arrow Functions
const person = {
    name: "Aditya",
    greet: function () {
        const arrowFunc = () => console.log(this.name);
        arrowFunc();
    }
};

person.greet(); // Aditya
