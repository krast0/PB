function adventure(input){
    let budget = Number(input[0])
    let season = input[1];
    let priceOfplace = 0
    let place = ""
    let hotelOrCamp = ""
    if(season === "summer"){
        if(budget <= 100){
            priceOfplace = budget * 0.3
            place = "Bulgaria"
            hotelOrCamp = "Camp"
        }else if(budget <= 1000){
            priceOfplace = budget * 0.4
            place = "Balkans"
            hotelOrCamp = "Camp"
        }else{
            priceOfplace = budget * 0.9
            place = "Europe"
            hotelOrCamp = "Hotel"
        }
    }else if(season === "winter"){
        if(budget <= 100){
            priceOfplace = budget * 0.7
            place = "Bulgaria"
            hotelOrCamp = "Hotel"
        }else if(budget <= 1000){
            priceOfplace = budget * 0.8
            place = "Balkans"
            hotelOrCamp = "Hotel"
        }else{
            priceOfplace = budget * 0.9
            place = "Europe"
            hotelOrCamp = "Hotel"
        }
    }

    console.log(`Somewhere in ${place}`)
    console.log(`${hotelOrCamp} - ${priceOfplace.toFixed(2)}`)

}
adventure(["1500","summer"])