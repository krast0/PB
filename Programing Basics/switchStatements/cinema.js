function cinema(input){
    let typeProjection = input[0];
    let numberOfRows = Number(input[1]);
    let numberOfColomns = Number(input[2]);
    let money = 0

    let allSeats = numberOfRows * numberOfColomns

    if(typeProjection === "Premiere"){
        money = allSeats * 12.00
    }else if(typeProjection === "Normal"){
        money = allSeats * 7.50
    }else{
        money = allSeats * 5.00
    }
    console.log(money.toFixed(2))
}
cinema(["Discout","12","30"])