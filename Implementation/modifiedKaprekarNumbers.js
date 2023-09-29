function kaprekarNumbers(p, q) {

    /*

    One needs to be cautious of these 80-90% success rate. Anyways, we move...

    Basically, we are just checking for a modified Kaprekar number in each range provided.

    It is safe to assume that any number square yields an odd-numbered digits would not be a modified Kaprekar.

    Unfortunately, the assumption does not hold.

    The logic of splitting the number into two equal halves is therefore invalid.

    A more generic approach would be to pick each digit of a number at a time and sum it up with the remaining digits to see if satisfy the modified kaprekar condition.

    Another point to consider is the slight differnce with the original Kaprekar Number definition in which The right hand part must be numbered digits long.

    */
   
   let kaprekarArray = [];
   let invalidNums = [];

    const convertArrayToNum = (array) => {

        if (array.length) {

            let arrayStr = '';
            
            for ( let i = 0; i < array.length; i++ ) {
                arrayStr+= array[i];
            }

            return Number(arrayStr);
        }
        return 0;
    }

    if ( p <= 1 ) {

        kaprekarArray.push(1);
    }

    for (let i = p; i < q + 1; i++) {

        const strNumInteger = `${i}`;
        const strNum = `${i * i}`;
        let strNumArray = strNum.split('');


        for (let j = 0; j < strNum.length; j++) {

            let leftDigArray = strNumArray.slice(0,j+1)
            let leftDig = convertArrayToNum(leftDigArray);
            let rightDigArray = strNumArray.slice(j+1,);
            let rightDig = convertArrayToNum(rightDigArray);

            if ( j === 0 &&  rightDigArray.length > 1 && rightDig === 0 ) {
                invalidNums.push(i);
            }

            if (Number(leftDig) + Number(rightDig) === i && !invalidNums.includes(i) && rightDigArray.length === strNumInteger.length ) {
                kaprekarArray.push(i);
            }
        }

    }

    if (kaprekarArray.length) {

        console.log(...kaprekarArray);
        return;
    }


    console.log('INVALID RANGE');
    return;
}

// kaprekarNumbers(1, 100);
// kaprekarNumbers(100, 300);
kaprekarNumbers(1, 100000); //4879,5292,38962
// kaprekarNumbers(1, 99999); 