// find method

const myArray = ["Hello","catt","dogggy", "lion"];
// function isLength3(string){
//     return string.length === 3;
// }
const ans = myArray.find((string)=>string-length===3);
console.log(ans)


// const ans = isLength3("dog");
// console.log(ans);


const users = [
    {userId:1, UserName: "User1"},
    {userId:2, UserName: "User2"},
    {userId:3, UserName: "User3"},
    {userId:4, UserName: "User4"},
    {userId:5, UserName: "User5"},
]

const myUsers = users.find((user)=>user.userId===3)
console.log(myUsers);