function oscars(input){

    let nameOfActor = input[0]
    let pointsFromAcademy = Number(input[1])
    let numberOfJury = Number(input[2])
    let index = 3


    for(let i = 0;i < numberOfJury;i++){
        let nameOfJury = input[index]
        let pointOfNames = Number(nameOfJury.length)
        index++

        let points = Number(input[index])
        index++
        pointsFromAcademy += ((pointOfNames * points) / 2)
        if(pointsFromAcademy > 1250.5){
            break;
        }
 
    }
    
    let neededPoints = 1250.5 - pointsFromAcademy
    if(pointsFromAcademy > 1250.5){
        console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`)
        
    }else{
        console.log(`Sorry, ${nameOfActor} you need ${neededPoints.toFixed(1)} more!`)
    }

}
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])