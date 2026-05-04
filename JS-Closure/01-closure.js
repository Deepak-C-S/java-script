//! 01-closure.js

// It is technique to access of outer function variable insider inner function
// Closures can be defined as a js feature in which the inner function has access to the outer (enclosing) function's variables 
// js every time a closure is created with the creation of a function.

// The closure has 3 scope chain :
// 1. Access to its own scope 
// 2. Access to the outer function's scope 
// 3. Access to the global scope 

//! SYNTAX
// function outerFunction() {
//      function inner (){
//         }
//      return inner;
// }

function outerFunction() {
    var city = "Bangalore";
    console.log(`Outer function: ${city}`);
    function innerFunction() {
        console.log(`Inner function: ${city}`);
    }
    return innerFunction;
}
var closureFunction = outerFunction(); // Output: Outer function: Bangalore
closureFunction(); // Output: Inner function: Bangalore

