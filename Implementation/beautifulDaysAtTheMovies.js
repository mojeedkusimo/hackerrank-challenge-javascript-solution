function beautifulDays(i, j, k) {

    /*

    Already getting nervous about the ServiceNow Hiring TechChallenge to take place on 23rd Sep 2023 but somehow deep down I believe I can do it with Allah's Aid.

    Anyways, back to work. So, how many beautiful days have YOU had at the movies, let's find out.

    Lily appears to be quite an interesting girl going by the way she uses games to interface with real world experience. We are expected to compute the number of beautiful days from a range of given days that satisfy the following conditions:

    1. The differnce between the number and its reverse is divisible by a divisor, k.

    Ordinarily, we should apply this condition in an iteration of the range of numbers provided, however, the question is: how do we calculate the reverse of each number?

    Any ideas?

    One approach that comes to mind is to handle/convert each number as/to a string and use a forLoop to recreate the number from the end.

    Once that is achieved, the rest of Lily's problem is just a mathematical expression.

    */

    const getReverse = (num) => {

        const strNum = `${num}`;
        let reverseNum = '';

        for ( let i = strNum.length - 1; i > -1; i-- ) {

            reverseNum += strNum[i];
        }

        return Number(reverseNum);
    }

    let beautifulDayCounter = 0;

    for ( let initial = i; initial < j + 1; initial++ ) {

        const absoluteDiff = Math.abs(initial - getReverse(initial));

        if ( absoluteDiff % k === 0 ) {
            beautifulDayCounter++;
        }

    }

    console.log(beautifulDayCounter);
    return beautifulDayCounter;
}

beautifulDays(20,23,6);

// for ( let initial = 20; initial > 23 + 1; initial++ ) {
// for ( let initial = 0; initial < 23; initial++ ) {

//     console.log('yes');
    // const absoluteDiff = Math.abs(initial - getReverse(initial));

    // if ( absoluteDiff % k === 0 ) {
    //     beautifulDayCounter++;
    // }

// }