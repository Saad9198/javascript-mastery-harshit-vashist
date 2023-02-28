// splice method 
// start, delete , insert


const myArray = ['item1', 'item2','item3'];
// delete
// const deletedItem = myArray.splice(1,2);
// console.log("deleted item", deletedItem)
// insert
// myArray.splice(1, 0, 'inseted item')

// insert and delete both

const deletedItem = myArray.splice(1, 2,"inserted item1","inserted item2")

console.log("deleted item",deletedItem);
console.log(myArray);