// spread operator
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// // const NewArray = [...array1, ...array2];
// const NewArray = [..."abc"]
// console.log(NewArray);

// spread operator in object

const obj1 = {
    key1: "value1",
    key2: "value2",
    key1: "value59" // value overwrite 
}
const obj2 = {
    key3: "value3",
    key4: "value4",
}
const newObject = {...obj2}
console.log(newObject);