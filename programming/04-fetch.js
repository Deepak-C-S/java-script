//! fetch .js

//Fetch is a method which work internally with promises .
//fetch method is used to make network request and to call API in js.

//Fetch will return a promise in js

fetch("https://fakestoreapi.com/products/1")
.then((res)=> res.json())
.then((jsonData) => {
    console.log(jsonData);
})
.catch((error) => {
    console.log("Error fetching data:", error);
});



//! async 
// declare a function or method as async and can pause its excution to wait for complete of other process

//! await
// Make a suspension point where the async function will pause until the promise is resolved or rejected and resume with the resolved value or throw an error if rejected.

async function fun1() {
    let response = await fetch("https://fakestoreapi.com/products/1");
    let jsonData = await response.json();
    console.log(jsonData);
    let result = jsonData;
    console.log(result);
}
fun1();

