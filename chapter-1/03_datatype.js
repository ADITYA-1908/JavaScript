// premetive datatype
console.log("----------premetive datatype-----------")
 let a=null
 let b=34
 let c="adi"
 let d =BigInt(1000)
 let e=Symbol("#")
 let f=true
 console.log(a)
 console.log(b)
 console.log(c)
 console.log(d)
 console.log(e)
 console.log(f)
 console.log("----------typeof premetive datatype-----------")
 console.log(typeof a)
 console.log(typeof b)
 console.log(typeof c)
 console.log(typeof d)
 console.log(typeof e)
 console.log(typeof f)

 // Non-premetive datatype
 console.log("------------Non-premetive datatype-----------")
 const item={
    "adi":true,
    "sritam":false,
    "subham":34,
    "rahul":undefined
 }
 console.log(item["adi"])
 console.log(item["sritam"])
 console.log(item["subham"])
 console.log(item["rahul"])
 console.log(item["nikhil"])  //not present so it is undefine
 