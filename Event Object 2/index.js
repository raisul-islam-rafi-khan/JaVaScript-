//load,unload

window.addEventListener("load",function(){
    console.log("load");
})

window.addEventListener("unload",function(){
    console.log("unload");
})

//scroll
window.addEventListener("scroll",function(){
    console.log("scroll");
})

//resize
window.addEventListener("resize",function(){
    // console.log("resize");

    const width = window.outerWidth; //these three line we use cause resize shown with height & width 
    const height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);

})


//toggle
const details = document.querySelector("details");
details.addEventListener("toggle",function(){
    console.log("toggle");
    // console.log("e.target.open"); //id we use this line then function(e) should be there
})