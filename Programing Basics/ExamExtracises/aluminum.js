function aluminum(input){
    let numberOfJoinery = Number(input[0]);
    let kindOfJoinery = input[1];
    let wayOfPurchasing = input[2];
    let price = 0;
    let delivery = false

    if(kindOfJoinery === "90X130"){
        price = 110
        sum = price * numberOfJoinery
        if(numberOfJoinery > 60){
            sum *= 0.92
        }else if(numberOfJoinery > 30){
            sum *= 0.95
        }
    }
    if(kindOfJoinery === "100X150"){
        price = 140
        sum = price * numberOfJoinery
        if(numberOfJoinery > 80){
            sum *= 0.90
        }else if(numberOfJoinery > 40){
            sum *= 0.94
        }
    }
    if(kindOfJoinery === "130X180"){
        price = 190
        sum = price * numberOfJoinery
        if(numberOfJoinery > 50){
            sum *= 0.88
        }else if(numberOfJoinery > 20){
            sum *= 0.93
        }
    }
    if(kindOfJoinery === "200X300"){
        price = 250
        sum = price * numberOfJoinery
        if(numberOfJoinery > 50){
            sum *= 0.86
        }else if(numberOfJoinery > 25){
            sum *= 0.91
        }
    }
    if(wayOfPurchasing === "With delivery"){
        sum += 60
    }

    if(numberOfJoinery > 99){
        sum *= 0.96
    }
    if(numberOfJoinery <= 10){
        console.log("Invalid order")
    }else{    console.log(`${sum.toFixed(2)} BGN`)}

}
aluminum(["40","90X130","Without delivery"])