const person = new Object();
person.name = "Aditya"
person.age = 21
person.greet = function () {
    console.log(`Hello ${this.name} your age is ${this.age}`)
}

person.greet();