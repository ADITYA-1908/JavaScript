let user = prompt("Enter S, P or SE")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "P", "SE"][cpuI]

const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody"
  }
  else if(cpu === "S" && user==="P"){
    return "user"
  }
  else if(cpu === "S" && user==="SE"){
    return "cpu"
  }
  else if(cpu === "SE" && user==="P"){
    return "cpu"
  }
  else if(cpu === "SE" && user==="S"){
    return "user"
  }
  else if(cpu === "P" && user==="S"){
    return "cpu"
  }
  else if(cpu === "P" && user==="SE"){
    return "user"
  }
}
let result = match(cpu, user)
document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )