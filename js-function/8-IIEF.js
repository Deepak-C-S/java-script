//:                  8-IIEF
//! IIFE (Immediately Invoked Function Expression)

// it are the functions which are invoked immediately after its creation.



(function(){
    console.log("This is an IIFE function") 
})
(); 



(function(name){
    console.log(`Hello, ${name}! Welcome to JavaScript functions!`) 
}("Deepak C S"));                   



(function(a,b){
    console.log(a+b) 
}(5,10));                          