const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// for (let i = 0; i <numbers.length;i++) {
//     myFunc(numbers[i],i)
// }

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number} and after Multiplying by 2 the value is ${number * 2}`);
// });

const users = [
    {firstName:"Saad", age:21},
    {firstName:"Amin", age:25},
    {firstName:"sabahat", age:24},
    {firstName:"Raees", age:23},
]

// users.forEach(function(user){
//     console.log(user.firstName);   
// }) 

// for(let user of users){
//     console.log(user.firstName)
// }

users.forEach(user=>{
    console.log(user.firstName)
    console.log(user.age)
})