// hoisting
console.log("Only Function declaration case In Javascript are hoisted arrow function, function expression are not hoisted")
console.log("we can access the variable before initialized it")
hello() // it is hoisted

function hello() {
    console.log("Hellow world ");
}
// hellow()

// const hello = function() {
//     console.log("Heloow world ")
// }

// const hellow = ()=>{
//     console.log("Hellow WOlrd")
// }

console.log(hellow)
let hellow = "hellow world";
console.log(hellow);