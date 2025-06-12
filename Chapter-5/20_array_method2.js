let num =[1,2,3,4,5,6,7,8,9]
// let no=[11,12,13,14,15,16,17,18,19]
//deleting a number from the array
console.log(num.length) 
delete num[0]
console.log(num)
console.log(num.length)

//concatinate 
let a=[1,2,3]
let b =[4,5,6]
let c=[7,8,9]
let d =a.concat(b,c)
console.log(d)

//slice
let op=[1,2,3,4,5,6,7]
console.log("op.slice(3)")
let e=op.slice(3) //before 3rd index all element delete
console.log(e)
let RR=[1,2,3,4,5,6,7]
console.log("RR.slice(2,4)")
let r=RR.slice(2,4) //before 3rd index all element delete
console.log(r)

//splice
let no=[1,2,3,4,5,6,7,8,9]
console.log(".splice(9,8,7,6,5,4,3,2,1)")
let qo=no.splice(9,8,7,6,5,4,3,2,1)
console.log(no)

//soreted and reverse
let yo=[2,4,1,5,7,9,3]
let bb=[551, 22, 3, 14, 5, 6, 7, 8, 229] //as per the string it will sort
let cc=yo.sort()
console.log(cc)
let bo=bb.sort()
console.log(bo)
let co=yo.reverse()
console.log(co)

