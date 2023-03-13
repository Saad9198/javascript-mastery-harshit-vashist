// methods

// function inside object
function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`) //person name is undefined and person age is undefined
}

const person1 = {
    firstName:"harsh",
    age:128,
    about: personInfo
}
const person2 = {
    firstName:"mohit",
    age:18,
    about: personInfo
}
const person3 = {
    firstName:"nitish",
    age:12,
    about: personInfo
}

person1.about()


const venom = "Eyes, Lungs, Pancreas, too much Snacks At so Little Time"

