//* 04-nested-object

var user ={
    name : "Deepak C S",
    id:12,
    email:"dcs@gmail.com",
    address : {
                city : "Bengaluru",
                state : "Karnataka",
                country : "India"
            },
    skills : ["HTML", "CSS", "JavaScript"],
    isLoggedIn : true

}
// READ
console.log(user);
console.log(user.address);
console.log(user.address.city);

// CREATE
user.dob="07-07-2004";
console.log(user);

// UPDATE
user.skills.push("Python");
console.log(user);

// DELETE
delete user.isLoggedIn;
console.log(user);