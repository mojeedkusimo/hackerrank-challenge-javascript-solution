function hourglassSum(arr) {

    /*

    The site of the challenge alone looks quite intimidating but always remember its a human that built programs, hence, have no fear. Moreover, you are a great guy! And the servant of The Greatest!

    We are given a 6 x 6 2D array having a subset of values with a graphical representation:

    a b c
      d
    e f g

    called hourglass. We expected to get the highest hourglass sum

    from the series of hourglass found in every 6 x 6 2D array.

    The question is: how can one identify an hourglass as it is not yet clear to me. Let's see...

    Eureka! I get it now. It's just a simple letter 'I' formation in the 2D-array, thus, the number of hourglass for a 6 x 6 2D-array is always 16.

    The next question is: how do we transform the graphical representation to the array format. That way, we can easily write a function to compute sum of such combinations.

    I believe working with pen and paper would show a better view or pattern of the indexes of the elements of the array involved in the hourglass formation.

    To be continued...

    Welcome back!!!
    Since we are only working with 6 x 6 2D arrays, we only need to  traverse the 2D uptill the 4th sub array and pick all the elements relative to the position of the 2nd,3rd,4th and 5th element in each sub array.

    This would be used to form a 7 x 16 2D array. Get the summation  of each 16 sub-arrays and determine the maximum sum.

    */

    let hourGlassArray = [];
    let hourGlassSumArray = [];

    for ( let i = 0; i < 4; i++ ) {

        
        for ( let j = 1; j < 5; j++ ) {
       
            let hourGlassSubArray = [];

            hourGlassSubArray.push(arr[i][j]);
            hourGlassSubArray.push(arr[i][j-1]);
            hourGlassSubArray.push(arr[i][j+1]);
            hourGlassSubArray.push(arr[i+1][j]);
            hourGlassSubArray.push(arr[i+2][j]);
            hourGlassSubArray.push(arr[i+2][j-1]);
            hourGlassSubArray.push(arr[i+2][j+1]);

            hourGlassArray.push(hourGlassSubArray);
        }

    }
    

    for ( let i = 0; i < hourGlassArray.length; i++ ) {

        let subArraySum = 0;

        for ( let j = 0; j < hourGlassArray[i].length; j++ ) {

            subArraySum += hourGlassArray[i][j];
        }

        hourGlassSumArray.push(subArraySum);
    }

    console.log(Math.max(...hourGlassSumArray));
    return Math.max(...hourGlassSumArray)

}

let arr = [
    [1, 1, 1, 0, 0, 0 ],
    [0, 1, 0, 0, 0, 0 ],
    [1, 1, 1, 0, 0, 0 ],
    [0, 0, 2, 4, 4, 0 ],
    [0, 0, 0, 2, 0, 0 ],
    [0, 0, 1, 2, 4, 0 ]
]
hourglassSum(arr); // 19