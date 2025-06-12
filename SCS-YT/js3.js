// 1-->constructure function 
// function ad(a){
//     this.a=12;
//     this.b="adi";
//     this.c=false;
// }
// op = new ad()
// console.log(op)

//2-->higher order function 
// function op(){

// }
//(function inside another function called higher order function) 
// p=new op(function(){

// })

//3-->iffe (web-console)
// var ans=(function(){
//     var a=23;
//     return{
//         getter: function(){
//             console.log(a);  // console ==> ans.getter op-->23
//         },
//         setter:function(val){
//             a=val;        // console ==> ans.setter(21)then check ans.getter op-->23
//         }
//     }
// })()


//4--> inheritance
// var parent ={
//     gender: "male",
//     blood_group:"b+"
// }

// var child = {
//     age:10,
//     color:"Black"
// }

// child.__proto__= parent;

//5--> use of this 
// global => window
// console.log(this)

// functio  => window
// function op(){
//     console.log(this)
// }
// op()

// method => object
// var obj={
//     hihi:function(){
//         console.log(this);
//     }
// }
// obj.hihi();