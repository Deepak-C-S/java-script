//:                  5-callback-function.js

// Any function which are used to pass as argument to another function is called callback function.

function greet() {
    console.log("Hello, welcome to JavaScript functions!")
}

function sum(a, b) {
    console.log(a + b)
}

function Greett(name) {
    console.log(`Hello, ${name}! Welcome to JavaScript functions!`)
}

d=function() {
    console.log("This is a callback function")
}


function mainFunction(x) {
    x
}   

mainFunction(greet())             // Hello, welcome to JavaScript functions!

mainFunction(sum(5, 10))        // 15

mainFunction(Greett("Deepak"))  // Hello, Deepak! Welcome to JavaScript functions!

mainFunction(d())                 // This is a callback function

// which is call back and which is HIGH ORDER FUNCTION?
// HIGH ORDER FUNCTION is the function which takes another function as an argument or returns a function as a result.
// in above example mainFunction is a high order function and greet, sum, Greett, d are callback functions.
// NOTE: callback function is a function which is passed as an argument to another function and it is executed after the main function is executed.


// ? HOW TO PASS ANONYMOUS FUNCTION AS A CALLBACK FUNCTION ?
function mainFunction1(x) {
    x
}
mainFunction1(function() {
    console.log("This is an anonymous callback function")
})   // This is an anonymous callback function


//? Parmaterized return anonymous callback function

function anonymouss(x){
    res=x
    console.log(res)
}

f1=function(x,y){
    return x*y
}
anonymouss(f1(2,3))  

