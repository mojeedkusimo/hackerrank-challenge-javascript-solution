function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    
    let arrayCheck = [/[0123456789]+/,/[abcdefghijklmnopqrstuvwxyz]+/,/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]+/,/[!@#$%^&*()\-+]+/];
    
    let minCharAdded = 0;
    arrayCheck.forEach((e) => {
        if (password.search(e) === -1) {
            minCharAdded++;
        }
    })

    
    if (n+minCharAdded < 6) {
        minCharAdded = minCharAdded + (6 - (n + minCharAdded)); 
    }
    
    return minCharAdded;
}