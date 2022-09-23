function pageCount(n, p) {
    // Write your code here

    let noOfFlip = 0;

    let viewPage = (i,n) => {
        noOfFlip++;
        if (i === n) {
            console.log([i]);
            return;
        }

        console.log([i, i+1]);
  
    }

    let viewPageOddB2F = (i,n) => {
        noOfFlip++;
        if (i === n & (n % 2 === 0)) {
            console.log([i]);
            return;
        }

        console.log([i-1, i]);
  
    }

    

    let flipFrontToBack = () => {
        for (let i=0; i < n+1; i++) {
            viewPage(i, n);
            i++;
        }
    }


    let flipBackToFront = () => {

        if (n % 2 === 0) {
            for (let i=n; i > -1; i--) {
                viewPage(i, n);
                i--;
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

    console.log(noOfFlip);

}

pageCount(10,2);