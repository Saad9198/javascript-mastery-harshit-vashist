// For In Loop In Array

const fruits =["apple","mango","grapes","fruit4","fruit5"];
const fruits2 =[];

for (let index in fruits){
    // console.log(fruits[index]);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);