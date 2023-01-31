// intro to arrays

// how to create arrays


var Question = "what is array";

console.log(Question);

var Answer = "Array Is A Reference Type.";

console.log(Answer);

var Question2 = "What is Reference Type?";

console.log(Question2);

var Answer2 = "Reference type is object and Array is a object in Javascript";
console.log(Answer2);

var ArrayDefinition = "The Definition Of Array is Collection Type."

console.log(ArrayDefinition);

var TechDefinition = "In Programming and technical Terms We can define Arrays As A Ordered Collection Of Items"

console.log(TechDefinition);

let fruits = ["apple","mango","grapes"];

console.log(fruits);

let number = [1,2,3,4];

console.log(number);

console.log(fruits[0,1,2]); // Grapes 
// Always show which is last when multiple indexing called

let mixed = [1,2,2.3, "string", null, undefined]
console.log(mixed);

let name12 = ["saad","raees","amin"];
name12[1] = "";
console.log(name12)
console.log(typeof name12); //object

let obj = {}; // Literal Object
console.log(obj);
console.log(typeof obj);
console.log(Array.isArray(name12)) // True means It Is Array
console.log(Array.isArray(obj)) // false means it is not Array
// array Indexing