function skiHoliday(input){
    let numberOfDays = Number(input[0])
    let typeOfRoom = input[1]
    let rating = input[2]
    let numberOfNights = 0
    let price = 0

    numberOfNights = numberOfDays - 1

   if(typeOfRoom === "room for one person"){
      price = numberOfNights * 18.00
   }else if(typeOfRoom === "apartment"){
       if(numberOfNights < 10){
        price = numberOfNights * 25.00
        price *= 0.70
       }else if(numberOfNights > 10 && numberOfNights < 15){
        price = numberOfNights * 25.00
        price *= 0.65
       }else{
        price = numberOfNights * 25.00
        price *= 0.50
       }
   }else if(typeOfRoom === "president apartment"){
    if(numberOfNights < 10){
        price = numberOfNights * 35.00
        price *= 0.90
       }else if(numberOfNights > 10 && numberOfNights < 15){
        price = numberOfNights * 35.00
        price *= 0.85
       }else{
        price = numberOfNights * 35.00
        price *= 0.80
       }
   }
   
   if(rating === "positive"){
       price *= 1.25
   }else if(rating === "negative"){
       price *= 0.90
   }
   console.log(price.toFixed(2))
}
skiHoliday(["30","president apartment","negative"])