// 01-scope.js

//scope refers to the accessibility of variables and functions in different parts of the code.
// There are three types of scope in JavaScript:
// 1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
// 2. Function Scope: Variables declared within a function are in the function scope and can only be accessed within that function.
// 3. Lexical Scope: Variables declared with let or const within a block .

//! Global Scope:
var globalVar = "I am a global variable";

function globalScopeExample() {
    console.log(globalVar); // Output: I am a global variable
}
globalScopeExample();


//! Function Scope:
function functionsScopeExample() {
    var functionVar = "I am a function variable";
    function innerFunction() {
        console.log(functionVar); // Output: I am a function variable
    }
    innerFunction();
}
functionsScopeExample();

//-------------------------------------------

function fun$1() {  
    var a = 10; // function scope
    if (true) {
        console.log(a); // Output: 10 (accessible due to function scope)
    }
    else {
        let city = "Bangalore"; // block scope
        console.log(a); // Output: 10 (accessible due to function scope)
    }
    console.log(city); // ReferenceError: city is not defined (not accessible outside the block)
    }
fun$1();


//! Lexical Scope:
function lexicalScopeExample() {
    let lexicalVar = "I am a lexical variable";
    if (true) {
        console.log(lexicalVar,"TRUE");
    }
    else {
        console.log(lexicalVar,"FALSE");
    }
}
lexicalScopeExample();


// /   +--------------------+-------------------+-------------------+-------------------+--------------------+------------------+
//     |                    |    REASSIGNMENT   |  REDECLARATION    |   HOISTED         |    GLOBAL SCOPE    | FUNCTION SCOPE   |
// /   +--------------------+-------------------+-------------------+-------------------+--------------------+------------------+
//     |        VAR         |    ✔              |  ✔               |   ✔               |     ✔             | ✔                |
// /   +--------------------+-------------------+-------------------+-------------------+--------------------+------------------+
//     |        LET         |    ✔              |  ❌              |   ✔  (TDZ)        |     ❌            | ✔                |
// /   +--------------------+-------------------+-------------------+-------------------+--------------------+------------------+
//     |        CONST       |    ❌             |  ❌              |   ✔  (TDZ)        |     ❌            | ✔                |
// /   +--------------------+-------------------+-------------------+-------------------+--------------------+------------------+
//                                                                    TDZ-> Temporal Dead Zone


