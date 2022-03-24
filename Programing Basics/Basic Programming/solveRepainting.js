function demo(input) {
  let nailon = Number(input[0]);
  let paint = Number(input[1]);
  let paintLiquid = Number(input[2]);
  let hours = Number(input[3]);

  let nailonSum = (nailon + 2) * 1.5;
  let paintSum = (paint + paint * 0.1) * 14.5;
  let paintLiquidSum = paintLiquid * 5;
  let sumForBags = 0.4;

  let overallMaterialSum = nailonSum + paintSum + paintLiquidSum + sumForBags;
  let sumForWorkers = overallMaterialSum * 0.3 * hours;
  let fullPrice = overallMaterialSum + sumForWorkers;

  console.log(fullPrice);
}
demo(["100", "11", "10", "8"]);
