function getMoneySpent(keyboards, drives, b) {
    /*

    At first glance, it looks easy but... Let's not get too excited.

    We are tasked to compute the most expesnsive amount to purchase keyboard and USB drive based on a given budget.

    The first thought that came to mind was forLoop that would traverse the collection of prices and calculate the sums then producing the highest sum less than the benchmark (budget) but that may seem have a high time complexity because of the possibility of having a nested loop.

    However, this seems to be the simpliest approach so we would go ahead with it. The price of each USB drive is summed up with each keyboard as long as the sum is less than or equal to the budget. These sums are stored in a separate collection (array) and the maximum value is expected to be the resolution of the program.

    */

    let sumsWithinBudget = [];

    for (let i = 0; i < drives.length; i++) {

        for (let j = 0; j < keyboards.length; j++) {

            let sum = drives[i] + keyboards[j];

            if (sum <= b) {

                sumsWithinBudget.push(sum);
            }
        }

    }

    if (sumsWithinBudget.length) {

        let bestMaxSum = Math.max(...sumsWithinBudget);
        console.log(bestMaxSum);
        return bestMaxSum;
    }

    console.log(-1);
    return -1;
}

getMoneySpent([40, 50, 60], [5, 8, 12], 60); // 58
getMoneySpent([3, 1], [5, 2, 8], 10); // 9
getMoneySpent([4], [5], 5); // -1