function demo(input){

let territoryBeingGreened = Number(input[0])

let priceForGreening = territoryBeingGreened * 7.61
let percentOff = 18 * 0.01
let discount = priceForGreening * percentOff
let finalprice = priceForGreening - discount


console.log(`The final price is: ${finalprice} lv.`)
console.log(`The discount is:${discount}`)


}
demo(["550"])