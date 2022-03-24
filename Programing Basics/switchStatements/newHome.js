function home(input){
let flowerType = input[0]
let flowerCount =Number(input[1])
let budget = Number(input[2])
let singleflowerPrice = 0;
let allflowers = 0
let moneyLeft = 0

if(flowerType === "Roses"){
    singleflowerPrice = 5
    if(flowerCount > 80){
        allflowers = (flowerCount * singleflowerPrice) * 0.90
    }else{
        allflowers = (flowerCount * singleflowerPrice)
    }
}else if(flowerType === "Dahlias"){
    singleflowerPrice = 3.80
    if(flowerCount > 90){
        allflowers = (flowerCount * singleflowerPrice) * 0.85
    }else{
        allflowers = (flowerCount * singleflowerPrice)
    }
}else if(flowerType === "Tulips"){
    singleflowerPrice = 2.80
    if(flowerCount > 80){
        allflowers = (flowerCount * singleflowerPrice) * 0.85
    }else{
        allflowers = (flowerCount * singleflowerPrice)
    }
}else if(flowerType === "Narcissus"){
    singleflowerPrice = 3
    if(flowerCount < 120){
        allflowers = (flowerCount * singleflowerPrice) * 1.15
    }else{
        allflowers = (flowerCount * singleflowerPrice)
    }
}else if(flowerType === "Gladiolus"){
    singleflowerPrice = 2.50
    if(flowerCount < 80){
        allflowers = (flowerCount * singleflowerPrice) * 1.20
    }else{
        allflowers = (flowerCount * singleflowerPrice)
    }
}
    if(budget >= allflowers){
        moneyLeft = budget - allflowers
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`)
    }else{
        moneyLeft = allflowers - budget
        console.log(`Not enough money, you need ${moneyLeft.toFixed(2)} leva more.`)
    }
    
}


home(["Roses","55","250"])