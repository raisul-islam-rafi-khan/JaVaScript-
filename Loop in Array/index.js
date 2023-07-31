var num=[10 ,15,25,36,78]
for(var i=0;i<5;i++){
    document.write(num[i]);
}
document.write("<br>");

//sum
var num=[10 ,15,25,36,78]
var sum=0;
for(var i=0;i<5;i++){
    document.write(num[i]);
    sum=sum+num[i];
}
document.write("Sum="+ sum);
document.write("<br>");

//user input
var num=new Array();
for(var i=0;i<5;i++){
    num[i]=parseInt(prompt("Enter Any Number:"));

}
var sum=0;
for(var i=0;i<5;i++){
    document.write(num[i]);
    sum=sum+num[i];
}
document.write("Sum="+ sum);

document.write("<br>");
