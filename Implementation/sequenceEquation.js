function permutationEquation(p) {

    /*

    This is somewhat a confusing mathematical problem. Let's venture further. The first example still looks confusing but this is supposed to be an easy challenge with 97.54% success rate, so, let's not give up.

    I think I am beginning to see something, let's try:

    array = [4,3,5,1,2];
    length = 5;

    x = 1 === p(4) === p(1) = 4 ==== p(p(1)); y = 1
    x = 2 === p(5) === p(3) = 5 ==== p(p(3)); y = 3
    x = 3 === p(2) === p(5) = 2 ==== p(p(5)); y = 5
    x = 4 === p(1) === p(4) = 1 ==== p(p(4)); y = 4
    x = 5 === p(3) === p(2) = 3 ==== p(p(2)); y = 2

    Now, I get the mathematical logic but how do we translate to code?

    Therefore, on each iteration of 1 to n (length of the sequence), we are checking the corresponding position of that value in the array wrt index starting from 1 called p1. Then, we check the position of p1 in the array to arrive at p2 which is stored in an array.


    p2 is what satisfies the condition of each value of x in the mathematical expression provided.

    */

    let mathExpArray = [];

    for ( let i = 1; i < p.length + 1; i++ ) {

        let p1 = p.indexOf(i)+1;
        let p2 = p.indexOf(p1)+1;

        mathExpArray.push(p2);

    }

    console.log(mathExpArray);
    return mathExpArray;
}

permutationEquation([5,2,1,3,4]);
permutationEquation([2,3,1]);
permutationEquation([4,3,5,1,2]);