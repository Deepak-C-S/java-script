//* 07-join

// : whenever we want to convert an array into a string we can use the join() method. 
// : It takes an optional separator as an argument, which is used to separate the elements in the resulting string. 
// : If no separator is provided, it defaults to a comma (,).

let res = ["Deepak","CSE",2022]
console.log(res)
console.log(res.join())
console.log(res.join(" "))
console.log(res.join("-"))
console.log(res.join("/"))  