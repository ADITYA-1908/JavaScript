//! convert the string to the array
// const str = "hello";
// console.log(str);
// console.log(str.split(""));

//! WAP to count no of words present in the string
// const str = "MERN Stack Development";
// console.log("no of words= " + str.split(" ").length);
// console.log("no of alphabet= " + str.split("").length);

//!--------------------Array InBuilt methods--------------------------------
// const arr = [1, 2,3,4,5];
// console.log(arr);
// arr.push(6);
// console.log("push the value at last index ");
// console.log(arr);
// arr.push(6, 12);
// console.log("push multiple value at last index ");
// console.log(arr);
// arr.shift(6);
// console.log("shift will remove the value at first index ");
// console.log(arr);
// arr.unshift(0);
// console.log("unshift will add the value at first index");
// console.log(arr);
// arr.unshift(2, 3);
// console.log("unshift will add the value at first index");
// console.log(arr);
// arr.pop();
// console.log("pop the value at last index");
// console.log(arr);

//!---------------------splice method------------------------
// let arr = [1, 2, 3, 4, 5];
// console.log("start at index 2, remove 2 elements");
// arr.splice(2, 2);
// console.log(arr);


// let arr1 = [10, 20, 30, 40];
// console.log("start at index 1, remove 2 items, add 25 & 35");
// arr.splice(1, 2, 25, 35);
// console.log(arr1);


// let arr2 = [10, 20, 30, 40];
// console.log("start at index 1, remove 2 items, add 25 & 35");
// arr2.splice(1, 2, 25, 35);
// console.log(arr2);



//! extract somee number from the array
// const a = [1, 2, 3, 4, 5];
// b = a.slice(2, 4);
// console.log(b);

//! join and tostring of the array
// const a = [1, 2, 3, 4, 5];
// console.log(a.toString());
// console.log(a.join("-"));

//!Map
// const arr = [1, 2, 3, 4, 5];
// const arr2 = arr.map((value) => value * 2);
// console.log(arr2);

//!filter
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = arr.filter((value) => value % 2 === 0);
// console.log(arr2);

//!reduce
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

