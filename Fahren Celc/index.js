
var fahren =parseFloat(prompt("Enter FahrenHeight: ")); 

var cels=(fahren-32)*(5/9); //Fahren to Celsius

/* change fahren to Celsius then 
var fahren=(cels*(9/5))+32;
*/ 

document.write("celsius="+ cels);
