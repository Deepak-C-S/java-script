//! 03-promise.js
// These are the way to handle asynchronous operations in js    
// A promise is a js object that links producing code and consuming code that represents a value that may be available now, in the future, or never.

//: The promise has 3 states :
//* 1. Pending : Initial state, neither fulfilled nor rejected.
//* 2. Fulfilled : The operation completed successfully, and the promise has a resolved value.
//* 3. Rejected : The operation failed, and the promise has a reason for the failure (error).    

//|                              PROMISE
//|                                 |
//|    ---------------------------------------------------------
//|    |                            |                           |
//|   Fulfilled                  pending                     Rejected
//|    |                            |                           |
//|    V                            V                           V
//|   resolve()                                             reject()
//|    |                                                        |
//|    V                                                        V
//|  then()                                                   catch()

//: Creating a promise
let promiseDemo = new Promise((resolve, reject) => {
    if(false) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});



//: Handling a promise
promiseDemo.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

