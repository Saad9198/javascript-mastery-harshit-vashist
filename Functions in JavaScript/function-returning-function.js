// function returning function

function myFunc() {
    return "a";
}
// var ans = myFunc();
// console.log(ans)
function myFunc2() {
    function hello() {
        // console.log("hellow wolrd");
        return "hello world";
    }
    return hello
}
var ans = myFunc2();
console.log(ans())
