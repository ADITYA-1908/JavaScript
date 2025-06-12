// 1---> word (chaha ,adi)
//2---> keyword(if, else, break, continue, for)

// 3--> var, let ,const
// var a=10;
// console.log(a)
// {
//     var a=12;
//     console.log(a)
// }

// let b=11;
// console.log(b)
// {
//    let b=5
//     console.log(b)
// }

// let c=11;     // if let then we can change the value 
// console.log(c)
// {
//    var c=5
//     console.log(c)
// }
// if var then we can change the value 

// 4--> hoisting
// console.log(a)  //not return error but in other language can throw error 
// var a=10 
// console.log(a)

// 5--> types in js (primitive and reference)

// primitive= number ,String ,null ,undefined ,Boolean  ( if we copy the value it can have real copy)
// var a=10;
// var b=a;
// console.log(a)
// b+=1
// console.log(b)

// reference=[] () {}   (if we copy the value only the reference will passe(same reference))
// var a=[1,2,3,4];
// console.log(a)
// var b=a;
// console.log(b)
// b.pop();
// console.log(a)
// console.log(b)

//how to copy reference variable (same reference)
// var m=[1,2,3,4,5]
// console.log(m)
// var c=[...m] //similarly for object
// console.log(c)
// c.pop()
// console.log(m)
// console.log(c)


// 6--> if else else if
//   false or else values are = 0 false undefined null NaN document.all 
//    true or if  values are = all reather then flase
// if (0) {
//     console.log("hye")
// } 
// else {    
//     console.log("hello")
// }

// 7--> for loop , while loop 
//8--> function  (argument,parameter)

//9--> array {push, pop, shift, unshift}
// var arr=[1,2,3,4,5]
// arr.push(45)
// console.log(arr);
// arr.pop(3)   //remove the last element 
// console.log(arr);
// arr.shift();  //remove the first element 
// console.log(arr);  
// arr.unshift(1) //add the element in the first
// console.log(arr);
// arr.splice(0,1) //give the start index to end index to remove values 
// console.log(arr)

// 10--> Object (hold the destails of a variable in key and value pair)
// 10.1---> Blank object
// var a={};
// console.log(a)
// // 10.1---> filled object
// var b={
//     a:10,
//     b:"adi",
//     c:23
// }
// console.log(b)
// console.log(b.a)
// b.a=258;
// console.log(b)
// console.log(b.a)
