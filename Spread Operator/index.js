function addNumbers(x,y,z){
    return x+y+z;
}

let numbers = [1,2,3]
// console.log(addNumbers(...numbers));

// let numbers1 = [5,6,...numbers]
let numbers1 = [5,...numbers,6]
console.log(numbers1);

//we use also use spread in concat
let num1=[5,6,7]
let num2=[1,2,4]
// let num=num1.concat(num2);
let num=[...num1,...num2]
console.log(num);


let p1={
    name:"Rafi Khan",
    age:24

}

let p2={
    nationality:"Bangladesh",
    occupation:"student"

}

let p={...p1,...p2}
console.log(p);