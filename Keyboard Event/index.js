// // keydown
const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown",function(e){
//     console.log("keydown");
    if(e.repeat){
        alert("do not repeat");
    }
});

// // keypress
// textarea.addEventListener("keypress",function(){
//     console.log("keypress");
// });

// keyup
//textarea.addEventListener("keyup",function(e){
    // console.log("keyup");
    //console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.code);
    // console.log(e.shiftKey);
//     if(e.shiftKey){
//         console.log("shift" +e.key);
//     }
// });