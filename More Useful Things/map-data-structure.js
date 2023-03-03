// Maps 
// map is an iterable

// store data in ordered fashion

// store key value pair (like Object)
// duplicate keys are not allowed like Objects

// different between maps and objects
// object can have only string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

//object litertal
// key -> string
// key -> symbol

// const person = {
//     firstName: "harshit",
//     age: 7,
//     1:"one"
// }
// console.log(person.firstName)
// console.log(person["age"])
// console.log(person[1])
// for (let key in person){
//     console.log(key)
// }


// store key value pair
const person = new Map()
person.set('firstName','Harshit') // any type key
person.set('age','7')
person.set([1,2,3],'onetwothree')
person.set({1:'one'},'onetwothree')

console.log(person)
console.log(person.get(1));

for (let key of person.keys()){
    console.log(key, typeof key)
}