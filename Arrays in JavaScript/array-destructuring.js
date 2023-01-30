// array destructuring

const myArray = ["value1","value2","vallue3","value4"];
let myvar1 = myArray[0];
let myvar2 = myArray[1];
// let myNewArray = myArray.slice(2);
console.log( "value of myvar1 is", myvar1);
console.log("value of my var2 is",myvar2);
// console.log(myNewArray);

// Array Destructuring
const myArray2 = ['item1','item2','item3','item4'];
let [myvar21, myvar22, ...myNewArray2] = myArray2; // They Act like a normal variable
myvar21 = "value change of myvar21";
myvar22 = "Value change of myvar22";
console.log("value of myvar21",myvar21)
console.log("value of myvar22",myvar22);
console.log(myNewArray2);
