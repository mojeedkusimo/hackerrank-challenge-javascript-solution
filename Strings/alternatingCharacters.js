function alternatingCharacters(s) {
    // Write your code here

    let deleteCount=0;
    let arr =[];
    for (let i=0; i<s.length; i++) {
        arr.push(s[i]);
    }
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === arr[i+1]) {
            deleteCount++;
        }
    }
    
    return deleteCount;
}
