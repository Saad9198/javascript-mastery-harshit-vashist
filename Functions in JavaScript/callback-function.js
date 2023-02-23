// call back function 
function myFunc2 (name) {
    console.log("Inside mY function2")
    console.log(`Your name is ${name}`);
}

function myfunc(callback) {
    console.log("Hellow wolrd");
    callback("Saad");
}

myfunc(myFunc2);
