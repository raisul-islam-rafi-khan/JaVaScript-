//1-5 sum
/*var sum=0;

for(var x=1; x<=5; x=x+1){
    sum=sum+x; //sum=sum+1 So, Sum=0+1=1;Sum=1+2=3;Sum=3+3=6;Sum=6+4=10; Sum=10+5= (15) so 15 is the Answer;
}
document.write(sum);


//When We taken input from User

var m=parseInt(prompt("Enter the Staring Number: "));
var n=parseInt(prompt("Enter the Last Number: "));

var sum=0;
for(var x=m; x<=n; x=x+1){
    sum=sum+x;
}
document.write(sum);*/

//Running a Programme multiple times using for loop

for(var x=1; x<=5; x++) {

    var num1=parseInt(prompt("Enter First Number:"));
    var num2=parseInt(prompt("Enter Second Number:"));
    var sum=num1+num2;

    console.log("Result= "+ sum);
}



