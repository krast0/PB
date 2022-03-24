function exam(input){

    let numberofStudents = Number(input[0])
    let index = 1
    let counterMnDobur = 0
    let counterDobur = 0
    let counterSreden = 0
    let counterSlab = 0
    let sum = 0

    for(let i = 0;i < numberofStudents;i++){
        let grade = Number(input[index])

        if(grade >= 5.00){
            counterMnDobur++
        }else if(grade >= 4.00 && grade <= 4.99){
            counterDobur++
        }else if(grade >= 3.00 && grade <= 3.99){
            counterSreden++
        }else if(grade < 3){
            counterSlab++
        }
        sum += grade
        index++
        


    }
    let avgGrade = sum / numberofStudents


console.log(`Top students: ${(counterMnDobur / numberofStudents * 100).toFixed(2)}%`)
console.log(`Between 4.00 and 4.99: ${(counterDobur / numberofStudents * 100).toFixed(2)}%`)
console.log(`Between 3.00 and 3.99: ${(counterSreden / numberofStudents * 100).toFixed(2)}%`)
console.log(`Fail: ${(counterSlab / numberofStudents * 100).toFixed(2)}%`)
console.log(`Average: ${avgGrade.toFixed(2)}`)



}
exam(["12","3.5","3.4","2","3","4","5","6","2.2","3.2","2.6","4.2","5"])