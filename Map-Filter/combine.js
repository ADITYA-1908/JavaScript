//!1)Get names of users older than 18
// const users = [
//     { name: "A", age: 17 },
//     { name: "B", age: 22 },
//     { name: "C", age: 30 }
// ];

// const res = users.filter(user => user.age > 18).map(user => user.name);
// console.log(res)

//!2)Double only the even numbers
// const nums = [1, 2, 3, 4, 5, 6];
// const res = nums.filter(n => n % 2 === 0).map(n => n * 2)
// console.log(res)

//!3)Get lengths of only strings longer than 4 characters
// const words = ['hi', 'hello', 'awesome', 'yes'];

// const res = words.filter(word => word.length > 4).map(word => word)
// console.log(res)

//!4) From mixed array, return uppercase strings only
// const data = ['hello', 42, 'world', true, 'js'];

// const res = data.filter(i => typeof i === 'string').map(str => str.toUpperCase())
// console.log(res)

//!5)  Return squared values of only odd numbers
// const nums = [1, 2, 3, 4, 5];
// const res = nums.filter(n => n % 2 !== 0).map(n => n ** 2);
// console.log(res)

//!6)   Format email of users with role "admin"
// const users = [
//     { name: 'Alice', email: 'a@x.com', role: 'admin' },
//     { name: 'Bob', email: 'b@x.com', role: 'user' }
// ];

// const result8 = users
// .filter(user => user.role === 'admin')
// .map(user => `ADMIN: ${user.email}`);

// console.log(result8);

//!7) Extract first letter of all words longer than 3 characters
// const words = ['hi', 'banana', 'cat', 'awesome'];

// const res=words.filter(w=>w.length>3).map(w=>w[0])
// console.log(res)

//!7)  From prices in INR, filter >100 and convert to USD
// const prices = [50, 120, 300];
// const conversionRate = 0.012;

// const res = prices.filter(p => p > 100).map(p => (p * conversionRate).toFixed(2))
// console.log(res)

//!8) Get full names of students who passed (score >= 40)
const students = [
    { first: 'John', last: 'Doe', score: 35 },
    { first: 'Jane', last: 'Smith', score: 85 }
];

const res = students
    .filter(n => n.score >= 40)
    .map(fn => `${fn.first} ${fn.last}`)

console.log(res)

