function timeConversion(s) {
    let meridian = s.charAt(8);
    let time24 = '';
    if (meridian == 'A') {
        if (s.slice(0,2) == '12') {
            time24 = '00'+ s.slice(2,8);
        } 
        else {
            time24 = s.slice(0,8);
        }
    } 
    else {
        if (s.slice(0,2) == '12') {
            time24 = s.slice(0,8);
        }
        else {
            let hour12 = Number(s.slice(0,2)),
                numHour24 = hour12 + 12,
                strHour24 = String(numHour24);
            time24 = strHour24 + s.slice(2,8);
        }
    }

    return time24;
}