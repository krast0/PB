function demo(input) {

    let chickenMenus = Number(input[0])
    let fishMenus = Number(input[1])
    let vegetarianMenus = Number(input[2])

    let PriceForChicken = chickenMenus * 10.35
    let PriceForFish = fishMenus * 12.40
    let PriceForVegeterians = vegetarianMenus * 8.15

    let FullPriceForMenus = PriceForChicken + PriceForFish + PriceForVegeterians
    let priceOfDesert = FullPriceForMenus * 0.20
    let bill = FullPriceForMenus + priceOfDesert + 2.50

    console.log(bill)


}
demo(["2", "4", "3"]);