const numbers = [3,4,6,1,8];

// const square = function(number) {
//     return number * number;
    // console.log(number * number)
// }

// const squareNumber = numbers.map((number,index)=> {
//     return `index: ${index}, number is ${number * number} `;
//     // return number * number ;
// });
// console.log(squareNumber); 


const users = [
    {firstName: "Saad", age:21},
    {firstName: "Amin", age:25},
    {firstName: "Tabish", age:34},
    {firstName: "sabahat", age:24},
]

const UserName =  users.map((user)=>{
    return user.firstName
})
console.log(UserName);