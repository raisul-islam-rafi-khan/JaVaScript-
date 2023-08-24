//for vs forEach

//for
// var numbers =  [10,20,409.,50]

// for(var x=0;x<numbers.length;x++){
//     console.log(numbers[x])
// }


//forEach
var numbers =  [10,20,409.,50];

numbers.forEach(myFunction)

function myFunction(x){
    console.log(x)
}

//samething with anonymous function
var numbers =  [100,200,409.,500];

numbers.forEach(function(x){  // anonymous function
    console.log(x)
})

//sqaurefunction with forEach
var numbers = [11,22,33,44];
var squareNumbers = [];
numbers.forEach(function(x){  
    squareNumbers.push(x*x);
    
})
console.log(squareNumbers);


//+5
var numbers = [11,22,33,44];
console.log(numbers);
var squareNumbers = [];
numbers.forEach(function(x,index,arr){  
    arr[index] = x+5;
    
})
console.log(numbers);
