// popup boxes--- alert, confirm, prompt

// alert("error here");

//confirm
// function deleteSomething(){
//     let value = confirm("yes,Iam Here");
//     if(value){
//         console.log("deleted")
//     } else{
//         console.log("not deleted");
//     }
// }
// deleteSomething();

// prompt
function welcomeMessage(){
    let h1=document.createElement("h1");
    let text;

    var name = prompt("Enter your Name:");
    if(name==null || name ==""){
        text="no name found"
    }else{
        text = name;
    }
var textNode = document.createTextNode(text);
h1.appendChild(textNode);
document.body.appendChild(h1);
}

welcomeMessage();


