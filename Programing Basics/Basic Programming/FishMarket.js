function fishMarket(input){

    let priceOfSkumriq = Number(input[0]);
    let priceOfCaca = Number(input[1]);
    let kilogramsOfPalamud = Number(input[2]);
    let kilogramsOfSafrid = Number(input[3]);
    let kilogramsOfMidi = Number(input[4]);

    let palamud = priceOfSkumriq * 1.6
    let safrid = priceOfCaca * 1.8
    let midi = 7.50

    let priceOfPalamud = palamud * kilogramsOfPalamud

    let priceOfSafrid = safrid * kilogramsOfSafrid

    let priceOfMidi = midi * kilogramsOfMidi

    let sum = priceOfPalamud + priceOfSafrid + priceOfMidi




    console.log(sum.toFixed(2))



}
fishMarket(["6.90","4.20","1.5","2.5","1"])