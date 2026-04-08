//logical operators:

// && and
// || or
// ! not


var a=true
var b=true
console.log(a && b) // true
var c=true
var d=false
console.log(c && d) // false
var e=false
var f=false
console.log(e && f) // false

console.log(10==20 && 20==30)           //false
console.log(10==20 || 20.0=="20")       //true
console.log(!false)                     //true
console.log(!(10<20))                   //false