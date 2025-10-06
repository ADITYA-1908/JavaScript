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
// const multiply = ((a, b) => {
//     return a * b;
// })
// console.log(multiply(2, 3))

//! IIFE (Immediately Invoked Function Expression)
// (function add(a, b) {
//     console.log(a + b)
// }
// )(2, 4)
//! Function Constructor
// const divide = new Function("a", "b", "return a / b;");
// console.log(divide(10, 2));


// //! Recursive Function
// function fact(n){
//     if (n ===1 || n==0) {
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(fact(3))

// //! Callback Function
// function parent(name, callBack) {
//     console.log("name is " + name)
//     callBack()
// }
// function Callback() {
//     console.log("callBack function")
// }

// parent("JavaScript", Callback)

// //! Higher-Order Function
// function operater(a, b, opeartion) {
//     return opeartion(a, b)
// }

// function add(a, b) {
//     console.log(a + b)
// }

// function sub(a, b) {
//     console.log(a - b)
// }
// operater(4, 2, add)
// operater(4, 2, sub)


// //! Function with Default Parameters
// function pow(a, b = 2) {
//     return Math.pow(a, b)
// }
// console.log(pow(2))
// console.log(pow(2, 3))

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
//         return name;
//     }
//     return inner
// }

// const closer = outer();
// console.log(closer())
