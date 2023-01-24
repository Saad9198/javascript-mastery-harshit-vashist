// && and Operaotr
var Description = "These are For the && Operartor"
console.log(Description);
var DefinitionOfAnd = "The && Operator can be defined as when the both conditions of the two given value is true"
console.log(DefinitionOfAnd);
let firstName = "Harshit"
let age = 22;
// if(firstName[0] === "H") {
//     console.log("Your Name Start With H")
// }

// if (age > 18) {
//     console.log("You Are Above 18");
// }
// we can use && Operator If The Given Conditions Is True if each condition of
// given condition is not true the whole process will be run in else statement(false)  
// see Example 1 And 2 For Better Clearfication
if(firstName[0] === "H" && age>18){
    console.log("Name Start With H and Age is Above 18");
}


let Example1 = "harshit"
let Exampleage = 22;

if (Example1[0] === "H" && Exampleage>18) {
    console.log("Name Start With H And Age Is Above 18")
}
else{
    console.log("The condition IS False Because H is small in the given variable and and in statement it is equal to Capital 'H'");
}

let Example2 = "Harshit"
let Example2age = 17;

if (Example1[0] === "H" && Exampleage>18) {
    console.log("Name Start With H And Age Is Above 18")
}
else{
    console.log("The condition IS False Because age is 17 in the given variable and and in statement it is greater than '18'");
}

// || OR Operator
var Description2 = "These are For the || Operartor"
console.log(Description2);
var DefinitionOfOr = "The || Operator can be defined as when the each condition of the two given value is true"
console.log(DefinitionOfOr);

let SecondName = "Harshit"
let Secondage = 22;
if(SecondName[0] === "a" || Secondage>70){
    console.log("Name Start With H and Age is Above 20");
}
else{
    console.log("It IS Inside else because the both conditions is not true")
}


let ExampleOR1 = "Harshit"
let ExampleORage = 22;

if (ExampleOR1[0] === "H" || ExampleORage>30) {
    console.log("The Conditions Is true Because the one statement is true")
}
else{
    console.log("The condition IS False Because the both conditions is not true");
}

let ExampleOR2 = "Harshit"
let ExampleORage2 = 17;

if (ExampleOR2[0] === "h" || ExampleORage2>18) {
    console.log("Name Start With H And Age Is Above 18")
}
else{
    console.log("The condition IS False Because age is 17 in the given variable and name start with Capital H");
}