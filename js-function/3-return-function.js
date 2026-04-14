//*  3 Return function

//? A return function is a function that returns a value after performing a specific task.
//? It allows us to get the result of a function and use it in other parts of our code.
//? Function which return the result and it should be stored in separate variable and we can see output by calling that variable.

//? return is the last statement inside the function after return statement the code will not execute.

//* i/p -->Function -->  (return) --> o/p

//TODO SYNTAX:
//    |   function function_name (parameters) {
//    |   set of codes
//    |   return value
//    |   }
//    |   function_name(arguments)



function greet() {
    return "Hello, welcome to JavaScript functions!"
}
let message = greet() 
console.log(message) // Hello, welcome to JavaScript functions! 

// ----------------------------------------

function multiply(num1, num2) {
    return num1 * num2
}   

let result = multiply(5, 10)
console.log(result) // 50             //! it will print the output which is stored in variable result.
//    or
console.log(multiply(5, 10)) // 50    //! it print the output directly without storing in variable.

// -------------------------------------------

//  ----> parameterized return function <----
function add(a, b) {
    return a + b
    console.log("This will not be executed") 
}
let sum = add(10, 20)
console.log(sum)     // 30   

