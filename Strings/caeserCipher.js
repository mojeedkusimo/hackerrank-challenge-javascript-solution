function caesarCipher(s, k) {
    // Write your code here
    let alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let strArr = [];
    let newStr ='';

    for (let i=0; i<s.length; i++) {
        strArr.push(s[i].toLowerCase());
    }

    strArr.forEach((el,ind) => {
        if (alphabets.includes(el)) {
            let alphNewPos = (alphabets.indexOf(el)) + k;

            if (alphNewPos >= 26) {
                let adjust = alphNewPos - (Math.floor(alphNewPos/26) * 26);

                if (s[ind] === el.toUpperCase()) {
                    newStr += alphabets[adjust].toUpperCase();
                }
                else {
                    newStr += alphabets[adjust];
                }
            }
            else {
                if (s[ind] === el.toUpperCase()) {
                    newStr += alphabets[alphNewPos].toUpperCase();
                }
                else {
                    newStr += alphabets[alphNewPos];
                }
            }
        }
        else {
            newStr += el;
        }
    });

    return newStr;
}