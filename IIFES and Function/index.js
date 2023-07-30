//IIFEs 

(function display(num1,num2){
    var result=num1+num2;
    document.write("Result=" +result);

})(5,60);
document.write(" <br>");

//Function Expressions is that--- function will contain into variable
var display2= function displayMeassage(){
    document.write("Hi, My Name Is Rafi");
}
display2();
document.write(" <br>");

//or
var display2= function displayMeassage(message){
    document.write(message);
}
display2("Hi,My Name Is Khan");
document.write(" <br>");
