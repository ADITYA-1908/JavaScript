let marks={
    adi:90,
    subham:20,
    reehan:99
}
// question-1
for (let i = 0; i < Object.keys(marks).length; i++) 
{
    console.log("the marks of "+Object.keys(marks)[i]+ " are "+marks[Object.keys(marks)[i]])
}
console.log("-----------------------------------------") 
//question-2
for(let key in marks){
    console.log("the marks of "+key+ " are "+marks[key])
}