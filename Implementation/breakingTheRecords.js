function breakingRecords(scores) {
    let maxScore = 0,
        minScore = 0,
        treatedScore = [],
        solutionArray = [];

        treatedScore.push(scores[0]);

    for (let i = 1; i < scores.length; i++) {
        
        treatedScore.push(scores[i]);
        let getNumOccur = treatedScore.filter((a) => a === scores[i]).length;

        if ((scores[i] > scores[i-1]) && (scores[i] == Math.max.apply(null, treatedScore)) && (getNumOccur == 1) ) {
            maxScore += 1;
        }
        else if ((scores[i] < scores[i-1]) && (scores[i] == Math.min.apply(null, treatedScore)) && (getNumOccur == 1) ) {
            minScore += 1;
        }

    }

    solutionArray.push(maxScore);
    solutionArray.push(minScore);
    return (solutionArray);
}
