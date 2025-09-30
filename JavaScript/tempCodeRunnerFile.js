let n = 5
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= n - i; j++) {
        res += " ";
    }
    for (let s = 1; s <= i; s++) {
        res += "*";
    }
    console.log(res);
}


//class code 
// let n = 5
// let str = ""
// let sp = n - 1
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     for (let j = 1; j <= sp; j++) {
//         res += " ";
//     }
//     for (let s = 1; s <= i; s++) {
//         res += '*';
//     }
//     str += "\n";
//     sp--;
// }
// console.log(str);

//