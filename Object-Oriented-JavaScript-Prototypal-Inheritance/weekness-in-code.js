// weekness in code
// Store method in different Objects

const UserMethod = {
    about : function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function() {
        return this.age >= 18;
    }
} // global Function Just call(reference) it wherever
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = UserMethod.about;  // Reference
    user.is18 = UserMethod.is18; // Reference
    return user;
    // remove methods or functions from here
    
}

const user1 = createUser('harshit', 'vashist', 'harshitvashista@gmail.com','22','Vashist Address');
const user2 = createUser('Saad', 'ahmed', 'saadahmed@gmail.com','21','Addrees Saad Ahmed');
const user3 = createUser('Amin', 'Hussaini', 'AminHussaini@gmail.com','24','Addrees Amin Hussain');

console.log(user1.about());
console.log(user3.about());


// for better clearifcation see solution using Object.create in code file

// Using Object.create in that file for optimized Code