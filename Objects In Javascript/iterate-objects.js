//  How to Iterate Objects
const person = {
    name:"saad",
    age:20,
    "person hobbies":["coding","music","office"],
}
for (let key in person){
    // console.log(key)  
    // give the name of the keys 
    // name 
    // age 
    // person hobbies
    // console.log(person.key);
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
    // console.log(key," : ", person[key]);
}
console.log(Object.keys(person));

for(let key of Object.keys(person)){
    console.log(person[key])
}