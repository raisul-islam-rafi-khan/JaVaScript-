//Array destructuring

let numbers =[10,20,30,50,70,80];
let [num1,num2,...z] = numbers

console.log(z);

//swap variables
let a=10, b=20;
[a,b]=[b,a]
console.log(a);
console.log(b);

//object desturcture
const studentInfo ={
    id:191,
    fullname: "Raisul Islam Rafi",
    gpa:3.92
}
const{id,fullname}=studentInfo

console.log(id)
console.log(fullname)
console.log(studentInfo.gpa)

//nested Object destructure
const studentInfo1 ={
    id:192,
    fullname1: "Raisul",
    gpa:3.35,
    languages:{
        native:"bangla",
        beginner:"english"
    }
}
const{fullname1,languages}=studentInfo1

console.log(fullname1)
console.log(languages)
console.log(languages.native)

//desturcting function Parameter
const studentInfo2 = ({dep,lastname})=> {
    console.log(`${dep},${lastname}`)
}
const student ={
    dep:"cse",
    lastname: "Khan"
}
studentInfo2(student)




