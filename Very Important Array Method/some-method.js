// some method

const numbers = [3,5,7,9];

// kya ek bhi number hai jo even hai true

// const ans = numbers.some((number)=>number%2===0);


const UserCart = [
    {productId: 1, productName: "mobile", price:12000},
    {productId: 2, productName: "laptop", price:22000},
    {productId: 3, productName: "tv", price:15000},
    {productId: 4, productName: "macbook", price:250000},
]

const ans = UserCart.some((cartItem)=>cartItem.price < 100000);
    console.log(ans);