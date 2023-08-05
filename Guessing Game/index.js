//Guessing Game
//Guessing a number from1 to 5
//Generate a random number between 1 to 5
//If the guess number mathes random number; then show message won else lost
//Run the game for 5 times
//show the number of wons and losts

var numofWon =0;
var numofLost =0;


for(var i=1; i<=5; i++){
    var guessNumber= parseInt(prompt("Enter the Number from 1 to 5: "));

    var randomNumber=Math.floor(Math.random()*5)+1;

    if (guessNumber==randomNumber){
        console.log("You have Won");
        numofWon++;
    }
    else{
        console.log("You have lost. Random number was"+randomNumber);
        numofLost++;
}
}

document.write("Total Number of Won="+ numofWon+"<br>");
document.write("Total Number of lost="+ numofLost+"<br>");