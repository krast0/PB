function areaOfFigures(input){
    let figure = input[0]

    if(figure === "square"){
        let a = Number(input[1])
        let AreaOfSquare = a * a
        console.log(AreaOfSquare.toFixed(3))
    }if(figure === "rectangle"){
        let a = Number(input[1])
        let b = Number(input[2])
        let AreaOfRectangle = a * b
        console.log(AreaOfRectangle.toFixed(3))
    }if(figure === "circle"){
        let a = Number(input[1])
        let AreaofCircle = Math.PI * (a*a)
        console.log(AreaofCircle.toFixed(3))
    }if(figure === "triangle"){
        let a = Number(input[1])
        let h = Number(input[2])
        let AreaOfTriangle = a * h / 2
        console.log(AreaOfTriangle.toFixed(3))

    }

}
areaOfFigures(["triangle","5","8"])