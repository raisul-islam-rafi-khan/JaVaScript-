//Object Literals

function studentInfo1(name,age){
    return{
        name,
        age

    }

}
console.log(studentInfo1("Rafi Khan",24));



// let message={
//     body: function(){
//         return `Hi, Rafi Khan`
//     }
// }
// console.log(message.body())


//concise Method
// in the below same thing we are doing without : and function
let message={
    body(){
        return `Hi, Rafi Khan`
    }
}
console.log(message.body())


// without space we use function name 
let message1={
    'body name'(){
        return `Hi, Raisul Islam Rafi Khan`
    }
}
console.log(message1['body name']())

