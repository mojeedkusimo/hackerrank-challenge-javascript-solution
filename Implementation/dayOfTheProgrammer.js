function dayOfProgrammer(year) {
    // Write your code here

    let date = year == 1918 ? 
        `26.09.1918`: year % 4 == 0 && year < 1918 || year % 400 == 0 || year % 4 == 0 && year % 100 != 0? `12.09.${year}`: `13.09.${year}`;

    return date;
}