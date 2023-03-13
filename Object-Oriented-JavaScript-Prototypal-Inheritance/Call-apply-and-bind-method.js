// call

function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "Harshit",
    age:8,
    
}
const user2 = {
    firstName : "mohit",
    age:9,
}
about.call(user1, "guitar","Talha Anjum")
about.call(user2, "guitar","Talha Anjum")
// user1.about.call(user2, "guitar","Talha Anjum")


// apply
about.apply(user1, ["guitar", "bach"])

// bind

const func = about.bind(user2, "Rap","2Pac Shakur");
func();