function pageCount(n, p) {
    // Write your code here

    // View book from front
    let frontCount = 0;

    for (let i=0; i<p; i++) {
        if (i % 2 === 0 && i !== 0) {
            frontCount++;
        }
        if (i === n) {
            break;
        }    
    }

    // View book from back
    let backCount = 0;

    for (let i=p; i> 0; i-- ) {
        if (i % 2 !== 0 && i !== p) {
            backCount++;
        }
        if (i === n) {
            break;
        } 
    }

    console.log(Math.min(frontCount,backCount));
    console.log(frontCount,backCount);
}

pageCount(5,3);
pageCount(6,2);
pageCount(5,4);