function swimmingRecord(input){
    let currentRecordInSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let distanceSwimmedInOneMeter = Number(input[2]);

    let slowedevery15mins = distanceInMeters / 15
    let slowedInSecs = Math.floor(slowedevery15mins) * 12.5
    
    let attempt = distanceInMeters * distanceSwimmedInOneMeter + slowedInSecs
    
    if(attempt < currentRecordInSecs){
        console.log(`Yes, he succeeded! The new world record is ${attempt.toFixed(2)} seconds.`)
    }else{
        let howMuchSlower = attempt - currentRecordInSecs
        console.log(`No, he failed! He was ${howMuchSlower.toFixed(2)} seconds slower.`)
    }
}
swimmingRecord(["55555.67","3017","5.03"])