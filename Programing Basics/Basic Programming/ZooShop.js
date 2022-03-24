function demo(input){

    let foodForCats = Number(input[0]);
    let foodForDogs = Number(input[1]);
    let price = (foodForCats) * 2.5 + (foodForDogs * 4)
    console.log(price)

}
demo(["22","44"])