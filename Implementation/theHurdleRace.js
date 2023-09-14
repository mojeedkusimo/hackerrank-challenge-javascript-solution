function hurdleRace(k, height) {

    const maxHeight = Math.max(...height);

    if (maxHeight > k) {
        console.log(maxHeight - k);
        return maxHeight - k;
    } else {
        console.log(0);
        return 0;
    }

}

hurdleRace(4, [1, 6, 3, 5, 2]); //2
hurdleRace(7, [2, 5, 4, 5, 2]); //0