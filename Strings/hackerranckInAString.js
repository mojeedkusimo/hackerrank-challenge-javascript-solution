function hackerrankInString(s) {
    // Write your code here
    let checker = ['h','a','c','k','e','r','r','a','n','c','k'];
    let newStrArr = [];

    for (let i=0; i<s.length; i++) {
        if (checker.includes(s[i]) && !newStrArr.includes(s[i])) {
            newStrArr.push(s[i]);
        }
    }

    console.log(newStrArr);
    console.log(checker);

    if (newStrArr === ['h','a']) {
        console.log('YES');
    }
    else {
        console.log('NO');
    }
}

hackerrankInString('haacckkerrannk')