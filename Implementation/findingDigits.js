function findDigits(n) {

    /*

    This is quite a simple mathematical problem of computing/checking if the individual digits of a number are divisible by the number, then get the count.

    We may just have to convert the number to a string so we can access the digits of the number and perform our check.

    */

    const numStr = `${n}`;
    let divisorCounter = 0;

    for ( let i = 0; i < numStr.length; i++ ) {
        if ( n % Number(numStr[i]) === 0 ) {
            divisorCounter++;
        }
    }

    console.log(divisorCounter);
    return divisorCounter;
}

findDigits(124); // 3
findDigits(12); // 2
findDigits(1012); // 3