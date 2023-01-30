// primitive vs referecne Data Types


// Primitive Types

let num1 = 6;
let num2 = num1;
console.log("Value Of num1 is",num1);
console.log("Value Of num2 is",num2);
num1++;
console.log("After Increment The Value of num1");
console.log("The Value Of num1 is",num1);
console.log("The Value Of num2 is",num2);

// Reference Type
// Array
let array1 = ["item1","item2"];
let array2 = array1;
console.log("The Value Of array1 is",array1);
console.log("The Value Of array2 is",array2);
array1.push("item3");
console.log("After Pushing The Value in arra1");
console.log("The Value Of array1 is",array1);
console.log("The Value Of array2 is",array2);