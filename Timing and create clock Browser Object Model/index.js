// Timing Events --- SetTimeOut(), setInterval()

// setTimeout(() => {
//     console.log("Hello");
// },2000);

// setTimeout(display,2000);

// function display(){
//     console.log("display function");
// }

const Button = document.querySelector(".save-button");
const message = document.querySelector(".message");

// Button.addEventListener("click",saveUser);

// function saveUser(){
//     message.textContent = "user registration Succesful";

//     setTimeout(()=>{
//         message.textContent = "";
//     },2000);
// }

// setInterval
// Button.addEventListener("click", displaycount);
// function displaycount(){
//     let count=1;
//     message.textContent = count;

//     setInterval(() => {
//         count++;
//         message.textContent = count;
//     },1000);
// }

Button.addEventListener("click",startClock);

function startClock(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

    let time = hours + ":" + minutes + ":" +seconds;

    // console.log(time);

    message.textContent = time;

    setInterval(startClock, 1000);
}

function formatTime(value){
    if(value<10){
        value = "0"+value;
    }
    return value;
}
