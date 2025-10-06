const person = {
    name: "Aditya",
    age: 21,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

console.log(person.name); 
console.log(person["age"]);   
person.greet();               
