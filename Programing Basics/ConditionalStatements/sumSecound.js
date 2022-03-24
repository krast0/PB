function sumSec(input){
    let secounds = Number(input[0])
    let secounds2 = Number(input[1])
    let secounds3 = Number(input[2])

    let obshtoSec = secounds + secounds2 + secounds3
    let minutes = Math.floor(obshtoSec / 60)
    let secs = obshtoSec % 60
    if(secs < 10){
        console.log(`${minutes}:0${secs}`)
    }else{
        console.log(`${minutes}:${secs}`)
    }
  

        
    


}
sumSec(["35","55","44"])