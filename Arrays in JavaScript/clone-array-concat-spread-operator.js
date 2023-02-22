// how to clone array

// how to concatenate two arrays

let array1 = ["item1","item2"];

let array2 = ["Saad","AHmed"];
let array3 = ["item1","item2"];
let NewArray = [...array1, ...array2, ...array3]
// console.log(NewArray);

// array1 = [...array2, ...["item5", "item6"]];

// array1 = [...array1, ...array2, ...["item5", "item6"]];
// array1 = array2.concat(array1,["item5", "item6"]);
// console.log(array1)
array2 = [].concat(array1,["item3","item4"]);
console.log(array2);
//new way
//spread operator
let oneMoreArray = ["item3","item4"]

array1.push("item3");

// console.log(array1[0]===array2[0]);

let array5 = {name:1};
let array6 = {name:3}; 
// console.log(array5.name===array6.name);


// console.log(array1);
// console.log(array2);