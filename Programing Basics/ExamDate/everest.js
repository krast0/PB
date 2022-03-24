function everest(input){
    let index = 0
    let startMeters = 5364
    let command = input[index]
    index++
    let metersWalked = Number(input[index])
    index++
    let daysCounter = 1
    let isFinished = false

    while(command !== "END"){
        let yesOrNo = command
        if(yesOrNo === "Yes"){
        daysCounter++
        startMeters += metersWalked
        
       }else{
           startMeters += metersWalked
       }
       
       if(startMeters >= 8848){
           isFinished = true
           break;
       }else{
        isFinished = false
       }

       if(daysCounter > 5){
        isFinished = false
        break;}

       command = input[index]
       index++
       metersWalked =Number(input[index])
       index++

    }


    if(isFinished){
        console.log(`Goal reached for ${daysCounter} days!`)
    }else{
        console.log(`Failed!`)
        console.log(startMeters)
    }
    


}
everest(["Yes",
"1000",
"END"])






