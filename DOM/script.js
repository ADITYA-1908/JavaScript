// 4 PILLARS OF DOM

// 1)Selection OF Element
var a= document.querySelector("h1")
 console.log(a);

//  2) Changing HTML  
var b= document.querySelector("h2")
a.innerHTML = "change the element "

// 3) Change the CSS
var b= document.querySelector("h2")
a.style.backgroundColor="green"

//4) Event listner
var op=document.querySelector(".btn")
op.addEventListener("click",function(){
    op.style.color="green"
    op.style.backgroundColor="white"
    op.innerHTML="Unfollow"
})


//bulb
var aa=document.querySelector(".bulb")
var bb= document.querySelector(".btn1")
var f=0

bb.addEventListener("click",function(){
    aa.style.backgroundColor="yellow"
    bb.innerHTML="OFF"
    if(f==0){
        aa.style.backgroundColor="yellow"
        bb.innerHTML="OFF"
        f=1
    }
    else{
        aa.style.backgroundColor="white"
        bb.innerHTML="ON"
        f=0
    }
})


