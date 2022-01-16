function divisibleSumPairs(n, k, ar) {
    // Write your code here

let count = 0;

for (let m=0; m < ar.length; m++) {
    for (let i=0; i < ar.length; i++) {
        if ((ar[m] + ar[i]) % k == 0 && m < i) {
            count++;
        }
    }
}
    return count;
}
