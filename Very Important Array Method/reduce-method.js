// reduce method

const numbers = [1,2,3,4,5,10]

// aim : sUM of ALL THE NUMBERS IN Array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
}, 100); //passing the initial Value FOr Better Undestanding See Line number 20 Diagram

console.log(sum);
// accumulator, // current value,  // return
    //  1     ,     2           ,      3
    // 3      ,     3           ,      6
    // 6      ,     4           ,      10
    // 10     ,     5           ,      15
    // 15     ,     10          ,      25


// accumulator ,   // Current Value ,   // return
    // 100        ,   1                ,   101
    // 101        ,   2                ,   103
    // 103        ,   3                ,   106
    // 106        ,   4                ,   110
    // 110        ,   5                ,   115
    // 115        ,   10               ,   125      
// jo accumulator ki value hogi wo hogi 0 index ki


const secondNumber = [7,3,76,5,10];


const SumSecondNumber = secondNumber.reduce((accumulator, currentValue)=>{
    // console.log(accumulator, currentValue)
    // console.log(cu)
    return accumulator + currentValue;
})

// Accumulator ,   CurrentValue ,   return
//    7          ,       3        ,    10
//    10         ,       76       ,    86
//    86         ,       5        ,    91
//    91         ,       10       ,    101
console.log(SumSecondNumber);



const UserCart = [
    {productId: 1, productName: "mobile", price:12000},
    {productId: 2, productName: "laptop", price:22000},
    {productId: 3, productName: "tv", price:15000},
]

const totalAmount =  UserCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0) 

console.log(totalAmount);


// total Price,     current Product Price,     return
    // 0,                  12000                   12000
    // 12000,              22000,                  34000,
    // 34000,              15000,                  49000

