//collection of variable is an Array

var names=new Array(5)
names[0]="Rafi";
names[1]="Rafi Khan";
names[2]="Mumu";
names[3]="Raisul";
names[4]="Islam";

document.write(names.length);
document.write(names);

document.write("<br>");

//directly
var names=["Rafi","Rafi Khan","Mumu","Raisul","Islam"]
names.push("Raisul Islam Rafi"); //push element add
names.push("Raisul Khan"); //push element add
document.write(names);
document.write("<br>");

names.pop();//pop that is remove the element 
document.write(names);
document.write("<br>");

var country1=["Bangladesh","India"]
var country2=["Uk","Canada"]
var country=country1.concat(country2); //concatination or add 
document.write(country);





