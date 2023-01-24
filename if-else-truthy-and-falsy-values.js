// truthy and falsy Values

// falsy Values :-


// false
// ""
// null
// undefined
// 0

let firstName = "";

if (firstName) {
    console.log(firstName)
}
else{
    console.log("firstName is  Kinda Empty");
}

let SecondName;

if (SecondName) {
    console.log(SecondName)
}
else{
    console.log("SecondName don't Have Value");
}
let ThirdName = null;

if (ThirdName) {
    console.log(ThirdName)
}
else{
    console.log("ThirdName is  Kinda have null Value");
}

let FourthName = undefined;

if (FourthName) {
    console.log(FourthName)
}
else{
    console.log("FourthName is Undefined");
}

let FifthName = 0;

if (FifthName) {
    console.log(FifthName)
}
else{
    console.log("FifthName is have 0 Value");
}


var FalsyValues = "False, 0, Null, Undefined 'Empty Value'"

console.log(FalsyValues);

var FalsyDefinition = "These Are The Falsy Values";

console.log(FalsyDefinition);

// Truthy Values
// "abc"
// 1, -1