let arr = [45, 23, 21]
console.log(" //map method")
let a = arr.map((value, index, array) => {
    //map will make a new array
    console.log(value*2)
    console.log(value, index)
    console.log(value, index, array)
    return value + 1
})
console.log(a)

console.log(" array filter method ")
let arr2 = [1, 4, 6, 3, 55, 22, 77, 0, 22, 99]
let a2 = arr2.filter((a3) => {
    return a3 < 10
})
console.log(a2)

console.log(" array reduse method ")
let arr3 = [1, 2, 3, 5, 2, 1]
const newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2
})
// let newarr3 = arr3.reduce(reduce_func) 
console.log(newarr3)