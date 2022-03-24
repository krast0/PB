function maxNums(input){
    let index = 0
    let command = input[index]
    let minNumber = Number.MAX_SAFE_INTEGER
    index++
    while(command !== "Stop"){
        let number = Number(command)
        if(number < minNumber){
            minNumber = number
        }

        command = input[index]
        index++

    }
    console.log(minNumber)

}
maxNums(["42424","55","20","1","Stop"])