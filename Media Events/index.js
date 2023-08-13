//canplay event
const video = document.querySelector("video");
video.addEventListener("canplay",function(){
    console.log("canplay");
});

//play event
video.addEventListener("play",function(){
    console.log("play");
});

//pause event
video.addEventListener("pause",function(){
    console.log("pause");
});

//playing event
video.addEventListener("playing",function(){
    console.log("playing");
});

//End Event
video.addEventListener("ended",function(){
    console.log("Thanks for Watching");
});

//Volume change event
video.addEventListener("volumechange",function(){
    console.log("volumechange");
});