// function expression
// Ek variable ko function me assign kr dete hain isko kahte hain function expression

// Example :1

// function singHappyBirthday() {
//     console.log("Happy Birthday To You");
// } // This Is for the example to better understand

const singHappyBirthday = function () {
    console.log("Happy Birthday To You");
}
// we use here const but we can also make it in "let" and "var" but mostly we used const for it  
singHappyBirthday();// Function Expression

const SumThreeNumber = function(number1, number2,number3) {
    return number1 + number2 + number3
}
const ans = SumThreeNumber(3,4,5);
console.log(ans); // Function Expression


const isEven = function(number) {
    return number % 2 === 0;
}
const EvenAnswer = isEven(3);
console.log(EvenAnswer)  // Function Expression


const firstcharacter = function(anyString) {
    return anyString[0];
}
const ansfirstcharacter = firstcharacter("zbc");
console.log(ansfirstcharacter)
