function greet(fName, LName) {
    console.log(`hi i am ${fName} ${LName} i am from ${this.place} ${this.state}`)
}

const data = { place: "Berhampur", state: "Odisha" }

greet.call(data, "Aditya", "Basantia")