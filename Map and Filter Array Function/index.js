// forEach

var numbers=[1,2,3,4];
var squareNumbers = []

numbers.forEach(function(x){
    squareNumbers.push(x*x);
})

console.log(squareNumbers);


//map
var numbers=[1,6,3,4];
var squareNumbers = numbers.map(function(x){
    return x*x;
})
console.log(squareNumbers);


//filter
var numbers=[11,22,33,44,23,45,12,15,18,46];
var newNumbers = numbers.filter(function(x){
    return x>20;
})
console.log(newNumbers);

