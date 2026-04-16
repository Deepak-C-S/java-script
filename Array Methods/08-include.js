//* 08-include

//: The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

var array=["dcs","deepak",13,"cec","dcs","deepak"]

console.log(array.includes("dcs"))           //! true
console.log(array.includes("deepak"))        //! true 
console.log(array.includes(13))              //! true
console.log(array.includes("java script"))   //? false 
