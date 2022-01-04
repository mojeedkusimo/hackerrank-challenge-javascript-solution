function compareTriplets(a, b) {
    let points = [];
    let aliceScore = 0;
    let bobScore = 0;

    for (let m = 0; m < a.length; m++) { 
        if (a[m] > b[m]) {
            aliceScore += 1;
        }
        else if (b[m] > a[m]) {
            bobScore += 1;
        }
        else { 
            aliceScore += 0;
            bobScore += 0;
        }
    }
    points.push(aliceScore);
    points.push(bobScore);
    return points;
}
