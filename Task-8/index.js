//one Dimensonal Array
//Create a function called highestScore that
//receive a !D Array called scores
//return the highest score

function highestScore(scores){
    var max =scores[0];
    for(var x=1; x<scores.length;x++){
        if(max < scores[x]){
            max = scores[x];
        }
    }
    return max;
}

var scores = [19,1,15,25,78];
var maxScore=highestScore(scores);
console.log(maxScore);