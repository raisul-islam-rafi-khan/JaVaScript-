//Click
console.clear();
const div = document.querySelector("div");

div.addEventListener("click",function (e){ // e means event
    // console.log("click");
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    // console.log(e.target.textContent);
    // console.log(e.target.innertext);


 
});



//dblClick
// div.addEventListener("dblclick",function (){
//     console.log("dblclick is occured");
// });

// mousedown
// div.addEventListener("mousedown",function (){
//     console.log("mousedown is occured");
// });

// mouseup
// div.addEventListener("mouseup",function (){
//     console.log("mouseup is occured");
// });

//MouseEnter
// div.addEventListener("mouseenter",function (){
//     console.log("mouseenter is occured");
// });

//MouseUp
// div.addEventListener("mouseleave",function (){
//     console.log("mouseleave is occured");
// });

//MouseOver
// div.addEventListener("mouseover",function (){
//     console.log("mouseover is occured");
// });

//MouseMove
// div.addEventListener("mousemove",function (e){
//     // console.log("mousemove is occured");
//     // console.log("clientX = " + e.clientX +",clientY = " + e.clientY);
//     console.log("offsetX = " + e.offsetX +",offsetY = " + e.offsetY);

// });

const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

//Map is an Array function. that's why I convert nodelist into Array
Array.from(buttons).map((button)=>{
    button.addEventListener("click",function(e){
       // console.log("clicked");
        console.log(e.target.innerText);

    });
});