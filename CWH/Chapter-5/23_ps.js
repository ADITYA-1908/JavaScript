console.log("question--1 ")
const prompt = require('prompt-sync')();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a = prompt("enter a number ")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

console.log("question--2 ")
let arr1 = [1, 2, 3, 4, 5, 6, 7, 83]
let a1;
do {
  a1 = prompt("Enter a number")
  a1 = Number.parseInt(a1)
  arr1.push(a1)
} while (a1 != 0);
console.log(arr1)

console.log("question--3 ")
let arr2 = [1, 20, 35, 45, 5, 60, 7, 830]
let a2=arr2.filter((t)=>{
   return t%10==0
})
console.log(a2)

console.log("question--4 ")
let arr3 = [1, 20, 35, 45, 5, 60, 7, 830]
let a3=arr3.map((x)=>{
   return x*x
})
console.log(a3)

console.log("question--5 ")
let arr4 = [1,2,3,4,5]
let a4=arr4.reduce((p,q)=>{
   return p*q
})
console.log(a4)