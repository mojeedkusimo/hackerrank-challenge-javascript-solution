function acmTeam(topic) {
    // Write your code here

    let possibleTeams = [];

    for ( let i = 0; i < topic.length; i++ ) {

        for ( let j = 0; j < topic.length; j++ ) {

            if (  topic[i] !== topic[j] && !possibleTeams[possibleTeams.length - 1].includes([topic[i],topic[j]]) ) {

                possibleTeams.push([topic[i],topic[j]]);
            }

        }
    }

    console.log(possibleTeams);

}

acmTeam(['10101','11100','11010','00101']);