// Parent class
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

// Child class 1
class Dog extends Animal {
    makeSound() {
        console.log("Dog barks 🐶");
    }
}

// Child class 2
class Cat extends Animal {
    makeSound() {
        console.log("Cat meows 🐱");
    }
}

// Using polymorphism
const animals = [new Dog(), new Cat(), new Animal()];

animals.forEach((a) => a.makeSound());
