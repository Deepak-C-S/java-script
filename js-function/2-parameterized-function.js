// 2-parameterized-function

// we can send any info to the function by passing a parameter /input


// syntax :
//   |   function function_name (parameters) {
//   |   set of codes
//   |   function_name(arguments)

// PARAMTERS: this is a variable with out a scope statement which is used to store data and we utlize that data inside the function. 

// ARGUMENTS: this is a value which we pass to the parameter when we call the function. 

function Details(name,age ,city){
    console.log("my name is ", name)
    console.log("my age is ", age)
    console.log("i am from ", city)
}

Details("Deepak", 22, "Bangalore")

Details("Rahul", 25) // undefined if not passed the value for the parameter it will be undefined.

Details("ramesh", 35, "Mumbai", "India") // it will ignore the extra argument which is not defined in the parameter.

