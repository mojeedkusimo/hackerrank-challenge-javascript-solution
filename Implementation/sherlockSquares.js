function squares(a, b) {

    /*
    
    Sounds like SherlockHolmes movie. The challenge looks so straight forward, I am wondering why it has 86% success rate. Anyways, lets not get too excited and hope what has happened to me twice does not happen again.

    The simple logic is to get the square root of the range of numbers provided and only count the perfect squares.
    
    */

    let squareCounter = 0;

    for ( let i = a; i < b + 1; i++ ) {
        for ( let j = 1; j < i + 1; j++ ) {

            console.log(j, i, j*j);
            if ( j * j === i ) {
                squareCounter++;
            }
            
        }
        // let testSqr = Math.sqrt(i);
        // let testSqrStr = `${testSqr}`;
        // let testSqrStrArray = testSqrStr.split('');


        // if ( Number.isInteger(testSqr) ) {
        //     squareCounter++;
        // }      
    }

    console.log(squareCounter);
    return squareCounter;
}

squares(1,10);