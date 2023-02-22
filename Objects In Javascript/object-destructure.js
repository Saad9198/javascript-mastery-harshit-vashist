// object destructing

// const band ={
//     bandName: "led Zepplin",
//     famousSong: "stairway to heaven",
// }

// const bandName = band.bandName; // led zepplin
// // console.log(bandName);
// const famousSong = band.famousSong; // led zepplin
// console.log(bandName, famousSong);

//Short way
// Destructing
const band ={
    bandName: "led Zepplin",
    famousSong: "stairway to heaven",
    year:1978,
    AnotherFamousSong:"Kashmir"
}

//if we change the variable name or key name it Removes from the global execution 
// const {bandName:var1,famousSong:var2,year:var3,AnotherFamousSong:var4}= band
// console.log(var1);
// console.log(bandName); object-destructure.js:24 Uncaught ReferenceError: bandName is not defined
// at object-destructure.js:25:13
//console.log(var2);
// console.log(famousSong); object-destructure.js:26 Uncaught ReferenceError: famousSong is not defined
// at object-destructure.js:28:13
//console.log(var3);
// console.log(year); object-destructure.js:26 Uncaught ReferenceError: year is not defined
// at object-destructure.js:31:13
//console.log(var4);
// console.log(AnotherFamousSong); object-destructure.js:26 Uncaught ReferenceError: AnotherFamousSong is not defined
// at object-destructure.js:35:13


// if we want to store a year and AnotherFamousSong in other variable so how can you do it 
const {bandName,famousSong,...restProp}= band
console.log(bandName)
console.log(restProp)// Object Destructure

// const {bandName:var1,famousSong:var2}= band


// const {year:yearLite,AnotherFamousSong:AnotherFamousSongLite} =band
// console.log(yearLite)



