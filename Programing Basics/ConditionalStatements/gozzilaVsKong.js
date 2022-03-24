function gozzilaVsKong(input){
    let budget = Number(input[0])
    let numberOfExtras = Number(input[1])
    let extrasClothingforOnePerson = Number(input[2])
    let priceForClothing = 0

    let decor = budget * 0.1
    if(numberOfExtras > 150){
        let discount = extrasClothingforOnePerson * 0.9
        priceForClothing = numberOfExtras * discount
    }else{
        priceForClothing = extrasClothingforOnePerson * numberOfExtras
    }
    let sum = decor + priceForClothing


    if(sum > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`)
    }else{
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`)
    }
}
gozzilaVsKong(["9587.88","222","55.68"])
