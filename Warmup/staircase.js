function staircase(n) {
    let spaceCount = " "
    let valueCount = "#";
    for (let i = 1; i < n + 1; i++) {
        console.log(spaceCount.repeat(n - i) + valueCount.repeat(i));
    }

}