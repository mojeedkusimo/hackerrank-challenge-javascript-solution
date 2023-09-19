function utopianTree(n) {

    /*

    First of all, the challenge is assuming the first cycle of growth in a year is a spring (i.e. it doubles in height) while the next is summer (its height increases by 1 meter).

    One can deuce from the mathematical interpretation of the challeng that the height doubles when it gets to an odd-numbered cycle and increases by 1 meter when it gets to an even-numbered cycle.

    Based on the above statements, we can have a container heightOfUtopian that stores the height of the Utopian Tree at every point in time. This begins with zero and it increases by 1 when the cycle is even while it is doubled when the cycle is odd.

    */

    let heightOfUtopian = 0;

    for ( let i = 0; i < n + 1; i++ ) {

        if ( i % 2 === 0 ) {
            heightOfUtopian += 1;
        } else {
            heightOfUtopian = heightOfUtopian * 2;
        }
    }

    console.log(heightOfUtopian);
    return heightOfUtopian;

}

utopianTree(5); // 14
utopianTree(0); // 1
utopianTree(1); // 2
utopianTree(4); // 7