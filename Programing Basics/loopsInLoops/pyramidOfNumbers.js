function pyramidOfNumbers(input){
    let current = 1
    let isBigger = false
    let printCurrentLine = ""
    let number = Number(input[0])
    for(let r = 1;r <= number;r++){
        for(let c = 1;c <= r;c++){
            if(current > number){
                isBigger = true
                break;
            }
            printCurrentLine += current + " "
            current++
        }
        console.log(printCurrentLine)
        printCurrentLine = ""
        if(isBigger){
            break;
        }
    }

}
pyramidOfNumbers(["7"])