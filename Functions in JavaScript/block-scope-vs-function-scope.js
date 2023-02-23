// Block Scope Vs Function Scope

// let and const are Block Scope 

// Var Is function Scope
{
    let firstName = "harshit";
    // console.log(firstName);
    const secondName = "saad"
    // console.log(secondName) 
    // block 1
}
//agr kisi block me let and const hai tow ham usi block scope me us let and const ko access kr sakte hain us block k bahar access nh kr sakte
{
    let firstName = "mohit"
    // console.log(firstName)
    const secondName = "saad"
    // console.log(secondName) 
  // block 2
}
// const firstName = "ahmed"
// console.log(firstName)
// console.log(firstName)

// console.log(firstName1)
{
    var firstName1 = "Saad Ahmed"
}

// console.log(firstName1)

let firstName = "Garima"
function myApp() {
    if(true){
        let firstName = "saad";
        console.log(firstName)
    }
    console.log(firstName);
}
myApp()
