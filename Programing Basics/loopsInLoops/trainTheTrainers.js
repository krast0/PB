function trainTheTrainers(input){


    let numberOfTeachers = Number(input[0])
    let index = 1
    let nameOfPresentation = input[index]
    let sumGrade = 0
    let counter = 0

    while(nameOfPresentation !== 'Finish'){
        counter++
        let name = nameOfPresentation
        let tempSumGrade = 0
        for(let i = 0;i < numberOfTeachers;i++){
            index++
            let grade = Number(input[index])
            tempSumGrade += grade
            
        }
        let tempAvgGrade = tempSumGrade / numberOfTeachers
        sumGrade += tempAvgGrade
        console.log(`${nameOfPresentation} - ${tempAvgGrade.toFixed(2)}.`)
        index++
        nameOfPresentation = (input[index])

    }
    let avgGrade = sumGrade / counter
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)


}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])

