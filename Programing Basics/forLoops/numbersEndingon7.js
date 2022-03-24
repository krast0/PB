function numbersEndingOn7(input){
    for(let i=1;i <= 1000;i++){
        if([i] % 100 === 7)
        console.log(i)
    }
}
numbersEndingOn7()