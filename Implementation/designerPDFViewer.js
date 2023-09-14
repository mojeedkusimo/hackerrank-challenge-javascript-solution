function designerPdfViewer(h, word) {
    // populate an array of heights of each letter in word
    // get maximum value from array
    // calc. area = max height x word count

    const letterHeights = [];

    for (let i = 0; i < word.length; i++) {
        let charCode = word.charCodeAt(i);
        let charIdx = charCode - 97;
        let charHeight = h[charIdx];

        letterHeights.push(charHeight);
    }

    let maxHeight = Math.max(...letterHeights);

    let area = maxHeight * word.length;

    console.log(area);
    return area;

}
designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 7], 'zaba');