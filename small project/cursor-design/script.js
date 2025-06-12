let main=document.querySelector("#main")
let crsr=document.querySelector(".cursor")

main.addEventListener("mousemove",function(d){
    crsr.style.left=d.x+"px"
    crsr.style.top=d.y+"px"
})