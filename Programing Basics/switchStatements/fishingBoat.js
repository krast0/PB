function fishingBoat (input){
 
    let budget = Number(input[0])
    let season = input[1];
    let numberOfPeople = Number(input[2]);
    let priceOfBoat = 0
    let moneyLeft = 0

    if(season === "Spring"){
        priceOfBoat = 3000
        if(numberOfPeople <= 6){
            priceOfBoat *= 0.90
        }else if(numberOfPeople >= 7 && numberOfPeople <= 11){
            priceOfBoat *= 0.85
        }else{
            priceOfBoat *= 0.75
        }
    }else if(season === "Summer" || season === "Autumn"){
        priceOfBoat = 4200
        if(numberOfPeople <= 6){
            priceOfBoat *= 0.90
        }else if(numberOfPeople >= 7 && numberOfPeople <= 11){
            priceOfBoat *= 0.85
        }else{
            priceOfBoat *= 0.75
        }
    }else if(season === "Winter"){
        priceOfBoat = 2600
        if(numberOfPeople <= 6){
            priceOfBoat *= 0.90
        }else if(numberOfPeople >= 7 && numberOfPeople <= 11){
            priceOfBoat *= 0.85
        }else{
            priceOfBoat *= 0.75
        }
    }
    let oddOrEven 
    if(numberOfPeople % 2 == 0){
        if(season != "Autumn"){
            priceOfBoat *= 0.95
        }
    }


    if(budget >= priceOfBoat){
        moneyLeft = budget - priceOfBoat
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }else{
        moneyLeft = priceOfBoat - budget
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`)
    }
}
fishingBoat(["3500","Autumn","6"])