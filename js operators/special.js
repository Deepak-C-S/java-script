// special operators in js
// (?:) ternary operator
//      It is a conditional operator that takes three operands and returns a value based on a condition.
//      syntax : condition ? expression1 : expression2
var age=22
var result=age>=18 ? "You are an adult" : "You are a minor"
console.log(result) // You are an adult

let num=10>5? console.log("yes") : console.log("no") // yes
 
// comma operator(,)
//      It is used to separate multiple expressions where only one expression is expected.
//      It evaluates each of its operands (from left to right) and returns the value of the last operand.
let x=(1,2,3)
console.log(x) // 3

let name="Deepak"
var age=22
var isStudent=true
console.log("student info : ",name, age, isStudent) // student info :  Deepak 22 true
