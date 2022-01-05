function camelcase(s) {
    // Write your code here

    let wordCount = 1;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            wordCount++;
        }
    }
    
    return wordCount;
}