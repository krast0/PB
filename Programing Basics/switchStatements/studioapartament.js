function demo(input) {
 
    let month = input[0];
    let nights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
 
    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartmentPrice = 65;
            break;
        case 'June':
        case 'September':
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            break;
        case 'July':
        case 'August':
            studioPrice = 76;
            apartmentPrice = 77;
            break;
    }
 
    if (nights > 14 && (month === 'May' || month === 'October')) {
        studioPrice = studioPrice * 0.70;
    } else if (nights > 7 && (month === 'May' || month === 'October')) {
        studioPrice = studioPrice * 0.95;
    } else if (nights > 14 && (month === 'June' || month === 'September')) {
        studioPrice = studioPrice * 0.80;
    } 
    if (nights > 14) {
        apartmentPrice = apartmentPrice * 0.90;
    }
 
    console.log(`Apartment: ${(nights * apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studioPrice).toFixed(2)} lv.`);
}
demo(["May", "15"]);