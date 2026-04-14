//:                             4-Anonymous-function

//! Functions without a name is called anonymous function. 
//* SYNTAX
//  |   function (parameters) {
//  |   set of codes
//  |   }
//  |   (function_name)()  --> to invoke the anonymous function we need to wrap it in parentheses and then call it with another set of parentheses.

//! Function Expression
//* Function expression is the process of assigning a function to a variable and make a call.



let greet = function() {
    console.log("Hello, welcome to JavaScript functions!")
}
greet()                         // Hello, welcome to JavaScript functions!

let greetagain = function() {
    return "Hello, welcome to JavaScript functions!"
}   
console.log(greetagain())        // Hello, welcome to JavaScript functions!

// -------------------------------------------------

let add = function(a, b) {
    return a + b
}
console.log(add(5, 10)) // 15

// NOTE