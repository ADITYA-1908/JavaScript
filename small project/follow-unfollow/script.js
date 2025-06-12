let istatus = document.querySelector("h5")

let addFriend = document.querySelector("#add")
let flag = 0;
// let removeFriend=document.querySelector("#remove")

addFriend.addEventListener("click", Revati)
function Revati() {
    if (flag == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        flag = 1
        addFriend.textContent="Unfollow"
    }
    else {
        istatus.innerHTML = "Strenger"
        istatus.style.color = "Red"
        addFriend.textContent="Follow"
        flag = 0
    }
}

// removeFriend.addEventListener("click",function () {
//     istatus.innerHTML="Strenger"
//     istatus.style.color="Red"
// })