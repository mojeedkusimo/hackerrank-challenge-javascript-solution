function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let orangeCount = 0;    //counter for oranges that fall on Sam's house
    let appleCount = 0;     //counter for apples that fall on Sam's house

    //Iterating through available oranges
    for (let o = 0; o < oranges.length; o++) { 
        if ((b + oranges[o]) >= s && (b + oranges[o]) <= t) { 
            orangeCount += 1;
        }
    }

    //Iterating through available apples
    for (let p = 0; p < apples.length; p++) { 
        if ((a + apples[p]) >= s && (a + apples[p]) <= t) { 
            appleCount += 1;
        }
    }

    console.log(appleCount + "\n" + orangeCount);
}