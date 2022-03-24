function housePainting(input){

    let greenPaint = 3.4;
    let redPaint = 4.3

  //prednata i zadnata strana na kushtata sa kvatrati sus strana x
    let heightOfTheHouse = Number(input[0])
    let lenghtOfSide = Number(input[1])
    let heightOfTriangleRoof = Number(input[2])

    let frontAndBackSideOfTheHouse = (heightOfTheHouse * heightOfTheHouse) * 2 - 2.4
    let sidesOfTheHouse = (lenghtOfSide * heightOfTheHouse) * 2 - (2.25 * 2)
    let sides = frontAndBackSideOfTheHouse + sidesOfTheHouse

    let greenPaintLiters =  sides / greenPaint

    let RoofSides = heightOfTheHouse * lenghtOfSide * 2
    let TriangleRoof = ((heightOfTheHouse * heightOfTriangleRoof) / 2)
    let bothTriangleSides = TriangleRoof * 2
    let Roof = RoofSides + bothTriangleSides

    let redPaintLiters = Roof / redPaint



    console.log(greenPaintLiters.toFixed(2))
    console.log(redPaintLiters.toFixed(2))

}
housePainting(["6","10","5.2"])