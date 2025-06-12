console.log("log")
console.info("info")
console.error("error")
console.warn("warn")
console.assert("err"!=false)
console.assert("log"==false)
console.time("A")
console.timeEnd("A")

//for loop
console.time("for loop")
for (let i = 0; i <5; i++) {
    console.log(223)
    
}
console.timeEnd("for loop")

//while loop
console.time("while")
  let i=0;
  while(i<5)
  {
    console.log(22)
    i++
  }
console.timeEnd("while")