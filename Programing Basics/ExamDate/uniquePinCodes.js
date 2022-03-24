function uniquePinCodes(input){

    let firstNumBorder = Number(input[0])
    let secoundNumBorder = Number(input[1])
    let thirdNumBorder = Number(input[2])


    for(let i = 1;i <= firstNumBorder;i++){
        for(let k = 1;k <= secoundNumBorder;k++){
            for(let l = 1;l <= thirdNumBorder;l++){
                if(i % 2 === 0 && l % 2 === 0 && k >= 2 && k <= 7 ){
                    if(k / k !==0 && k % 2 !== 0 || k ===2){
                    console.log(i,k,l)
                    }
                }
            }
        }
    }


}
uniquePinCodes(["3","5","5"])
