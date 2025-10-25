console.log("------------operators---------")
console.log("------------Arithmetic operators---------")
let a=90
let b=3
console.log("a+b =",a+b)
console.log("a-b =",a-b)
console.log("a*b =",a*b)
console.log("a/b =",a/b)
console.log("a%b =",a%b)
console.log("a**b =",a**b) //a^b(90*90*90)

console.log("incriment and decriment operator (postfix)")
console.log("a++ =",a++)
console.log("a =",a)
console.log("b++ =",b--)
console.log("b =",b)

console.log("incriment and decriment operator (infix)")
let c=9
let d=4
console.log("c =",c)
console.log("++c =",++c) 
console.log("c =",c)
console.log("d =",d)
console.log("--d =",--d)
console.log("d =",d)
//----------------------------------------------------------------------------------

console.log("------------assignment operators---------")
let e=1;
e+=4 //e=e+4;
console.log(e)
let f =1
f-=5 //f=f-5
console.log(f)
//----------------------------------------------------------------

console.log("------------comparision operators---------")
let comp1=5
let comp2=3
console.log("comp1 == comp2",comp1==comp2)
console.log("comp1 != comp2",comp1!=comp2)
console.log("comp1 > comp2",comp1>comp2)
console.log("\n");

let comp3=4
let comp4="4"
console.log("comp3 == comp4",comp3==comp4)
console.log("comp3 != comp4",comp3!=comp4)
console.log("comp3 === comp4",comp3===comp4)
console.log("comp3 !== comp4",comp3!==comp4)
console.log("\n")

//---------------------------------------
console.log("------------logical operators---------")
let x=5
let y=6
//logical AND operator
console.log(x>y && x==5) //both have to correct then it will return true 
console.log(y>x && x==5) 
//logical or operator
console.log(x>y|| x==5) //only one have to correct then it will return true 
console.log(y>x || x==5)

console.log("the number is ",x<y? "greater then y " : "smaller then y ")
