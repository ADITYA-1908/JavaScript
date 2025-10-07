class Person {
    #name;  // private property

    constructor(name, age) {
        this.#name = name;  // private variable
        this.age = age;     // public variable
    }

    // getter (to access private data)
    getName() {
        return this.#name;
    }

    // setter (to modify private data)
    setName(newName) {
        this.#name = newName;
    }
}

const p1 = new Person("Aditya", 22);

console.log(p1.age);       // ✅ Accessible (public)
console.log(p1.getName()); // ✅ Accessed through getter
// console.log(p1.#name);  ❌ Error: private field

p1.setName("Basantia");
console.log(p1.getName()); // Output: Basantia
