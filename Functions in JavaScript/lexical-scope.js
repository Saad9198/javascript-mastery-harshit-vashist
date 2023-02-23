// Lexical Scope
console.log(myVar);
var myVar = "value2"
{
    console.log(myVar);
    var myVar = "value2"
    console.log(myVar);
    // console.log(myVar);
    function myApp() {
        console.log(myVar);
        const myVar = "value1"
        function myFunction(){
            console.log("isnide hbsh")
            // var myVar = "Value59"
            console.log("inside myFunc", myVar);
        }
        
        const myFunc2 = function(){}
        
        const myFunc3 = () =>{}
        
        console.log(myVar);
        myFunction()
    }
    myApp();
}
console.log(myVar);