function birthdayCakeCandles(ar) {
    let counter = 0;
    let maxNum = Math.max(...ar);
    for (let i = 0; i < ar.length; i++ ) { 
        if (ar[i] == maxNum) { 
            counter += 1;
        }
    }
    return counter;
}