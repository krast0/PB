function preparationForExam(input){
    let index = 1
    let badGrades = Number(input[0])
    let isDisqalified = false
    let isEnough = false
    let nameOfProblem = input[index]
    let avg = 0
    let sum =0

    while(j !== "Enough"){
        nameOfProblem = input[index]
        index+=2
        isEnough = true
        console.log(nameOfProblem)
        }

    let gradeOfProblem = Number(input[index])
    index++
    while(gradeOfProblem >= badGrades){
        gradeOfProblem = Number(input[index])
        index+=2
        console.log(gradeOfProblem)
        sum += gradeOfProblem

    }



}
preparationForExam(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
