function chetnistepeni(input){
    let number = Number(input[0])

    for(let i = 0;i <= number; i+= 2){
        res = Math.pow(2,i)
        console.log(res)
    }
}
chetnistepeni([6])