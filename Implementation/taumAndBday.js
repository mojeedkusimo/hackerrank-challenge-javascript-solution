function taumBday(b, w, bc, wc, z) {

    /*
    
    This is purely a mathematical problem. This is no longer looking like ordinary maths.

    I do not even understand the logic again.

    Kai! Now I get it. The additional cost of conversion is more or less for the painting and not like currency rate of conversion where black is one currency and white is another.

    With this in mind, the problem is already half solved.

    Basically, we are checking if there is difference in unit cost of black and white. It is then, the conversion cost (i.e. cost of painting) is put into consideration.

    if the unit cost of one color plus the additional cost of painting is lesser than the unit cost of the second color, all the gifts would be bought with the lesser color cost (and painted) otherwise the gifts are bought separately at the cost of each individual color.

    */

    let costOfBlack;
    let costOfWhite;

    const calcGiftCost = (cb, cw) => {

        return cb + cw;
    }

    if ( bc > wc + z ) {
        costOfBlack = b*(wc + z);
        costOfWhite = w*wc;

    } else if ( wc > bc + z ) {
        costOfBlack = b*bc;
        costOfWhite = w*(bc + z);

    } else {
        costOfBlack = b*bc;
        costOfWhite = w*wc;
    }

    let giftCost = calcGiftCost(costOfBlack,costOfWhite);

    console.log(giftCost);
    return giftCost;

}

taumBday(10, 10, 1, 1, 1); // 20
taumBday(5, 9, 2, 3, 4); // 37
taumBday(3, 6, 9, 1, 1); // 12
taumBday(7, 7, 4, 2, 1); // 35
taumBday(3, 3, 1, 9, 2); // 12
taumBday(3, 5, 3, 4, 1); // 29