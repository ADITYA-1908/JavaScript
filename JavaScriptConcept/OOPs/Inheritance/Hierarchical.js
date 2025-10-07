// Parent class
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

// Child class 1
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

// Child class 2
class Cat extends Animal {
    meow() {
        console.log("Cat is meowing");
    }
}

// Creating objects
const dog1 = new Dog();
dog1.eat();
dog1.bark();

const cat1 = new Cat();
cat1.eat();
cat1.meow();  
