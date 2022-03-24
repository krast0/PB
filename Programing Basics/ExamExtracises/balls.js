function balls(input){

let index = 0
let n = input[index]
index++
let pointCounter = 0
let redballs =0
let orangeballs = 0
let yellowballs= 0
let whiteballs= 0
let blackballs= 0
let falseballs = 0


while(index <= n){
    let color = input[index]
    index ++
    if(color === "red"){
        redballs ++ 
        pointCounter += 5
    }else if(color === "orange"){
        orangeballs ++
        pointCounter += 10
    }else if(color === "yellow"){
        yellowballs++
        pointCounter += 15
    }else if(color === "white"){
        whiteballs++
        pointCounter += 20
    }else if(color === "black"){
        blackballs++
        pointCounter /= 2
    }else{
        falseballs++
        pointCounter = pointCounter
    }
}
console.log(`Total points: ${Math.floor(pointCounter)}\nRed balls: ${redballs}\nOrange balls: ${orangeballs}\nYellow balls: ${yellowballs}\nWhite balls: ${whiteballs}\nOther colors picked: ${falseballs}\nDivides from black balls: ${blackballs}`)

}
balls(["5","red","red","bddlack","pinddk","wow"])