// 01 -HOSTING.JS
// HOISTING IS THE DEFAULT BEHAVIOR OF JAVASCRIPT, 
// WHERE YOU CAN DECLARE VARIABLES AND FUNCTIONS BEFORE THEY ARE DEFINED IN THE CODE. 
// THIS MEANS THAT YOU CAN CALL A VARIABLE OR FUNCTION BEFORE IT IS DEFINED IN THE CODE.    

// Working with var(hosted and undefined)
// functions declarations (hoisted with definition)

// let and const are hoisted but remains in the temporal dead zone

// Both variables and functions are hoisted to the top of their scope.

//+ HOW IT WORKS 

// 1. First phase (m/m creation phase):
// -> It scans the code
// -> it create m/m space for variables and functions variable declarations are set to defined.
// -> Function declarations are fully hoisted 

// 2. Second phase (execution phase):
// -> run code line by line


//! HOISTING FOR VAR :

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

var b
console.log(b); // Output: undefined
b=20;
console.log(b); // Output: 20

//! HOISTING FOR LET AND CONST:

//: let and const are hoisted but remains in TDZ(Temporal Dead Zone) until they are initialized.

let x= 5;
console.log(x); // Output: 5

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y);

let z;
console.log(z); // Output: undefined
z = 15;
console.log(z); // Output: 15

//! HOISTING FOR FUNCTIONS:
//: Entire function greet is hoisted, so you can call it before its declaration.

greet(); // Output: Hello, World!

function greet() {
    console.log("Hello, World!");
}

//! HOISTING FOR FUNCTION EXPRESSIONS:
//: Function expressions are not hoisted, so you cannot call them before their declaration.


greetExpr(); // TypeError: greetExpr is not a function
var greetExpr = function() {
    console.log("Hello, Function Expression!");
};

//?  NOTE : Only Functions declarations are fully hoisted functions expressions and arrow function are behaved like variables