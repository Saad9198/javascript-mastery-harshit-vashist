// Don't Do This Mistake
const user1 = {
    firstName: "Saad",
    age:21,
    about: function() {
        console.log(this.firstName,this.age);
    }
}
// Don't Do This Mistake

// user1.about();
// const myFunc = user1.about;
// myFunc(); //undefined //undefined

const myFunc = user1.about.bind(user1);
myFunc();


