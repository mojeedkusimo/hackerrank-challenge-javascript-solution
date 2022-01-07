function plusMinus(arr) {
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;

    for (let m = 0; m < arr.length; m++) { 
        if (arr[m] > 0) {
            positives += 1;
        }
        else if (arr[m] < 0) {
            negatives += 1;
        }
        else { 
            zeroes += 1;
        }
    }

    let fractPositive = Math.round((positives / arr.length)*1000000)/1000000;
    let fractNegative = Math.round((negatives / arr.length)*1000000)/1000000;
    let fractZeroes = Math.round((zeroes / arr.length) * 1000000) / 1000000;

    console.log(fractPositive + "\n" + fractNegative + "\n" + fractZeroes);

}
