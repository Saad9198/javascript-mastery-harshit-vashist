// we need to write happy brithday song
// 1 way 
// console.log("happy Birthday To you ......");
// after sometime we nee to sing it again
// console.log("happy Birthday To you ......");

/// functions in javscript are like a servents who work for us

// Another way

function singHappyBirthday() {
    console.log("Happy Birtdhay ...");
}
singHappyBirthday();
// Example 1
// function TwoPlusFour() {
//     return 2+4
// }
// const returnedValue = TwoPlusFour();
// console.log(returnedValue);



// call, invoke , Run (Same thing)


// How to make Function Re Usable 

function Sum(parameter1,parameter2) { // this is called parameter 
    return parameter1 + parameter2;
}
const returnedValue = Sum(4,5) // this is called Argument;
console.log(returnedValue);
// console.log(undefined + undefined);


function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    // we can also write it like 
    // return false;
    else{
        return false;
    }
}
console.log(isEven(3))

function AnotherMethod(number){
    return number % 2 === 0
} 
console.log(AnotherMethod(4));
console.log(`For Better Understanding we can write it as 12 % 2 === 0`)
// ANother Method of doing it 

// function 
// input: String
// output: firstcharacter

function firstcharacter(anyString) {
    return anyString[0];
}
console.log(firstcharacter("zbc"));

// function 
// input : Array, target (number)
// ouput: index of target if target present in array

function findtarget(array, target) {
    for (let i = 0;i<array.length; i++) {
        if(array[i]===target) {
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findtarget(myArray, 8);
console.log(ans)


