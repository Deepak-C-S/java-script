//! 02-asynchronous-programming

// Asynchronous programming in js is a non-blocking execution model where long-running task can be executedin the background without blocking the main thread.
// means while other operations can continue to run.

//? NOTE:
// In js Asynchronous programming executes take care by the event loop
// Event loop is part of the js runtime envirnoment it is not a part of js engine
// In js settimeout and setinterval are the build-in functions that allow us to perform asynchronous operations.
// but we can also use promises and async/await 

//: example of asynchronous programming
console.log("start");
function demo() {
    setTimeout(function() {
        console.log("Demo task completed");
    }, 2000);
}
demo();
console.log("end");