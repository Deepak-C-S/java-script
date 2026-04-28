//* 18.delete

var user=[
    {name:"deepak",age:53},
    {name:"suprith",age:24},
    {name:"chaulva",age:25},
    {name:"ujwal",age:26}]
delete user[0]
console.log(user)
user.push({name:"deepak",age:23})

console.log(user)
console.log(user.length)