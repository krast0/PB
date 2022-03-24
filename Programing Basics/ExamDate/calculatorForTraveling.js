function calculatorForTraveling(input){

    let numberOfPeople = Number(input[0])
    let season = input[1]
    let price = 0

    if(season === "spring"){
        if(numberOfPeople <= 5){
            price = 50 * numberOfPeople
        }else{
            price = 48 * numberOfPeople
        }

    }else if(season === "summer"){
        if(numberOfPeople <= 5){
            price = 48.5 * numberOfPeople
            price *= 0.85
        }else{
            price = 45 * numberOfPeople
            price *= 0.85
        }
    }else if(season === "autumn"){
        if(numberOfPeople <= 5){
            price = 60 * numberOfPeople
        }else{
            price = 49.5 * numberOfPeople
        }
    }else if(season === "winter"){
        if(numberOfPeople <= 5){
            price = 86 * numberOfPeople
            price *= 1.08
        }else{
            price = 85 * numberOfPeople
            price *= 1.08
        }
    }

    console.log(`${price.toFixed(2)} leva.`)


}
calculatorForTraveling(["6","summer"])