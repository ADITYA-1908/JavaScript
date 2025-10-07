// Grandparent class
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

// Parent class inherits from Animal
class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

// Child class inherits from Dog
class Puppy extends Dog {
    weep() {
        console.log("Puppy is weeping");
    }
}

// Creating object of the child class
const p1 = new Puppy();
p1.eat();
p1.bark();
p1.weep(); 
