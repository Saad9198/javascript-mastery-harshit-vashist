// arrow functions
// arrow functions are important
// const singHappyBirthday = function () {
//     console.log("Happy Birthday To You");
// }
console.log(`we only remove the name of function in it and put it an a arrow the simple is that this is called arrow function`)
console.log(`we can more optimized(short) our code by removing the parameter's bracket but we can only do it `)
console.log(`when the function's parameter have only one value if function parameter's have two values we can not remove the brackets from it `)

const singHappyBirthday = () => {
    console.log("Happy Birthday To You");
}
singHappyBirthday()


const SumThreeNumber = (number1, number2, number3) => {
    return number1 + number2 + number3
}
const ans = SumThreeNumber(3,4,8)
// console.log(ans)

// remove return

const isEven = number =>  number % 2 === 0;

const AnsOfIsEven = isEven(10);

console.log(AnsOfIsEven); 

const firstcharacter = anyString=> anyString[0];

const AnswerOfFirstCharacter = firstcharacter("saad");

console.log(AnswerOfFirstCharacter);


const findTarget = (array, target) => {
    for(let i =0; i< array.length; i++) {
        if(array[i]===target) {
            return i;
        }
    }
    return -1
}
const myArray = [1,3,0,9,-10,99]
const Answer_Of_Find_Target = findTarget(myArray, -10);
console.log(Answer_Of_Find_Target);