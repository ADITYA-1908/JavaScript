//practic set

//question-1 
let h="adi/"
console.log("lenght of h is ",h.length)

//question-2
const sentence="aditya is a good coder"
const word="aditya"
console.log(`the word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence  `)

// Problem 3
console.log(word.toLowerCase())
console.log(word.toUpperCase())

// Problem 4
let str2 = "Please give Rs 1000"
let amount = str2.slice(15)
let amounts = Number.parseInt(str2.slice(15)) // conver into interger 
console.log(amount)
console.log(amounts)
console.log(typeof amount)

// Problem 5
let friend = "Narmada"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable