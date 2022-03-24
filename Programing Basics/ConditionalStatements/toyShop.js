function toyShop(input) {
  let tripPrice = Number(input[0]);

  let puzzlezCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let bearCounts = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let moneyFromPuzzlez = puzzlezCount * 2.6;
  let moneyfromDolls = dollsCount * 3;
  let moneyFromBears = bearCounts * 4.1;
  let monetFromMinions = minionsCount * 8.2;
  let moneyFromTrucks = trucksCount * 2;

  let moneyFromAllToys =
    moneyFromPuzzlez +
    moneyfromDolls +
    moneyFromBears +
    monetFromMinions +
    moneyFromTrucks;
  let AllToys =
    dollsCount + puzzlezCount + bearCounts + minionsCount + trucksCount;
  if (AllToys >= 50) {
    moneyFromAllToys *= 0.75;
  }

  let totalMoneyAfterRent = moneyFromAllToys * 0.9;

  if (totalMoneyAfterRent >= tripPrice) {
    console.log(
      `Yes! ${(totalMoneyAfterRent - tripPrice).toFixed(2)} lv left.`
    );
  } else {
    console.log(
      `Not enough money! ${(tripPrice - totalMoneyAfterRent).toFixed(
        2
      )} lv needed.`
    );
  }
}
toyShop(["320", "100", "25", "30", "5", "10"]);
