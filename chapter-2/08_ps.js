//question 01
const prompt = require('prompt-sync')();
let a =prompt("entrer your age ")
if(a<10 && a>1)
{
    console.log("age lies bewteen 1 to 10")
}
else
{
    console.log("age lies not bewteen 1 to 10")
   
}

//question 02
let b=prompt("enter the number  ")
if (b%2==0 && b%3==0) 
{
    console.log("The number is divisible by 2 and 3 ")    
}
else
{
    console.log("The number is not divisible by 2 and 3 ")    

}