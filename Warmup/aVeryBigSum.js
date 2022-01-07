function aVeryBigSum(ar) {
    let sum = 0;

    for (let m = 0; m < ar.length; m++) { 
        sum += ar[m];
    }
    return sum;
}