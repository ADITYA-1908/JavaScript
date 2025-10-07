class Car {
    //Constructor
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }
    //methods
    info() {
        console.log(this.brand + " and " + this.color)
    }
}

// Instance
const myCar = new Car("BMW", "red");
myCar.info();