// Sets (it is iterable)
// Store Data
// sets also have its own methods
// No index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)



// simple array const numbers = [1,2,3]

// Sets 
const items = ['item1','item2','item3']
const numbers = new Set(); //(no duplicates allowed)
// numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)
numbers.add(5)
numbers.add(6)
numbers.add(items)
numbers.add(['item1','item2','item3'])
if (numbers.has(1)){
    console.log("1 is present")
}
else{
    console.log("1 IS NOT PRESENT")
}
for (let number of numbers) {
    console.log(number)
}


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray)
console.log(uniqueElements);
console.log(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length)