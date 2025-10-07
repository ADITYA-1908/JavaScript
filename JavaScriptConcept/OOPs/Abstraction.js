class Car {
    startCar() {
        this.#startEngine();
        this.#checkFuel();
        console.log("Car started successfully!");
    }

    // private methods (hidden from outside)
    #startEngine() {
        console.log("Engine started...");
    }

    #checkFuel() {
        console.log("Fuel checked...");
    }
}

const car1 = new Car();
car1.startCar();     // ✅ Allowed
// car1.#startEngine(); ❌ Error: Private method
