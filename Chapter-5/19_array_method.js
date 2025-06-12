// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now a string 
console.log(b, typeof b)

//it will join and after each number 
let c = num.join(" and ")
console.log(c, typeof c)

//pop or show last element in the array
let r =  num.pop()
console.log(num,r)

//add an element at last
let u=num.push(54)
console.log(num,u)

//remove 1st element
let h = num.shift()
console.log(num,h)
console.log(h)

//add 1st element
let k = num.unshift(1)
console.log(num,k)
console.log(k)
