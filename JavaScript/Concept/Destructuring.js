//!Array Destruturing
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a, b, c);

//!Object Destructuring
// const person = { name: "Aditya", age: 21 };
// const { name, age } = person;
// console.log(name, age);

// //! Function with Rest Parameters
// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20, 30));
// console.log(sum(5, 15));

// //! Function with Spread Operator
// const nums = [1, 2, 3];
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));
// const arr1 = [4, 5, 6];
// const arr2 = [...nums, ...arr1];
// console.log(arr2);


//!Nested Destructuring
const user = {
    id: 1,
    details: {
        name: "Aditya",
        city: "Bangalore"
    }
};

const { details: { name, city } } = user;
console.log(name, city); 
