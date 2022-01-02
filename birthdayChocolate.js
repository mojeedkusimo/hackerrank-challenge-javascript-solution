birthday = (s, d, m) => {
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


// console.log(birthday([3,1,3,2,1,2,4,2,3,2,2,2], 9, 4));