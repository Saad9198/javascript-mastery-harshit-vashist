// No we solve a problem of file

// weekness in code

// with the help of Obj.create file


const UserMethod = {
    about : function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function() {
        return this.age >= 18;
    },
    sing:function() {
        return 'tooon na na na la la'
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(UserMethod);  // Set __proto__ UserMethod
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('harshit', 'vashist', 'harshitvashista@gmail.com','22','Vashist Address');
const user2 = createUser('Saad', 'ahmed', 'saadahmed@gmail.com','21','Addrees Saad Ahmed');
const user3 = createUser('Amin', 'Hussaini', 'AminHussaini@gmail.com','24','Addrees Amin Hussain');
console.log(user1)
console.log(user1.about());
// console.log(user3.about());