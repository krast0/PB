function graduation(input){
    let index = 0
    let nameOfStudent = input[index]
    index++
    let gradeCounter = 0
    let sum = 0
    let i = 1
    let isRemoved = false
    while(i <= 12){
       let grades = Number(input[index])
        index++;

        if(grades < 4){
            gradeCounter++
            if(gradeCounter >= 2){
                isRemoved = true
                break;
            }
            continue;
        }

        sum += grades
        i++
    }
    let avarage = sum / 12
    if(isRemoved === true){
        console.log(`${nameOfStudent} has been excluded at ${i} grade`)
    }else{console.log(`${nameOfStudent} graduated. Average grade: ${avarage.toFixed(2)}`)}
}
graduation(["Gosho","5","3","3","5.43","5.5","6","5.55","5","6","6","5.43","5"])