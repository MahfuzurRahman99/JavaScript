function highestScores(scores) {
    for(i = 0; i < scores.length; i++){
        max = scores[0];
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;
}
console.log(highestScores([65, 56, 24, 84, 96]));