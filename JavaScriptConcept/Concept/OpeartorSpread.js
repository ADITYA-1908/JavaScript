//! Spread Operator
// let arr = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]
// let arr3 = [...arr, ...arr2, 10, 11];
// console.log(arr3)

//!rest operator
// function sum(...args) {
//     let t = 0;
//     for (let i in args) {
//         t += args[i];
//     }
//     console.log(t)
// }
// sum(2, 3, 5)

//rest paramerts
function fun(a, b, ...op) {
    console.log(a)
    console.log(b)
    console.log(op)
}
fun(1, 2, 3, 4, 5, 6)
