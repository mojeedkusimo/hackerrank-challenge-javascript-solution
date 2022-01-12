function sockMerchant(n, ar) {
    // Write your code here
    
let sortedArray = ar.sort((a,b) => a - b);
let count = 0;
let isCounted = false

sortedArray.forEach((num, i, arr) => {
    
    if (isCounted) {
        isCounted = false;
        return;
    }

    if (arr[i] == arr[i + 1]) {
        count+=1;
        isCounted = true;
    } else {
        isCounted = false;
    }
});

return count;

}
