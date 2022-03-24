function demo(input) {
    
  let penPacks = Number(input[0]);
  let markerPacks = Number(input[1]);
  let preparats = Number(input[2]);
  let Discount = Number(input[3]) / 100;

  let penSum = penPacks * 5.8;
  let markerSum = markerPacks * 7.2;
  let preparatsSum = preparats * 1.2;

  let allMaterialsSum = penSum + markerSum + preparatsSum;
  let sumDiscount = allMaterialsSum * Discount;
  let finalResult = allMaterialsSum - sumDiscount;

  console.log(sumDiscount);
}
demo(["2", "3", "4", "25"]);
