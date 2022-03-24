function addingStorage(input){
    let priceOfStorageGreaterThan20kg = Number(input[0])
    let storageKg = Number(input[1])
    let daysTillTravel = Number(input[2])
    let numberOfStorages = Number(input[3])
    let priceOfStorage = 0


    if(storageKg <= 10){
        priceOfStorage = priceOfStorageGreaterThan20kg * 0.2
    }else if(storageKg <= 20){
        priceOfStorage = priceOfStorageGreaterThan20kg * 0.5
    }else{
        priceOfStorage=priceOfStorageGreaterThan20kg
    }

    if(daysTillTravel <= 30){
        priceOfStorage*= 1.15
    }else if(daysTillTravel <= 7){
        priceOfStorage*= 1.40
    }else{
        priceOfStorage*= 1.1
    }
    let FinalPrice = priceOfStorage * numberOfStorages
    console.log(`The total price of bags is: ${FinalPrice.toFixed(2)} lv.`)
}
addingStorage(["63.80","23","3","1"])