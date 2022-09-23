function alternate(s) {
    // Write your code here
    let charCount = {};
    for (let i=0; i<s.length; i++) {
        if (charCount[s[i]] === undefined) {
            charCount[s[i]] = 1;
        } else {
            charCount[s[i]] += 1;
        }
    }
    let sortedCharCount = Object.fromEntries(
        Object.entries(charCount).sort((a,b) => {
           return b[1] - a[1];
        })
    );

    console.log(Object.entries(sortedCharCount));
}

alternate('beabeefeab');
//beabefeab ----remove consecutives
//beaf ----- unique characters
//bea --- only loop this