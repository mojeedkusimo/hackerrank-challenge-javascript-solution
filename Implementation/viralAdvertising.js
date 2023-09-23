function viralAdvertising(n) {

    /*

    The advertising strategy of KackerLand Enterprise appears to just be a game of numbers and assumptions.

    The expected number of likes and spread of advertisement per day is already given by expressions below assuming the number first shared is n:

    spreadOfAdvert =  floor(n/2)
    noOfLikes = spreadOfAdvert x 3

    The result of above is simpy acummulated daily to get the total number of likes/spread for d, number of days.

    */

    let cumSpreadOfAdvert = 5;
    let cumNoOfLikes = 0;

    for ( let i = 1; i < n+1; i++ ) {

        let noOfLikes = Math.floor(cumSpreadOfAdvert/2);

        cumNoOfLikes += noOfLikes;
        cumSpreadOfAdvert = noOfLikes * 3;
    }

    console.log(cumNoOfLikes);
    return cumNoOfLikes;
}

viralAdvertising(2); // 5
viralAdvertising(5); // 24