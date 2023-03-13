// const user1 = {
//     firstName: "Harshit",
//     age:8,
//     about: function() {
//         console.log(this.firstName, this.age);
//     }
// }
const user1 = {
    firstName: "Harshit",
    age:8,
    about() {
        console.log(this.firstName, this.age);
    }
}

user1.about();