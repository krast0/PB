function trainingLab(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let koridor = 1
    let widthofTable = 0.70
    let lenghtofTable = 1.20

    

    placesOnRed = width - koridor
    placesOnRedReal = placesOnRed / widthofTable
    placess = Math.floor(placesOnRedReal)   


    
    placesOnLenght = lenght /lenghtofTable
    placesOfLenghtReal = Math.floor(placesOnLenght)
    overallPlaces = placess * placesOfLenghtReal - 3

    console.log(overallPlaces.toFixed(0))
}
trainingLab(["14","5.2"])