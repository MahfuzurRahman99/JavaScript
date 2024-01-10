const dd = [["Sakib", 89], ["Mashrafi", 43], ["Tamim", 101], ["Taskin", 16]];
function highestRunScorer(playersInfo) {
    for(x = 0; x < playersInfo.length; x++) {
        highName = playersInfo[0];
        highScore = playersInfo[0][1];
        if(highScore < playersInfo[x][1]) {
            highScore = playersInfo[x][1];
            highName = playersInfo[x];
            finalScore = highName;
        }
    }
    return finalScore;
}

console.log(highestRunScorer(dd));