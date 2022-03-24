function time(input){
    let hour = Number(input[0]);
    let mins = Number(input[1]) + 15;

    if (mins > 59){
        hour = hour + 1;
        mins-=60;
    }
    if(hour > 23){
        hour -= 24
    }
    if (mins < 10){
    console.log(`${hour}:0${mins}`)
    }else{
        console.log((`${hour}:${mins}`))
    }
}
time(["20","50"])