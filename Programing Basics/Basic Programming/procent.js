function percent(input){

    let productCena = Number(input[0])
    let kolichestvo = Number(input[1])
    cenaObshto = productCena * kolichestvo
    cenaObshtoDDS = cenaObshto * 1.2
    edinichnacenaObshtoDDS = cenaObshtoDDS / kolichestvo


    
    

    console.log(`Общата сума без ДДС е: ${cenaObshto.toFixed(2)}!`)
    console.log(`Общата сума с ДДС е: ${cenaObshtoDDS.toFixed(2)}!`)
    console.log(`Единичната сума с ДДС е: ${edinichnacenaObshtoDDS.toFixed(2)}!`)


}
percent(["3.25","20"])