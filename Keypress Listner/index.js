for(var i= 0; i< 3; i++){
    document.querySelectorAll(".myButton ")[i].addEventListener("click",function(){
    var text=this.innerHTML;
    console.log(text);
    audioPlay(text);
    playAnimation(text);

})};

//keypress Listner

document.addEventListener("keypress",function(event){
    var text = event.key;
    audioPlay(text);
    playAnimation(text);
})


//audio play
function audioPlay(text){
    switch (text) {
        case "a":
            var audio = new Audio("sounds/a.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sounds/b.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("sounds/c.mp3");
            audio.play();
            break;
    }
}


//animation add and remove
function playAnimation(text) {
    var selectedButton = document.querySelector("." +text);
    selectedButton.classList.add("anim"); //add

    setTimeout(function(){  //set the time
    selectedButton.classList.remove("anim"); //remove
    },3000) // 3seconds
    
}


//keypress Listner in detaiils
var count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var text = event.key;

    document.querySelector("p").innerHTML ="you have pressed " + count;
})