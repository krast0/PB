function footballShirt(input){

    let priceOfShirt = Number(input[0])
    let priceToWinBall = Number(input[1])

    let priceOfShorts = priceOfShirt * 0.75
    let priceOfSocks = priceOfShorts * 0.20
    let priceOfShoes = (priceOfShirt + priceOfShorts) * 2
    let overallSum = priceOfShirt + priceOfShorts + priceOfSocks + priceOfShoes
    let priceWithDiscount = overallSum * 0.85


    if(priceWithDiscount >= priceToWinBall){
        console.log("Yes, he will earn the world-cup replica ball!")
        console.log(`His sum is ${priceWithDiscount.toFixed(2)} lv.`)
    }else{
        let neededMoney = priceToWinBall - priceWithDiscount
        console.log("No, he will not earn the world-cup replica ball.")
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`)   
    }
}
footballShirt(["55","310"])

