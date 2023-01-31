//for of loop In array



const fruits =["apple","mango","grapes","fruit4","fruit5"];
const fruits2 =[];
for (let fruit of fruits){
    // console.log(fruit);
    // console.log(fruit.toUpperCase());
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2)