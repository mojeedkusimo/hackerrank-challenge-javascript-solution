function birthday(s, d, m) {
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        let sum = 0;
        for (let j = i; (j < (i + m)) && (j < s.length); j++) {
 
            sum += s[j];
        }

        if (sum === d) {
            counter++;
        }
    }
    return counter++;

}