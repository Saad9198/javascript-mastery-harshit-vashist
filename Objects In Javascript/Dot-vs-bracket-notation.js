// difference betweeen dot and bracket notation
// 1st difference
const person = {
    name: "harshit",
    age: 22,
    // As I Want Something like that 
    "Person hobbies": ["guitar","sleeping","listening to music"]
// Error (Person hobbies: ["guitar","sleeping","listening to music"] )
}
// we can't access it with the space because javascript do not allow spaces
// console.log(person.Person hobbies); 
//Uncaught SyntaxError: missing ) after argument list (at Dot-vs-bracket-notation.js:9:20)

// But If we access it with the Square bracket it will execute without
// any Hesitation
console.log(person["Person hobbies"]); 
// No Error


const key = "email";
const person2 = {
    name:"harshit",
    age:22,
    "Person hobbies": ["guitar","sleeping","listening to music"]
}
person2.key = "devsaadahmed@gmail.com";
person2[key] = "devsaadahmed@gmail.com";
console.log(person2);

