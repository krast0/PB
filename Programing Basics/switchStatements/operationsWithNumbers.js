function operationWithNumbers(input) {
  let number1 = Number(input[0]);
  let number2 = Number(input[1]);
  let operator = input[2];
  let result = 0;
  let oddOreven = false;
  let buffer = "";

  if (operator === "+" || operator === "-" || operator === "*") {
    if (operator === "+") {
      result = number1 + number2;
    } else if (operator === "-") {
      result = number1 - number2;
    } else if (operator === "*") {
      result = number1 * number2;
    }
    if (result % 2 === 0) {
      oddOreven = true;
    } else {
      oddOreven = false;
    }

    if (oddOreven === true) {
      buffer = "even";
    } else {
      buffer = "odd";
    }
    console.log(`${number1} ${operator} ${number2} = ${result} - ${buffer}`);
  } else if (operator === "/") {
    if (number1 === 0 || number2 === 0) {
      console.log(`Cannot divide ${number1} by zero`);
    } else {
      result = number1 / number2;
      console.log(`${number1} ${operator} ${number2} = ${result.toFixed(2)}`);
    }
  } else if (operator === "%") {
    if (number1 === 0 || number2 === 0) {
      console.log(`Cannot divide ${number1} by zero`);
    } else {
      result = number1 % number2;
      console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
  }
}

operationWithNumbers(["10", "0", "%"]);
