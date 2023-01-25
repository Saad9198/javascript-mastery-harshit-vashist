// swith Statement
// 0 sunday
// 1 Monday
// 2 Tuesday
// 3 Wednesday
// 4 Thursday
// 5 Friday
// 6 Saturday
// 7 Invalid

let day = 7;

if(day === 0) {
    console.log("Sunday");
}
else if(day === 1) {
    console.log("Monday");
}
else if(day === 2) {
    console.log("Tuesday");
}
else if (day === 3) {
    console.log("Wednesday");
}
else if (day === 4) {
    console.log("Thursday");
}
else if(day === 5){
    console.log("Friday");
}
else if(day === 6) {
    console.log("Saturday");
}
else{
    console.log("Invalid Day");
}


var definitionOfSwitch = "The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's 'Conditional' Statements, which are used to perform different actions based on different conditions. Use switch to select one of many blocks of code to be executed.";
console.log(definitionOfSwitch);

let day2 = 2;
var description = "If we use switch case without taking a break Point it will execute all cases from where it finds the condition is true after this it will execute all the conditions till the conditions is stop form switching this is a difference between if(condition) and switch case";
console.log(description);
let BreakDescription = "we do not use the break Case in below example";
console.log(BreakDescription);
switch(day2){
    case 0:
        console.log("sunday");hursday
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    default:
        console.log("Inavlid Day");
}
var Break ="If we want to execute that only one condition should be true according to the given value so we should use break This is called Break";
console.log(Break);
var BreakDescription2 = "break cannot use in variable declaration we use the break Case in below example"
console.log(BreakDescription2);

let day3 = -100;
switch(day3) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
}