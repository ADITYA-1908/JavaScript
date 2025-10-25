const prompt = require('prompt-sync')();

//run in raplite
alert("Enter the value of a!")
let a = prompt("Enter a number ")
alert("you entered a of type " + (typeof a))
a = Number.parseInt(a)
alert("you entered a of type " + (typeof a))
let write = confirm("do you wants to write")
if (write) {
  document.write(a)
}
else {
  document.write("plz allow me to write")
}
