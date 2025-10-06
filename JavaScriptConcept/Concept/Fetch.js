//! using fetch method 
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Data received:", data);
//     })
//     .catch((error) => {
//         console.error("Fetch error:", error);
//     });


//!using promise 
// function fetchData(url){
//     return new promise((resolve,reject)=>{
//         fetch(url)
//         .then((response)=>{
//             return response.json
//         })
//         .then((data)=>{
//             resolve(data)
//         })
//         .catch((error)=>{
//             reject(error)
//         })
//     })
// }
// fetchData("https://jsonplaceholder.typicode.com/posts/1")
// .then((data)=>console.log("Data received",data))
// .catch((err)=>console.log("Error",err))

//Using Async/Await
async function fetchPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Data:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}

fetchPost();
