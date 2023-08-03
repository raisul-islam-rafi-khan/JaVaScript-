var names=["Rafi","Khan","Raisul"]
console.log(names);

/*
//Shift is actually opposite of pop
names.shift();
console.log(names);

//unshift is opposite of push
names.unshift("Raim");
console.log(names);*/

/*
//splice- that is add & remove element
//adding Splice

names.splice(2,1,"Mumu","Raim");
console.log(names);

//remove splice
names.splice(1,2);
console.log(names); 

//slice
var newArray=names.slice(1);
console.log(newArray); */

/*
//sort
var sortednames=names.sort();
console.log(sortednames);

//reverse
var sortednames=names.sort();
names.reverse();
console.log(sortednames);*/

//number sorting
var numbers=[19,12,2,56,78];
numbers.sort(function(a,b){
    return a-b;//b-a to reverse
});


