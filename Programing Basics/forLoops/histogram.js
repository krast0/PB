function histogram(input){
    let numberCount = Number(input[0]);
    let p1=0
    let p2=0
    let p3=0
    let p4=0
    let p5=0
    let result = 0
    
    for(let i = 1;i <= numberCount;i++){
        let num = (input[i])
        
        if([num] < 200){
            p1++
        }
        else if([num] < 400){
            p2++
        }
        else if([num] < 600){
            p3++
        }
        else if([num] < 800){
            p4++
        }
        else if([num] >= 800){
            p5++
        }
    }

    console.log(`${result = (p1 / numberCount * 100).toFixed(2)}%`)
    console.log(`${result = (p2 / numberCount * 100).toFixed(2)}%`)
    console.log(`${result = (p3 / numberCount * 100).toFixed(2)}%`)
    console.log(`${result = (p4 / numberCount * 100).toFixed(2)}%`)
    console.log(`${result = (p5 / numberCount * 100).toFixed(2)}%`)
}
histogram(["10","50","24","99","32","601","430","869","900","356","103"])