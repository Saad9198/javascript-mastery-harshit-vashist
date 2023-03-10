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
// const person = new Map()
// person.set('firstName','Harshit') // any type key
// person.set('age','7')
// person.set([1,2,3],'onetwothree')
// person.set({1:'one'},'onetwothree')
// console.log(typeof person)

// // console.log(person)
// // console.log(person.get(1));

// for (let key of person.keys()){
//     // console.log(key, typeof key)
// }


// let data = new Map();

// data.set(1,{
//     address: {
//         country: "India",
//         postal:123456,
//     },
// })
// data.set(2,{
//     address:{
//         country: "US",
//         postal:123456,
//     },
// })

// // console.log(data.get(1));
// // console.log(data.get(2));

// // console.log(data.delete(2))

// // data.clear()
// // console.log(data)

// for (const k of data.values()){
//     console.log(k)
// }

// for (const [k,v] of data){
//     console.log(k,v)
// }


// const person = new Map();
// person.set('firstName', 'Saad');
// person.set('gender', 'Male');
// person.set('age', 7);
// console.log(person)
// console.log(person.get('firstName'));
// console.log(person.keys('firstName'));

// for (let key of person.keys()){
//     console.log(key)
// }
// for (let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key,value)
// }

const person1 = {
    id:1,
    fistName:"harshit"
}
const person2 = {
    id:2,
    fistName:"saad"
}

const extraInfo = new Map();

extraInfo.set(person1, {age:8, gender:"male"});
extraInfo.set(person2, {age:9, gender:"female"});
// console.log(userInfo)
console.log(person1.id)
console.log(extraInfo.get(person1).gender )
console.log(extraInfo.get(person2).gender )


// const person = new Map([['firtsName', 'harshit'],['age',7]])
// console.log(person)