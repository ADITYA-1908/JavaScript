const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation succeeded!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then((result) => console.log(result))  // called if resolved
    .catch((error) => console.log(error)); // called if rejected


//!Promise Chaining
const add = (num) => Promise.resolve(num + 2);

add(5)
    .then((res) => {
        console.log(res); // 7
        return res * 3;
    })
    .then((res) => {
        console.log(res); // 21
        return res - 1;
    })
    .then((res) => console.log(res)); // 20
