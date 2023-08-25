var student = [
    {
        id:192,
        name:"Raisul Islam Rafi",
        gpa:3.12
    },
    {
        id:193,
        name:"Islam Rafi",
        gpa:2.67
    },
    {
        id:195,
        name:"Rafi",
        gpa:3.33
    },

]
// function studentNames1(){
//     return student.filter(function(x){
//         return x.gpa > 3
//     }).map(function(y){
//         return y.name;
//     });
// }

const studentNames2 = ()=> student.filter((x)=>x.gpa>3).map((y)=>y.name);

console.log(studentNames2());