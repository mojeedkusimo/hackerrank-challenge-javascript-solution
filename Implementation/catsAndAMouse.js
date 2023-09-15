function catAndMouse(x, y, z) {

    /*

    We have positions of three(3) actors: x (cat A), y (cat B), and z (mouse C). Depending on the co-ordinates provided, the program we are writing is to return 'Cat A' if x is nearest to z, or 'Cat B' if y is nearest to z, and 'Mouse C' if both x and y and are same distances away from z.

    A collection (not array) of 3 integers (x,y,z) is expected to be parsed into to our program which then processes the data and produce results base on conditions above.

    We could declare two variables distanceZFromX and distanceZFromY. This is then cascaded into an if/else statement whereby a lesser value of distanceZFromX yields 'Cat A' while a reverse would yield 'Cat B'. If both are equal, then, the program yields 'Mouse C'
    

    */

    const distanceZFromX = Math.abs(x-z);
    const distanceZFromY = Math.abs(y-z);

    if (distanceZFromX < distanceZFromY) {
        console.log('Cat A');
        return 'Cat A';
    } else if (distanceZFromX > distanceZFromY) {
        console.log('Cat B');
        return 'Cat B';
    } else {
        console.log('Mouse C');
        return 'Mouse C';
    }

}

catAndMouse(1, 2, 3); // Cat B
catAndMouse(1, 3, 2); // Mouse C 