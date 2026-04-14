// :                    7-arrow function

// ? What is an arrow function in JavaScript ?
// Arrow function is a new way to write functions in JavaScript. It is a shorter syntax for writing functions. It is also called as fat arrow function because of the syntax used to define it. It was introduced in ES6 (ECMAScript 2015) and it is widely used in modern JavaScript development.

//  it intorduced in ES6 (ECMAScript 2015) and it is widely used in modern JavaScript development.
// 1. we don't need to use the function keyword to define an arrow function.
// 2. we don't need to use the return keyword to return a value from an arrow function. it is implicit return.
// 3. we don't need to use the curly braces to define the body of an arrow function if it contains only one statement. it is also called as concise body.

// ? Syntax of arrow function   
//    () => { // body of the function }


// Paramaterized arrow call back function

let add = (a,b)=>a+b
function fun(f){
    console.log(f) 
}
fun(add(10,3))   // 5

// Return arrow callback function
let addd = (a,b)=>a+b

function funn(addd){
    console.log(addd) 
}
funn(addd(2,10))   // 5

// parameterized return arrow callback function
let x = (a,b)=>a+b
   // 5

function funnn(x){
    console.log(x) 
}
funnn(x(2,3))
