function specialNumbers(input) {
  let number = Number(input[0]);
    let result = ""
  for (let i = 1; i <= 9; i++) {
    for (let k = 1; k <= 9; k++) {
      for (let j = 1; j <= 9; j++) {
        for (let m = 1; m <= 9; m++) {
          if (
            number % i === 0 &&
            number % k === 0 &&
            number % j === 0 &&
            number % m === 0
          ) {
            result += `${i}${k}${j}${m} `

          }
        }
      }
    }
  }
  console.log(result)
}
specialNumbers(["3"]);
