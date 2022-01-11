function bonAppetit(bill, k, b) {
    // Write your code here
    let sum = 0;

    for (let i = 0; i < bill.length; i++) {
        sum += bill[i];
    }

    let equalCost = (sum - bill[k])/2

    if (equalCost === b) {
        console.log('Bon Appetit')
    } else {
        console.log(b - equalCost)
    }
}