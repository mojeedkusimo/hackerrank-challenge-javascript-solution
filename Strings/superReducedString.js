let superReducedString = (s) => {

    let newArray = [];
    let objCount = {};
    let reducedString = '';

    for (let i=0; i < s.length; i++) {
        newArray.push(s[i]);
        if (objCount[s[i]] === undefined) {
            objCount[s[i]] = 0;
        } else {
            objCount[s[i]] += 1;
        }
    }

    for (let i=0; i < s.length; i++) {
        for (let charCount in objCount) {
            if (objCount[charCount] > 0) {
                newArray.forEach((el,ind,arr) => {
                    if (arr[ind] === arr[ind+1]) {
                        newArray.splice(ind,2);
                        objCount[charCount] - 1;
                    }
                });
            }
        }
    }

    newArray.forEach((e) => {
        reducedString += e;
    })
    
    if (reducedString === '') {
        return 'Empty string';
    } else {
        return reducedString;
    }
}
