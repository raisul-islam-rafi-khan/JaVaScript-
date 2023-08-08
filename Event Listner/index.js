document.querySelector("button").addEventListener("click",myFunction);

function myFunction(){
    alert("Hi");
}

/*document.querySelector("button").addEventListener("click",function myFunction(){
    alert("Hi");
}); */ //Same thing this was just in oneline

//Mouseover,add style
var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover",function(){
    myVar.classList.add("head-style");
})

//Mouseout,remove style
myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("head-style");
})


