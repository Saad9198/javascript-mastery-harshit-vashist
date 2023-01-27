// while loop Example
let num = 10;
let total = 0;
let i = 0;

while(i<= 10){
    total = total + i;
    i++;
//  0     = 0     + 1  = 1
//  1     = 1     + 2  = 3
//  3     = 3     + 3  = 6
//  6     = 6     + 4  = 10
//  10    = 10    + 5  = 15
//  15    = 15    + 6  = 21
//  21    = 21    + 7  = 28
//  28    = 28    + 8  = 36
//  36    = 36    + 9  = 45
//  45    = 45    + 10 = 55   
}
console.log(i); //11
console.log(i); //11
console.log(total) // 55


// total = total + 1; // 0 + 1 = 1
// total = total + 2; // 1 + 2 = 3
// total = total + 3; // 3 + 3 = 6
// total = total + 4; // 6 + 4 = 10
// total = total + 5; // 10 + 5 = 15
// total = total + 6; // 15 + 6 = 21
// total = total + 7; // 21 + 7 = 28
// total = total + 8; // 28 + 8 = 36
// total = total + 9; // 36 + 9 = 45
// total = total + 10; // 45 + 10 = 55

// console.log(total); // 55

let num2 = 10000;
let total2 = (num2*(num2+1)/2);
console.log(total2);

// this is the fast way not a loop one
