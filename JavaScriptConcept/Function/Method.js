//! Call
// function greet(fName, LName) {
//     console.log(`hi i am ${fName} ${LName} i am from ${this.place} ${this.state}`)
// }

// const data = { place: "Berhampur", state: "Odisha" }


// greet.call(data, "Aditya", "Basantia")

//!apply
function greet1(fName, LName) {
    console.log(`hi i am ${fName} ${LName} i am from ${this.place} ${this.state}`)
}

const data1 = { place: "malkangiri", state: "Odisha" }

greet1.apply(data1, ["subham", "Basantia"])

//!Bind
// function greet2(fName, LName) {
//     console.log(`hi i am ${fName} ${LName} i am from ${this.place} ${this.state}`)
// }

// const data2 = { place: "Bengaluru", state: "Odisha" }

// const getData = greet2.bind(data2, "subham", "Basantia")
// getData()
