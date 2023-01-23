// Undefined 
//null

let firstName;
console.log(typeof firstName);
firstName = "Saad";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(typeof myVariable, myVariable);
console.log(typeof null);//object Bug In JAVASCRIPT

//BigInt

let myNumber = BigInt(12);
console.log(myNumber);
let sameMyNumber =123n;
console.log(sameMyNumber);

console.log(myNumber+ sameMyNumber)
