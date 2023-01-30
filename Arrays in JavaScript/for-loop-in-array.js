// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

// for (let i=0;i<=9;i++) {
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[fruits.length-1]);//banana
// console.log(fruits[fruits.length-2]);//grapes
// console.log(fruits[fruits.length-3]);//mango
// console.log(fruits[fruits.length-4]);//apple
let fruits2 = [];
for(let i =0;i < fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);
