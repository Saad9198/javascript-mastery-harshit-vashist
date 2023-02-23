// default parameter

function addTwo(a,b) {
    return a+b
}
const ans = addTwo(4); // Nan
console.log(undefined + 4) // Nan
console.log(ans);


// I write the name of function add two old because we are talking about Before 2015 ES6 version
function addTwoOldEngine(a,b){
    if (typeof b === "undefined") {
        b = 1
    }
    return a + b;
}
const ansOldEngine = addTwoOldEngine(4);
console.log("The Second example is Here " + ansOldEngine)



function addTwoLatestEngine(a,b=1){
    return a + b;
}
const ansLatestEngine = addTwoLatestEngine(4);
console.log("The Third example is Here " + ansLatestEngine)