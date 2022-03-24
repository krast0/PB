function commision(input){
    let city = input[0]
    let selling = Number(input[1])
    let commisions = 0
    let isError = false

    if(city === "Sofia"){
        if(selling >= 0 && selling <= 500){
        commisions = selling * 0.05
        }else if(selling > 500 && selling <= 1000){
            commisions = selling * 0.07
        }else if(selling > 1000 && selling <= 10000){
            commisions = selling * 0.08
        }else if(selling > 10000){
            commisions = selling * 0.12
        }else {
            isError = true
        }
    }else if(city === "Varna"){
        if(selling >= 0 && selling <= 500){
        commisions = selling * 0.045
        }else if(selling > 500 && selling <= 1000){
            commisions = selling * 0.075
        }else if(selling > 1000 && selling <= 10000){
            commisions = selling * 0.10
        }else if(selling > 10000){
            commisions = selling * 0.13
        }else {
            isError = true
        }
    }else if(city === "Plovdiv"){
        if(selling >= 0 && selling <= 500){
        commisions = selling * 0.055
        }else if(selling > 500 && selling <= 1000){
            commisions = selling * 0.08
        }else if(selling > 1000 && selling <= 10000){
             commisions = selling * 0.12
        }else if(selling > 10000){
             commisions = selling * 0.145
        }else{
            isError = true
        }
    }else {
        isError = true
    }

    if(isError){
        console.log("error")
    }else{
    console.log(commisions.toFixed(2))
    }


}
commision(["Varna","3874.50"])