// arrow function
// "this" is not presnt in the arrow function
const user1 = {
    firstName: "SAAD",
    age:21,
    about :()=> {
        console.log(this)
        console.log(this.firstName, this.age);//undefined undefined
        // arrow function take "this" according to its surrounding
        // Mean the window is a this according to arrow function
        // 1 level up from the actual this value which is window
    }
}
user1.about.call(user1);