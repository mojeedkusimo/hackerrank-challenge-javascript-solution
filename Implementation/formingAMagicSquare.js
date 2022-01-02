function formingMagicSquare(s) {

    //The only magic squares possible for 3 x 3 matrix are as follows:
    let ms1 = [[8, 1, 6], [3, 5, 7], [4, 9, 2]];
    let ms2 = [[6, 1, 8], [7, 5, 3], [2, 9, 4]];
    let ms3 = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
    let ms4 = [[4, 3, 8], [9, 5, 1], [2, 7, 6]];
    let ms5 = [[2, 9, 4], [7, 5, 3], [6, 1, 8]];
    let ms6 = [[4, 9, 2], [3, 5, 7], [8, 1, 6]];
    let ms7 = [[6, 7, 2], [1, 5, 9], [8, 3, 4]];
    let ms8 = [[8, 3, 4], [1, 5, 9], [6, 7, 2]];

    //The total cost for each transformation is defined below:
    let tc1 = 0;
    let tc2 = 0;
    let tc3 = 0;
    let tc4 = 0;
    let tc5 = 0;
    let tc6 = 0;
    let tc7 = 0;
    let tc8 = 0;

    //1st transform
    for (let i1 = 0; i1 < s.length; i1++) { 
        for (let j1 = 0; j1 < s[i1].length; j1++) { 
            // s[i1][j1] = ms1[i1][j1];
            if (Math.abs(s[i1][j1] - ms1[i1][j1]) != 0) { 
                tc1 += Math.abs(s[i1][j1] - ms1[i1][j1]);
            }
        }
    }

    //2nd transform
    for (let i2 = 0; i2 < s.length; i2++) {
        for (let j2 = 0; j2 < s[i2].length; j2++) {
            // s[i2][j2] = ms2[i2][j2];
            if (Math.abs(s[i2][j2] - ms2[i2][j2]) != 0) {
                tc2 += Math.abs(s[i2][j2] - ms2[i2][j2]);
            }
        }
    }

    //3rd transform
    for (let i3 = 0; i3 < s.length; i3++) {
        for (let j3 = 0; j3 < s[i3].length; j3++) {
            // s[i3][j3] = ms3[i3][j3];
            if (Math.abs(s[i3][j3] - ms3[i3][j3]) != 0) {
                tc3 += Math.abs(s[i3][j3] - ms3[i3][j3]);
            }
        }
    }

    //4th transform
    for (let i4 = 0; i4 < s.length; i4++) {
        for (let j4 = 0; j4 < s[i4].length; j4++) {
            // s[i4][j4] = ms4[i4][j4];
            if (Math.abs(s[i4][j4] - ms4[i4][j4]) != 0) {
                tc4 += Math.abs(s[i4][j4] - ms4[i4][j4]);
            }
        }
    }

    //5th transform
    for (let i5 = 0; i5 < s.length; i5++) {
        for (let j5 = 0; j5 < s[i5].length; j5++) {
            // s[i5][j5] = ms5[i5][j5];
            if (Math.abs(s[i5][j5] - ms5[i5][j5]) != 0) {
                tc5 += Math.abs(s[i5][j5] - ms5[i5][j5]);
            }
        }
    }

    //6th transform
    for (let i6 = 0; i6 < s.length; i6++) {
        for (let j6 = 0; j6 < s[i6].length; j6++) {
            // s[i6][j6] = ms6[i6][j6];
            if (Math.abs(s[i6][j6] - ms6[i6][j6]) != 0) {
                tc6 += Math.abs(s[i6][j6] - ms6[i6][j6]);
            }
        }
    }

    //7th transform
    for (let i7 = 0; i7 < s.length; i7++) {
        for (let j7 = 0; j7 < s[i7].length; j7++) {
            // s[i7][j7] = ms7[i7][j7];
            if (Math.abs(s[i7][j7] - ms7[i7][j7]) != 0) {
                tc7 += Math.abs(s[i7][j7] - ms7[i7][j7]);
            }
        }
    }

    //8th transform
    for (let i8 = 0; i8 < s.length; i8++) {
        for (let j8 = 0; j8 < s[i8].length; j8++) {
            // s[i8][j8] = ms8[i8][j8];
            if (Math.abs(s[i8][j8] - ms8[i8][j8]) != 0) {
                tc8 += Math.abs(s[i8][j8] - ms8[i8][j8]);
            }
        }
    }

    return Math.min(tc1,tc2,tc3,tc4,tc5,tc6,tc7,tc8);
}
