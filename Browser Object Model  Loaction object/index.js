console.clear();
// console.log(window.location);

//href
// console.log(location.href);

// Protocol
// console.log(location.protocol);

// hostname
// console.log(location.hostname);

// port
// console.log(location.port);

//pathname
// console.log(location.pathname);

let locationDiv = document.querySelector(".location-div");
// console.log(locationDiv);

let p1=locationDiv.children[0];
// console.log(p1);
p1.textContent = location.href;

let p2=locationDiv.children[1];
// console.log(p1);
p2.textContent = location.hostname;

let p3=locationDiv.children[2];
// console.log(p1);
p3.textContent = location.protocol;

let p4=locationDiv.children[3];
// console.log(p1);
p4.textContent = location.port;

let p5=locationDiv.children[4];
// console.log(p1);
p5.textContent = location.pathname;

//
const Button = document.getElementById("visit-button");
Button.addEventListener("click",function(){
    location.assign("https://www.youtube.com");
});