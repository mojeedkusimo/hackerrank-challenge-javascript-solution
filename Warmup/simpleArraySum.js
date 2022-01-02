function simpleArraySum(ar) {
    let counter = 0;

    for (let i = 0; i < ar.length; i++) {
        counter += ar[i];
    }
    return counter;

}