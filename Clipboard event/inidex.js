// Oncopy
const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("copy",function(){
    p.innerHTML = "you have copied";
    // console.log("You copy");
});

// Oncut

input.addEventListener("cut",function(){
    p.innerHTML = "you have cut";
    console.log("You cut");
});

//onpaste
input.addEventListener("paste",function(){
    p.innerHTML = "you have paste";
    console.log("You paste");
});

