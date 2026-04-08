// comparsion operators
// == equal to
// === strict equal to
// != not equal to
// !== strict not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// -------------------------------------
// 1. Equal to (==) operator
//      It compares the values of two operands 
//      It will perform loose comparsion and do type conversion
//      1. check datatype
//      2. if not matching then do type conversion based on right side 
//      3. after it check value , if both match return true else false
var  num1=10
var num2="10"
console.log(num1==num2) // true

var num3=200    
var num4="100"  
console.log(num3==num4) // false

var num5=0
var num6=false
console.log(num5==num6) // true

var num7=false
var num8="false"        
console.log(num7==num8) // false is 0 " false" is converted to num :Nan  so false

var num9="false"
var num10=false
console.log(num9==num10) 

//2. Strict equal to (===) operator
//      It compares the values and the data types of two operands and returns true if they are equal, otherwise it returns false.
//      1. CHECK datatype if match ,check value and if match true
//      2. if datatype not matching then return false
console.log("Strict comprasion")
var data1=55
var data2="55"
console.log(data1===data2) 
 
var data3=55
var data4=55
console.log(data3===data4) 

var data5=true
var data6=false
console.log(data5===data6) 

var data7=13
var data8=14
console.log(data7< data8) // true
console.log(data7> data8) // false
console.log(data7<=data8) // true
console.log(data7>=data8) // false

console.log(10 > 5) //          true
console.log(null>=0 ) //    `   true because null is converted to 0 and 0>=0 is true
console.log(null>0) //          false because null is converted to 0 and 0>0 is false
console.log(undefined>0) //     false because undefined is converted to NaN and NaN>0 is false
console.log(undefined<0) //     false because undefined is converted to NaN and NaN<0 is false
console.log(undefined==null) // true because undefined and null are considered equal in loose equality