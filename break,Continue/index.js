for(var i=1; i<=100;i++){
    if(i==10){
        break; //10=10 but 10 isn't in the output cause when i=10 if this can't break then (+i) means 1 increase so,11 that's why 10 is n't on the output
    } 
    document.write(" "+i);
}
document.write(" end ");

//but 10 ouput shown possible when document.write is first then if,break:
for(var i=1; i<=100;i++){
    document.write(" "+i);
    if(i==10){
        break;
    } 
}document.write(" end <br/>");

//continue
for(var i=1; i<=100;i++){
    if(i==10){
    continue; //this time only 10 is not count otherwise all are in the output
    } 
    document.write(" "+i);
}

/*if(i%2=0){
    continue;  // odd number
}*/

/*if(i%2 !=0){
    continue;  // Even number
}*/

