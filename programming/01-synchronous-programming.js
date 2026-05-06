//! 01-synchronous-programming

// Synchronous programming is a programming paradigm in which tasks are executed sequentially, one after the other. 
// In this model, each task must complete before the next one begins. 

//  A Synchronous function is a function that executes in a single thread and completes its execution before moving to the next task.
// It blocks the other operation untill the current code  completes.  
// Synchronous progamming means code execute line by line , that is one task at a time and each line waits for the previous line to complete before executing.

//? NOTE : 
// only one operation happens at a time.
// no parallel execution allowed.
// If any task takes time to complete, it will block the entire program until that task is finished.

//:  example of synchronous programming
console.log("start");
function task1() {
    console.log("Task 1 completed");
}
function task2() {
    console.log("Task 2 completed");
}
task1();
task2();
console.log("end");