console.log(a); // undefined
var a = 5;

console.log(b); //ReferenceError
let b = 10;

console.log(greet()); // Hello, Aditya
function greet() {
    return "Hello, Aditya";
}

console.log(greet()); //ReferenceError
var greet = function () {
    return "Hello";
};
