function pickingNumbers(a) {
    /*

    This is looks like a purely mathematical problem. I think the first thing to be done to ease the computation is to sort the collection of numbers provided. That way, the absolute difference of each number is checked in sequence.

    A problem with this challenge we are likely to face is, how do we track the information of each subarrays to be created from the one provided?

    But first of all, we need a trigger that is being monitored/checked so the program knows when to create a new subarray. This can simply be when the absolute difference between two numbers in sequence is more than one.

    Now, back to the problem mentioned in the second paragraph. We could consider having a bigArray in which new subarrays anytime time the trigger in third paragraph is fired. This way, the length of each subarray can easily be checked and the longest being picked as the resolution to the program.

    It appears we did not really deal with how the trigger is going to programmatically executed from start to finish. We can start by initializing an empty subarray inside the bigArray after which subsequent subarrays can be created based on the trigger. Knowing fully well we would be having 'n' number of subarrays at any point in time, we need to ensure we only populate the active subarray (i.e. the subarray created after the trigger has fired). This can be achieved by always accessing/pushing numbers to the last subarray (i.e. bigArray[bigArray.length - 1]) throughout the lifecycle of the program.

    */

    let arrayCopy = a.slice();
    let sortedArray = arrayCopy.sort((a,b) => a - b);
    let bigArray = [[]];
    bigArray[0].push(sortedArray[0]);
    let bigArraySubLength = [];

    for (let i = 0; i < sortedArray.length; i++) {

        if (Math.abs(bigArray[bigArray.length - 1][0] - sortedArray[i + 1]) < 2) {
            bigArray[bigArray.length - 1].push(sortedArray[i+1]);
        } else {
            if (sortedArray[i+1] !== undefined) {

                bigArray.push([]);
                bigArray[bigArray.length - 1].push(sortedArray[i+1]);
            }
        }
    }

    for (let i = 0; i < bigArray.length; i++) {
        bigArraySubLength.push(bigArray[i].length);
    }

    console.log(bigArray);
    console.log(Math.max(...bigArraySubLength));

    return Math.max(...bigArraySubLength);

}

pickingNumbers([1,2,5,6,7,8,2,2,2,1,8,8,7,6,5,5,2,4]); 
/*
[
  [
    1, 1, 2, 2,
    2, 2, 2
  ],
  [ 4, 5, 5, 5 ],
  [ 6, 6, 7, 7 ],
  [ 8, 8, 8 ]
]
*/