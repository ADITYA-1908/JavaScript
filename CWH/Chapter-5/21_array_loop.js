let num = [3, 54, 1, 2, 4]

console.log("for loop")
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log("for each")
num.forEach((op) => {
    console.log(op)
})

console.log("Array.from ")
let name = "Subham"
let arr = Array.from(name)
console.log(arr)

console.log("for...of ")
for (let item of num) {
    console.log(item)
}

console.log(" for...in")
for (let i in num){
    console.log(num[i])
  }