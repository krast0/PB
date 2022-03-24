function lunchBreak(input){
    let nameOfMovie = input[0]
    let lenghtOfEpisode = Number(input[1])
    let lenghtOfBreak = Number(input[2])

    let breakWithoutRest = lenghtOfBreak / 4
    let breakWithoutLunch = lenghtOfBreak / 8

    let freeTimeOfBreak = lenghtOfBreak -( breakWithoutRest + breakWithoutLunch)
    let timeOfBreakLeft = freeTimeOfBreak - lenghtOfEpisode
    let timeOfBreakNeededToWatchMovie = lenghtOfEpisode - freeTimeOfBreak
    
    if(lenghtOfEpisode <= freeTimeOfBreak){
        console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(timeOfBreakLeft)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(timeOfBreakNeededToWatchMovie)} more minutes.`)
    }
}
lunchBreak(["Naruto Shippuden","60","90"])