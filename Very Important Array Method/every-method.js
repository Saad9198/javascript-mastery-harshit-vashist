const numbers = [2,4,6,8,10];

// function isEven(number) {
//     return number % 2 === 0
// }
// const ans = numbers.every(isEven);
const ans = numbers.every((number)=>number%2===0)
console.log(ans)

const UserCart = [
    {productId: 1, productName: "mobile", price:12000},
    {productId: 2, productName: "laptop", price:22000},
    {productId: 3, productName: "tv", price:15000},
]

// check every product < 30000
const AnsOfUserCart = UserCart.every((cartItem)=>cartItem.price < 30000);
console.log(`The price of every user is ${AnsOfUserCart}`);
// call back function --> true / false (boolean)

// every method ---> true / false (boolean)
