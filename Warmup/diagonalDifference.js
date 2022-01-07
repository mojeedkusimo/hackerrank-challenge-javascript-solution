function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let m = 0; m < arr.length; m++) { 
        for (let k = 0; k < arr[m].length; k++) { 
            if (m == k) { 
                leftDiagonal += arr[m][k];
            }
            if (m + k == (arr.length)-1) { 
                rightDiagonal += arr[m][k];
            }
        }
    }
    return Math.abs(leftDiagonal - rightDiagonal);

}