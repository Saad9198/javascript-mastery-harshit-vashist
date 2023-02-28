// iterables
// jispe ham for of loop laga sakein
// string , array are iterable


const firstName = "Harshit";
for (let char of firstName) {
    console.log(char)
}

const items = ['item1','item2','item3']

for (let item of items) {
    console.log(item)
}
// const users = {
//     'key1':'value1',
//     'key2':'value2',
//     'key3':'value3',
// }

// for (let item of users){
//     console.log(item)
// }


// array like Object
// jinke pas length property hoti hai 
// aur jisko ham index se access kar sakte hain
// example :- string

const ArrayLikeObjectfirstName = "harshit";
console.log(ArrayLikeObjectfirstName.length);
console.log(ArrayLikeObjectfirstName[2])
