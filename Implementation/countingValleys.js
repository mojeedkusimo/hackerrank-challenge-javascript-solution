function countingValleys(steps, path) {

    /*

    This initially looks like a tough one when it is supposed to be easy, I must say, but lets see how it goes.

    Our program is expected to determine the number of valleys an hiker enters during his mountaineering knowing fully well that:

    i. A valley is a complete downward movement starting and ending at sea level.

    ii. A mountain is a complete upward movement starting and ending at sea level.


    The question is, how do we know an hiker has reached sea level again assuming he always starts from sea level? Eureka! The idea comes!. 

    Why dont we look at it like a number system, where:

    i. Sea level is zero
    ii. Upward movement is +1 unit.
    iii. Downward movement is -1unit.

    Working with a position variable and above assumptions, the program checks each step provided to see which one makes the position variable zero.

    If the position variable is zero, the next question is: what was the polarity of the number before that? If it is positive, it means an upward movement to sea level which signifies a valley and vice versa.

    */

    let position = 0;
    let valleyCount = 0;
    let mountainCount = 0;

    for ( let i = 0; i < path.length; i++ ) {

        if ( path[i] === 'U' ) {
            position += 1;
        } else {
            position -= 1;
        }

        if ( position === 0 ) {

            if ( path[i] === 'U' ) {
                valleyCount++;
            } else {
                mountainCount++;
            }
        }

    }

    console.log(valleyCount);
    return valleyCount;

}


countingValleys(8,'UDDDUDUU'); // 1
countingValleys(12,'DDUUDDUDUUUD'); // 2