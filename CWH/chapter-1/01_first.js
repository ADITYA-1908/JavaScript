console.log("aditya");
console.log("aditya")

//user input
 const prompt = require('prompt-sync')();
// Prompt the user for input
let name = prompt("Enter your name:");

// Print the name
console.log("Hello, " +name + "!");
console.log("it is a "+typeof name)

//coverting string into integer
name=Number.parseInt(name)
console.log("it  is a "+typeof name)