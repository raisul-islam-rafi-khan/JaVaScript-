var photos=["images/rafi1.jpg", "images/rafi2.jpg" ,"images/rafi3.jpg"];
var imgTag= document.querySelector("img");

var count=0;

function next(){
    count++;

    if(count>=photos.length){
        count=0;
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count];
    }
    
}


//Previous

function prev(){
    count--;

    if(count<0){
        count=photos.length -1;
        imgTag.src=photos[count];
    }
    else{
        imgTag.src=photos[count];
    }
}
