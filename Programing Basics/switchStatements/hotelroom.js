function hotelRoom (input){
    let month = input[0]
    let numberOfNights = Number(input[1])
    let studioPrice = 0
    let apartamentPrice = 0

    if(month === "May" || month === "October"){
        studioPrice = 50 * numberOfNights
        apartamentPrice = 65 * numberOfNights
        if(numberOfNights > 14){
            studioPrice *= 0.70
            apartamentPrice *= 0.90
        }else if(numberOfNights > 7){
            studioPrice *= 0.95
            
        }  
    }else if(month === "June" || month === "September"){
        apartamentPrice = 68.70 * numberOfNights
        studioPrice = 75.20 * numberOfNights
        if(numberOfNights > 14){
            studioPrice *= 0.80
            apartamentPrice *= 0.90
        }
    }else if(month === "July" || month === "August"){
        studioPrice = 76 * numberOfNights
        apartamentPrice = 77 * numberOfNights
        if(numberOfNights > 14){
            apartamentPrice *= 0.90
        }
    }
    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`)
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(["August","20"])