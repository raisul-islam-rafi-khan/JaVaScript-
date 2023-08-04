//2D Array
//Create a highestRunScorer that will 
//receive a 2nd array called playersinfo
//Based on highest score,return the name of the player 

function highestRunScorer(playersInfo){
    
    var highestScorer = playersInfo[0][0];
    var highestScorer = playersInfo[0][1];

    for(var x=1;x<playersInfo.length;x++){
        if(highestScorer < playersInfo[x][1]){
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return highestScorer;
}


var playersInfo=[
    ["Rafi Khan",95],
    ["Raisul Khan",68],
    ["Raisul Islam Rafi",189],
    ["Islam",105],
];

var name = highestRunScorer(playersInfo);
console.log(name);