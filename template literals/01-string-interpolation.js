//! 01-string-interpolation.js

// Expression inside ${}

let price = 100;
let tax = 0.19;
let totalPrice = `Total price is ${price + (price * tax)}.`;
console.log(totalPrice);  // Total price is 119.

function getdiscount(price) {
    return price * 0.1;
}
console.log(`Discount on the product is ${getdiscount(price)}.`);  // Discount on the product is 10.
//-
const score=85;
console.log(`result is : ${score>=60 ? "Pass" : "Fail"}.`);  // result is : Pass.

//+ ----------------------------------------------------------

let mrp=150;
let discount=0.25;
let finalPrice=`Final price is ${mrp - (mrp * discount)}.`;
console.log(finalPrice);  // Final price is 112.5.

// ----------------------------------------------------------
const user={
    firstname:"Deepak",
    lastname:"C S",
    age:22
};
console.log(`User's full name is ${user.firstname} ${user.lastname} and age is ${user.age}.`);  

//----------------------------------------------------------

const numb=[1,2,3,4,5];
console.log(`Sum : ${numb.reduce((acc, curr) => acc + curr, 0)}.`);  // Sum : 15.

// ----------------------------------------------------------

const items=["apple", "banana", "orange"];
console.log(`WE have ${items.length} items: ${items.join(", ")}.`);  // WE have 3 items: apple, banana, orange.