// funcions are the block of codes which are designed to perform a specific task.
// we can call js functions multiple times to reuse the code and avoid repetition.
// functions won't get automatically invoked unless and untill we invoke it.


// FUNCTION IN JAVASCRIPT
// function ---> keyword
// function_name ---> behavior/action

// Syntax :
//    |   function function_name (parameters) {
//    |    set of codes 
//    |   }
//    |   function_name() 




//----------------------------------------------------

//          Types of functions in JavaScript

//          1.named function
//          2.parameterized function
//          3.returning function
//          4.anonymous function
//          5.callback function
//          6.higher-order function
//          7.arrow function
//          8.immediately invoked function expression (IIFE)
//          9.currying function
//          10.pure function
//          11.async function


function greet() {
    console.log("Hello, welcome to JavaScript functions!")
}
greet()                         // Hello, welcome to JavaScript functions!

function add() {
    let a = 5
    let b = 10
    console.log(a + b)
}
add()        // 15