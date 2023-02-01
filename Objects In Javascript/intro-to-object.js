// object reference type
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs
// objects dont have index

// how to create objects


const person = {name:"harshit", age:22};
console.log(person); 
console.log(typeof person);
const person2 = {
    "name": "harshit",
    "age": 22,
    // we can also store arrays in values of key example below
    "hobbies": ["guitar","sleeping","listening to music"]
}
console.log(person2);

// how to access data from object
console.log("the name of person is",person2.name);
console.log("the age of person is ",person2.age);
person2.hobbies.unshift("Unshift");
person2.hobbies.push("push");
console.log("The hobbies of the person are",person2.hobbies)

// another way of access data from object
console.log("Here we add another method to access data from object by add sqaure brackets to the key ''name'' value")
console.log("and the name of the person is",person2["name"]);

// how to add key value pair to object
person2.gender = "male";
console.log("I am Adding another key value pair here whose key is gender and value is male");
console.log("The gender of the person is",person2.gender);