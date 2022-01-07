function miniMaxSum(n) {
    let firstSum = n[0] + n[1] + n[2] + n[3];
    let secondSum = n[0] + n[1] + n[2] + n[4];
    let thirdSum = n[0] + n[1] + n[4] + n[3];
    let fourthSum = n[0] + n[4] + n[2] + n[3];
    let fifthSum = n[4] + n[1] + n[2] + n[3];
    let maxNum = Math.max(firstSum, secondSum, thirdSum, fourthSum, fifthSum);
    let minNum = Math.min(firstSum, secondSum, thirdSum, fourthSum, fifthSum);
    console.log(minNum + " " + maxNum);
}