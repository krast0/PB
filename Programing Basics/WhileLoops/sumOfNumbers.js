function sumOfNumbers(input){
    let index = 0
    let number = Number(input[index])
    index++
    let n = Number(input[index])
    index++
    let sum = 0
    sum += n
    while(sum < number){
        n = Number(input[index])
        index++
        sum += n
    }
    
    console.log(sum)
}
sumOfNumbers(["100","10","20","30","40"])