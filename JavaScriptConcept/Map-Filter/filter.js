//!1) Filter even numbers from an array
// let array = [1, 2, 3, 4, 5, 6]
// const res = array.filter(num => num % 2 == 0)
// console.log(res)

//!2) Filter names with length >= 5
// const names = ['John', 'Alice', 'Bob', 'Charlie'];
// const res =names.filter(name=>name.length >=5)
// console.log(res)

//!3)  Filter active users
// const users = [
//     { name: 'A', active: true },
//     { name: 'B', active: false }
// ];

// const res = users.filter(user => user.active)
// console.log(res)

//!4)  Filter active users and return only id and name
// const users = [
//     { id: 1, name: 'Alice', isActive: true },
//     { id: 2, name: 'Bob', isActive: false },
//     { id: 3, name: 'Charlie', isActive: true }
// ];
// const res = users.filter(user => user.isActive).map(user => ({ id: user.id, name: user.name }))
// console.log(res)

//!5)  Filter words starting with 'a'
// const words = ['Apple', 'Banana', 'avocado', 'Mango'];
// const res = words.filter(word => word.toLowerCase().startsWith('a'));
// console.log(res)

//!6) Filter only numbers from a mixed array
// const mixed = [1, 'a', 2, 'b', 3];
// const res = mixed.filter(number => typeof number === 'number')
// console.log(res)

//!7) Filter students with score >= 40
// const students = [
//     { name: 'Tom', score: 35 },
//     { name: 'Jerry', score: 80 }
// ];

// const res = students.filter(s => s.score >= 40)
// console.log(res)

//!8) Filter common elements between two arrays
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['b', 'c', 'd'];

// const res=arr1.filter(i=>arr2.includes(i));
// console.log(res)

//!9)  Filter odd numbers
// const arr = [1, 2, 3, 4];
// const res = arr.filter(e => e % 2 != 0)
// console.log(res)

//!10) Filter future dates
// const today = new Date();
// const dates = [new Date('2024-01-01'), new Date('2026-01-01')];
// const future = dates.filter(date => date > today);
// console.log(future); 

