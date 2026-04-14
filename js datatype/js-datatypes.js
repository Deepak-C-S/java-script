// primitive :
//     i   Number 
//     ii  String
//     iii Boolean
//     iv  undefined
//     v   null
//     vi  BigInt
//     vii Symbol
// 
// Non primitive :
//     Object type
// 
// Primitive           |   Non-Primitive
// --------------------|--------------------
// *basic datatype     |   *complex datatype
// *immutable          |   *Mutable
// *stack              |   *head
// 
//          1. Primitive Datatype

// i. Number Type:
//          It is a datatype of integer, decimal,and comes under number type
var num=13
let n=90.99
console.log("num value is",num)
console.log("n value is ",n) 

// ii . String Type:
//          Any data enclosed with " " or ' ' is comes under string type
var name="Deepak"
let usn='1CE22AI012'
const age='22'
console.log("name is :",name)
console.log("usn is :",usn)
console.log("age is :",age)

// iii . Boolean type:
//          Any variable which contains value true or false such types of data comes under Boolen value
//          true  -> 1
//          false -> 0
let isStudent=true
const isCourseCompleted=false
console.log("is Student ? ",isStudent)
console.log("Does course completed ? ",isCourseCompleted)

// 3 datatypes only use 95% in js
// in JS these are 2 special datatypes values

//  iv.  Undefined type:
//          when we declare a variable but not assign any value to it, then the value of that variable is undefined
var a;
let names;
console.log(a)

// v. Null type 
//  null is empty
var b =null
console.log(b)

// vi. BigInt type:
//         when we want to store a very large number which is greater than 2^53-1 then we can use BigInt type

let myCetRank=856745866525478568465
console.log(myCetRank)
console.log(typeof myCetRank)  // type is number type
let CetRank=BigInt(12345678978989754521)
console.log(CetRank)
console.log(typeof CetRank) // type is bigint
// console.log( myCetRank+CetRank)    // error if number+bigint diff type not allowed
console.log( BigInt(myCetRank)+CetRank) 

//! vi Symbol type:
//         It is a unique and immutable data type 

let sym1=Symbol("id")
let sym2=Symbol("id")
console.log(sym1)
console.log(sym2)
console.log(sym1==sym2)

//!  2. Non-Primitive Datatype
//         Object type:
//         It is a collection of properties, and each property is an association between a key and a value. 
let person={
    name:"Deepak",
    age:22,
    isStudent:true
}
console.log(person) 
console.log(typeof person) // type is object

// Array is also a non-primitive datatype   

var arr=[1,2,3,4,5]
console.log(arr)

let person1={} // empty object