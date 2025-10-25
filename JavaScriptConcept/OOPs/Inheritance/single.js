// Parent Class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Child Class inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent class constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking is a ${this.breed}`);
        // console.log(`${this.name} is barking`);
    }

    eat() {
        super.eat();
        console.log(`${this.name} finished eating and is happy!`);
    }
}

// instance
const dog1 = new Dog("Tommy", "Labrador");
dog1.eat();  // Calls overridden method and also parent method
dog1.bark();