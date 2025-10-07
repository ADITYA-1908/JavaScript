// Parent Class
class Animal {
    //Constructor
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

}

// Child Class inherits from Animal
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`);
    }
}

// instance
const dog1 = new Dog("Tommy");
dog1.eat();
dog1.bark();
