var number=Number(prompt("Enter A number:"));
var result=number>0?"positive":"Negative"
document.write(result);
document.write(" End ");

//when it's more than two like-positive,Negative or Zero Programme using ternary Operator

var number=Number(prompt("Enter A number:"));
var result=number>0? "positive":Number<0?"Negative":"Zero";
document.write(result);