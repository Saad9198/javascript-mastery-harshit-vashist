//Function inside function

const app = () =>{
    console.log("inside app")
    const myFunction = () =>{
        console.log("I am function insdie app function")
    }
    myFunction();
    const addTwo = (num1, num2) =>{
        return num1 + num2
    }
    console.log(addTwo(5, 6));
    const Mul = (num1,num2)=>num1 * num2;
    
    console.log(Mul(5, 6));
}
app();