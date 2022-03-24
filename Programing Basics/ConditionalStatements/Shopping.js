function shopping(input){
    let budget = Number(input[0])
    let numberOfGraphicsCards = Number(input[1])
    let numberOfProcessors = Number(input[2])
    let numberOfRamMemory = Number(input[3])

    let priceOfGraphicsCard = 250
    let priceOfProcessor = numberOfGraphicsCards * priceOfGraphicsCard * 0.35
    let priceOfRam = numberOfGraphicsCards * priceOfGraphicsCard * 0.1

    let priceOfGraphicsCards = priceOfGraphicsCard * numberOfGraphicsCards
    let priceOfProcessors = priceOfProcessor * numberOfProcessors
    let priceOfRams = priceOfRam * numberOfRamMemory
    let sum = priceOfGraphicsCards + priceOfProcessors + priceOfRams
    let discountsum = sum
    if(numberOfGraphicsCards > numberOfProcessors){
        discountsum *= 0.85
    }
    if(discountsum <= budget){
        let moneyLeft = budget - discountsum
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    }else{
        let moneyNeeded = discountsum - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}
shopping(["900","2","1","3"])