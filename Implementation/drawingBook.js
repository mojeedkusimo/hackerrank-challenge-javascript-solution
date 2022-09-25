function pageCount(n, p) {
    // Write your code here

    let noOfFrontFlip = 0;
    let noOfBacktFlip = 0;

    let viewPage = (i,n, func) => {
       if (func === flipBackToFront) {
            if (i >= p) { 
                noOfBacktFlip++;
                if (i === n) {
                    return;
                }
            }
        } 
        else {
            if (i <= p) { 
                noOfFrontFlip++;
                if (i === n) {
                    return;
                }
            }
        }
    }

    let viewPageOddB2F = (i,n) => {
        if (i >= p) {
            noOfBacktFlip++;
            if (i === n & (n % 2 === 0)) {
                return;
            } 
        }

  
    }

    

    let flipFrontToBack = () => {
        for (let i=0; i < n+1; i++) {
            viewPage(i, n, flipFrontToBack);
            i++;
        }
    }


    let flipBackToFront = () => {

        if (n % 2 === 0) {
            for (let i=n; i > -1; i--) {
                viewPage(i, n, flipBackToFront);
                if (n - p !== 1) {
                    i--;
                }
            }
            return;
        }

        for (let i=n; i > -1; i--) {
            viewPageOddB2F(i, n);
            i--;
        }
    }

    flipFrontToBack();
    flipBackToFront();

    console.log(Math.min(noOfFrontFlip -1, noOfBacktFlip -1));

}

pageCount(8,7);