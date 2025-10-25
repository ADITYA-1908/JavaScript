const person = {
    name: "Aditya",
    age: 21,
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

console.log(person.name); 
console.log(person["age"]);   
person.greet();               

const data = [
    {
        name: "aditya",
        age: "22",
        deg: "QA"
    },
    {
        name: "subham",
        age: "22",
        deg: "QA"
    },
    {
        name: "subham",
        age: "22",
        deg: "DA"
    }
]

//! Add in the object
// const add = data.map((item) => ({ ...item, address: "bangalore" }))
// console.log(add);

//!remove in the object
// const remove = data.map(({ age, ...rest }) => rest)
// console.log(remove);


//!filter QA and give all the data 
const Qa = data.filter((item) => (item.deg === "QA")).map((i) => ({ name: i.name, age: i.age }))
console.log(Qa);