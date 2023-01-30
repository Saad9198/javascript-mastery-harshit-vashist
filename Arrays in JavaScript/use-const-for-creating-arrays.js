// Use Const For Creating Arrays
const pi = 3.14;
// pi = 12;
// Uncaught TypeError: Assignment to constant variable at use-const-for-creating-arrays.js:3:4
console.log(pi);

const fruits = ["apple", "mango"];  // We score a some address in it for example 0x11
// As before discussed The Arrays always stores its values in the heap memory ["apple", "mango"] 0x11
fruits.push("banana");  // Here we do not change any address in constant we just said
// add the value of banana in the Heap memory of the same address 
// fruits = ["grapes","pineapple"] /Uncaught TypeError: Assignment to constant variable.
    // at use-const-for-creating-arrays.js:11:8

    //if we have a let here instead of const then we donot have any error to change its value
console.log(fruits);

// now the question is this that we should use const for making arrays or let to make arrays 
// 90% of the developers used the const for making arrays

// if i am using any primitive type i will always use a const not let 