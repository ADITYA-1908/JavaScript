//! Function Declaration
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

//! Function Expression
// const subtract = function (a, b) {
//     return a - b;
// };
// console.log(subtract(5, 2));

//! Arrow Function
// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

//! IIFE (Immediately Invoked Function Expression)
// (function (a, b) {
//     console.log(a / b);
// })(8, 2);

//! Function Constructor
// const divide = new Function("a", "b", "return a / b;");
// console.log(divide(10, 2));


// //! Recursive Function
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(5));

// //! Callback Function
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function callMe() {
//     console.log("I am callback function");
// }
// greet("Aditya", callMe);

// //! Higher-Order Function
// function operate(a, b, operation) {
//     return operation(a, b);
// }
// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// console.log(operate(5, 3, add));
// console.log(operate(5, 3, subtract));


// //! Function with Default Parameters
// function power(base, exponent = 2) {
//     return Math.pow(base, exponent);
// }
// console.log(power(3)); // 3^2
// console.log(power(2, 3)); // 2^3

// //! Function Returning Function
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log("Outer Variable: " + outerVariable);
//         console.log("Inner Variable: " + innerVariable);
//     };
// }
// const newFunction = outerFunction("outside");
// newFunction("inside");
// outerFunction("outside")("inside");

// //! Function to demonstrate closures
// function outer() {
//     let name = "Jspider"
//     function inner() {
//         return { name };
//     }
//     return inner
// }

// const closer = outer();
// console.log(closer())
