// Proto, Prototype, Class
// const user = {
//     firstName: "harshit",
//     lastName: "vashista",
//     email: "harshitvashista@gmail.com",
//     age:2,
//     address:"House Number, Colony, pincode, state",
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18: function() {
//         return this.age >= 18;
//     } 
// }
// const aboutUser = user.about()
// console.log(aboutUser)
//function (create Object)
//2.) add key value pair
//3.) object ko return krega

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years old`
    }
    user.is18 = function() {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser('harshit', 'vashist', 'harshitvashista@gmail.com','2','House Number, Colony, pincode, state');
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(is18);
console.log(about);

// for better clearifcation see weekness in code file

// Store method in different Objects