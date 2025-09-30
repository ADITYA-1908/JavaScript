const person = {
    name: "Aditya",
    age: 21,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

console.log(person.name);     // Dot notation → Aditya
console.log(person["age"]);   // Bracket notation → 21
person.greet();               // Hello, Aditya
