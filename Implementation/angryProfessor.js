function angryProfessor(k, a) {

    /*

    The name is sounds funny... but lets get back to business. In summary, the Angry Professor is only going to take the class if a minimum number (threshold) of students are in the class as at the time of the class.

    It actually looks quite straightforward because we only need to count(validStudents) the number of arrivalTime(s) that are less than or equal to zero. This count is then compared with the minimum requirement for the class to determine is the class would hold or not.

    */

    let validStudents = 0;

    for (let i = 0; i < a.length; i++) {

        if ( a[i] <= 0 ) {
            validStudents++;
        }
    }

    if ( validStudents >= k ) {
        console.log('NO');
        return 'NO'
    }

    console.log('YES');
    return 'YES';
}

angryProfessor(3, [-2,-1,0,1,2]); // NO
angryProfessor(3, [-1,-3,4,2]); // YES
angryProfessor(2, [-1,0,1,2]); // NO