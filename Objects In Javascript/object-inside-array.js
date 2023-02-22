//object isnide array
// very useful in real world application


const users = [
    {userId:1,firstName:'harshit',gender:'male'},
    {userId:2,firstName:'mohit',gender:'male'},
    {userId:3,firstName:'nitish',gender:'male'},
]
for(let user of users) {
    console.log(user.userId)
    console.log(user.firstName)
    console.log(user.gender)
}