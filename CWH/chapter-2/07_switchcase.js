let a = 9
let b = 3
const prompt = require('prompt-sync')();
let c = prompt("Enter your opearator ")
switch (c) 
{
    case  "+":
        console.log("a+b =", a + b)
        break;
    case "-":
        console.log("a-b =", a - b)
        break;
    case "*":
        console.log("a*b =", a * b)
        break;
    case "/":
        console.log("a/b =", a / b)
        break;
    default:
        console.log("Enter a valid operator")
}
