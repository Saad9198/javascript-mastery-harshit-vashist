// sort method 

// 5,9,1200,400,3000

// 5,9,400,1200,3000 (expected)

const numbers = [5,9,1200,400,3000]
numbers.sort((a,b)=>{
    return a-b;
})
console.log(numbers);
numbers.sort((a,b)=>{
    return b-a;
})
console.log(numbers);
// 1200,400
// a-b ---> 1200 - 400 = 800
// a-b ---> positive (greater than 0) ---> b,a


// a-b ---> negative ---> a,b
// 5, 9 --> -4 

// price lowToHigh HighToLow

const products = [
    {productId:1, productName:"p1",price:300},
    {productId:2, productName:"p2",price:3000},
    {productId:3, productName:"p3",price:200},
    {productId:4, productName:"p4",price:8000},
    {productId:5, productName:"p5",price:500},
]
// lowToHigh
const LowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
})
console.log(LowToHigh)
// HighTolow
const HighToLow = products.sort((a,b)=>{
    return b.price-a.price
})
console.log(HighToLow)
console.log(products)
// numbers.sort((a,b)=>a-b);
// ["5", "9", "1200", "400","3000"]
// [53, 57, 49, 52, 51]
// [49, 51, 52, 53, 57]
// [1200, 3000, 400, 5, 9]
// based on asci code
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

const userNames = ['harshit','abc','mohit','nitish','aabc','AABC']
// userNames.sort()
// console.log(userNames)

// numbers.sort();
// console.log(numbers);


// real stick Example



