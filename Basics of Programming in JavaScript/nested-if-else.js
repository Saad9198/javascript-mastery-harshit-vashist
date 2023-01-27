// Nested If Else

// winning number 19

// 19 your guess is right

// 17 too low
// 20 too high

let winningNumber = 19;
let UserGuess = +prompt("Guess a number");
// + for convert string into number because prompt always print a value in string
// so we have to make a number if its a number 

// console.log(typeof UserGuess,UserGuess);

if (UserGuess === winningNumber) {
    console.log("Your guess Is right");
}
else{
    if(UserGuess < winningNumber) {
        console.log("too low !!!")
    }
    else{
        console.log("too High !!!")
    }
}