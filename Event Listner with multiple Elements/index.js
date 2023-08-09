var len = document.querySelectorAll(".myButton").length; // if we can't use this the we can also print the same output with just one change that is in the below:
//for(var i=0; i<3; i++) // length directly type: that is 3


for(var i=0; i<len; i++){
document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

    var text = this.innerHTML;
    document.querySelector("h1").innerHTML= text +" is clicked ";
})}