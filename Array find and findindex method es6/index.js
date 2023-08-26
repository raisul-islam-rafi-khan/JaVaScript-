//find(callback,value)
let numbers=[5,55,14,5,78];

const evenNumber =(value,index,array) =>{
    if(value%2===0)
    return value;
}
// let firstEvenNumers = numbers.find(x => x%2==0);
let firstEvenNubmers = numbers.find(evenNumber);
let firstEvenNubmersEven = numbers.findIndex(evenNumber);
console.log(firstEvenNubmers);
console.log(firstEvenNubmersEven);

//
const students=[
    {
    id:191,
    gpa:3.22
},
{
    id:192,
    gpa:3.55

},
{
    id:193,
    gpa:3.99

},
{
    id:194,
    gpa:4.55

},
{
    id:199,
    gpa:5

},
]
console.log(students.find(x=>x.gpa>4));

