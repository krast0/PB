function borsa(input){

    let veggiesForKilogram = Number(input[0]);
    let fruitForKilogram = Number(input[1]);
    let kgOfVeggiesSold = Number(input[2]);
    let kgOfFruitsSold = Number(input[3]);

    let sumOfVeggies = kgOfVeggiesSold * veggiesForKilogram
    let sumOfFruits = kgOfFruitsSold * fruitForKilogram

    let sum = sumOfFruits + sumOfVeggies
    let convert = sum /1.94
    console.log(convert.toFixed(2))





}
borsa(["0.194","19.4","10","10"])