// 1--> var and let use in the function 
// //var is a function scope and window object(can show in window) //var can be acess any time any place in the function
// function ans(params) {        
//     for(var i=0;i<11;i++){     
//         console.log(i)
//     }
//     console.log(i)
// }
// ans()


//let is a brases scope //let can not be acess any time any place in the function 
// function op(params) {
//     for(let i=0;i<11;i++){  
//         console.log(i)      
//     }
//     console.log(i) //this will show error 
    
// }
// op()

//2--> heap memory 1+2+3+4+5 => 3+3   6+4   =>this are stored in the heap memory

// 3-->Execution content
//when you will run it will make a imaginary container which is consist of 3 things
// 1)variable
// 2) function inside the parent function 
// 3)lexical environment 

// function ab(){
//     var a=12;
//     console.log(a)
//     def()
//     function def(){
//         var b=10;
//         console.log(b)
//     }
    // console.log(b)  //function variable only print inside the function only 

// }
// ab()


// 4-->for earch loop only work n array
// 1) function
// var a=[1,1,1,1]
// a.forEach(function(val){
//     console.log(val+1)
// })
// // 2) arrwo function
// var a=[1,1,1,1]
// a.forEach((val)=>
//     console.log(val+1)
// );


//5--> for each
// var a=[1,1,1,1];
// a.forEach(function(val){
//     console.log(val+1)
// })

//6--> for in 
// var obj={
//     a:12,
//     b:"adi",
//     c:34
// }
// for(var i in obj){
//     console.log(i,obj[i])
// }

// 7--> call back function  
//asynchronous js
// setTimeout(function(){
//     console.log("adi_subham")
// },2000)

setTimeout(()=>{
    console.log("adi_subham")
},2000)

// 8-->delete a object prop
var obj={
        a:12,
        b:"adi",
        c:34
    }
    console.log(obj)
    delete obj.c
    console.log(obj)