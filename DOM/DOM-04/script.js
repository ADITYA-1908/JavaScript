//event listner

//2nd approch
function op() {
    alert(" done with function")
}
click2.onclick=op


//3rd approch
// function flag() {
//     alert(" without click i will run")
// }
// click3.onclick=flag()



//4th approch to add event listner
function call() {
    alert("running with addEventListener")
}
click4.addEventListener('click',call)


//5th approch to add event listner multipal time
function call() {
    alert("1st run of multiple time ")
}
click5.addEventListener('click',call)
click5.addEventListener('click',function call() {
    alert("2nd run of multiple time ")
}) 