function sumOfTwoNumbers(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let magicNumber = Number(input[2]);
  let counter = 0;
  let isFound = false;
  for (let i = startNumber; i <= endNumber; i++) {
    for (let j = startNumber; j <= endNumber; j++) {
      let sum = i + j;
      counter++;
      if (sum === magicNumber) {
        isFound = true;
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}
sumOfTwoNumbers(["88", "888", "1000"]);
