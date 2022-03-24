function demo(input){

   let depositedSum = Number(input[0])
   let Period = Number(input[1])
   let yearlyPercent = Number(input[2])

   let presentLihva = depositedSum * (yearlyPercent * 0.01)
   let sumForOneMonth = presentLihva / 12
   let overallSum = depositedSum + Period * sumForOneMonth

   console.log(overallSum)
}
   demo(["200","3","5.7"]);