function kaprekarNumbers(p, q) {

    /*
    
    One needs to be cautious of these 80-90% success rate. Anyways, we move...

    Basically, we are just checking for a modified Kaprekar number in each range provided.

    It is safe to assume that any number square yields an odd-numbered digits would not be a modified Kaprekar.

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

    for (let i = p; i < q + 1; i++) {

        const strNum = `${i * i}`;
        let strNumArray = strNum.split('');


        for (let j = 0; j < strNum.length; j++) {

            let leftDigArray = strNumArray.slice(0,j+1)
            let leftDig = convertArrayToNum(leftDigArray);
            let rightDigArray = strNumArray.slice(j+1,);
            let rightDig = convertArrayToNum(rightDigArray);

            if ( j === 0 &&  rightDigArray.length > 1 && rightDig === 0) {
                invalidNums.push(i);
            }

            if (Number(leftDig) + Number(rightDig) === i && !invalidNums.includes(i)) {
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

kaprekarNumbers(1, 100000);
// kaprekarNumbers(100, 300);