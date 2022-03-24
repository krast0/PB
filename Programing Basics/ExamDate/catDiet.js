function catDiet(input){

    let percentOfFat = Number(input[0])
    let percentOfProtein = Number(input[1])
    let percentOfCarbs = Number(input[2])
    let overallCalories = Number(input[3])
    let percentOfWater = Number(input[4])
    let percent = 100

    let prcFat = overallCalories * percentOfFat * 0.01 / 9
    let prcProtein = overallCalories * percentOfProtein * 0.01 / 4
    let prcCarbs = overallCalories * percentOfCarbs * 0.01 / 4

    let foodWeight = prcFat + prcProtein + prcCarbs
    let calories = overallCalories / foodWeight
    
    let prcWater = percent - percentOfWater
    let waterWeight = calories * prcWater  * 0.01
    console.log(waterWeight.toFixed(4))
}
catDiet(["60","25","12","2500","60"])