//while loop use 1-100 number

var i=1;
while(i<=100){
    document.write(" "+i);
    i=i+1
}
document.write("<h1>End</h1>");

//1-10 Sum with while loop
var sum=0;
var i=1;
while(i<=10){
    sum=sum+i;
    i=i+1
}
document.write(sum);
document.write("<h1>End</h1>");

//Write A Progamme that sum of all the numbers that are divisible by 3 and 5 from 1-100 or anything like that

var i=1;
var sum=0;
while(i<=100){
    if(i%3 == 0 && i%5 == 0){
        document.write(" "+i);
        sum=sum+i;
    }
    i=i+1;
}
document.write(" Sum= "+sum);
document.write("<h1>End</h1>");

