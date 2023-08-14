// onblur

const input = document.querySelector("input");
input.addEventListener("blur",function(e){
    // console.log("blur is occured");
    // input.style.backgroundColor = "gray";
    // input.style.padding = "0.5rem";
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
});

// OnFocus
input.addEventListener("focus",function(){
    // console.log("focus is occured");
    // input.style.backgroundColor = "yellow";
    // input.style.padding = "2rem";
});

// OnFocusin
// input.addEventListener("focusin",function(){
//     console.log("focusin is occured");
// });

// OnFocusout
// input.addEventListener("focusout",function(){
//     console.log("focusout is occured");
// });
