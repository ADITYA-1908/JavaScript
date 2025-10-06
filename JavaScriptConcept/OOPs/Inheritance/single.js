class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed, gender) {
        super(name);
        this.breed = breed;
        this.gender = gender;
    }

    speak() {
        console.log(`${this.name} is a ${this.breed} and gender is ${this.gender}`);
    }
}

const animal = new Animal("Generic Animal");
animal.speak();

const dog = new Dog("Tommy", "German Shepherd", "Male");
dog.speak(); 
