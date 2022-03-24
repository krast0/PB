function liceNaTriugulnik(input){
    
    let side = Number(input[0]);
    let visochina = Number(input[1]);


    let otgovor = side * visochina / 2
    console.log(otgovor.toFixed(2))
}
liceNaTriugulnik(['234','20.66'])