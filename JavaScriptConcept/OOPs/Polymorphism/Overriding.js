// Parent class
class Animal {
    eat() {
        console.log("Animal is eating...");
    }
}

// Child class
class Dog extends Animal {
    // Overriding the eat() method
    eat() {
        // Call the parent class method using super
        super.eat();
        console.log("Dog is eating bones...");
    }
}

// Create object
const dog1 = new Dog();

// Call method
dog1.eat();
