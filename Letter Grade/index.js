/* Lettter Grade
User Marks Input
A+(80-100)
A(70-79)
A-(60-69)
B(50-59)
C(40-49)
D(33-39)
Fail*/

var marks=prompt("Enter your Marks:");

if(marks>100||0)
document.write("Invalid Marks");

else if(marks>=80 && marks <=100)
document.write("A+");
else if(marks>=70 && marks <=79)
document.write("A");
else if(marks>=60 && marks <=69)
document.write("A-");
else if(marks>=50 && marks <=59)
document.write("B");
else if(marks>=40 && marks <=49)
document.write("C");
else if(marks>=33 && marks <=39)
document.write("D");
else
document.write("Fail");
