// basic

// __proto__

// Official EcmaScript Documentation

// [[prototype]]

// __proto__ , = [[prototype]] Ek Hi Bat hai 

//there is one more thing in Js which is 

// prototype

// prototype Is a completely different thing in javascript


const obj1 = {
    key1: "value1",
    key2: "value2"
} //__proto__ Value we set the obj2 __proto__ obj1 value


// const obj2 = {} 1 way 

// there is one more way to create empty object

// another way
const obj2 = Object.create(obj1) // {}
obj2.key3 = "value3";

// obj2.key2 ="unique" // Output 

// if key2 does not exist in the obj2 then the javascript will search it in the obj1 as we give in brackets of obj2 value

console.log(obj2)

// this is happening
console.log(obj2.__proto__);


// console.log(obj1.key1) 

// Output in Console

// value1 

// console.log(obj2.key3)

// Output in Console

// value3 

// console.log(obj2.key3)

// console.log(obj2.key1)

// Output in Console

// Undefined 

// Me kya chahta hun?

// Answer:

// Me yeh chahta hun agr javascript ko obj2 k pass key1 naa mile

// tow wo khud jaaye obj1 k pass or wahan dekhey agr obj1 k pass

// key1 hai or javascript ko wahan key1 mili tow wo usko print 

// krde