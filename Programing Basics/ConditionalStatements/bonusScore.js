function bonusScore(input){
let chislo = Number(input[0])
if(chislo <= 100){
    bonus = 5
}else if(chislo > 1000){
     bonus = chislo * 0.1
}else{
    bonus = chislo * 0.2
}

if(chislo % 2 == 0){
    bonus += 1
}else if(chislo % 10 ==5){
    bonus += 2
}
console.log(bonus)
console.log(chislo + bonus)





}
bonusScore(["200"])