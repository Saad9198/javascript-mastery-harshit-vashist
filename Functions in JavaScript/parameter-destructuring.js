// param destructuring

//object
// react

const person ={
    firstName: "Harshit",
    gender:"male",
    age:"500"
}
// function PrintDetails(obj) {
//     console.log(person.firstName)
//     console.log(person.gender);
//     console.log(person.age);
// }
function PrintDetails({firstName, gender,age}){
    console.log(firstName)
    console.log(gender)
    console.log(Number(age))
}
PrintDetails(person);
