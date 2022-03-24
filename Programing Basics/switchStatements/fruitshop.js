function fruitShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  let isError = false;

  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    if (fruit === "banana") {
      price = quantity * 2.5;
    } else if (fruit === "apple") {
      price = quantity * 1.2;
    } else if (fruit === "orange") {
      price = quantity * 0.85;
    } else if (fruit === "grapefruit") {
      price = quantity * 1.45;
    } else if (fruit === "kiwi") {
      price = quantity * 2.7;
    } else if (fruit === "pineapple") {
      price = quantity * 5.5;
    } else if (fruit === "grapes") {
      price = quantity * 3.85;
    } else {
      isError = true;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    if (fruit === "banana") {
      price = quantity * 2.7;
    } else if (fruit === "apple") {
      price = quantity * 1.25;
    } else if (fruit === "orange") {
      price = quantity * 0.9;
    } else if (fruit === "grapefruit") {
      price = quantity * 1.6;
    } else if (fruit === "kiwi") {
      price = quantity * 3;
    } else if (fruit === "pineapple") {
      price = quantity * 5.6;
    } else if (fruit === "grapes") {
      price = quantity * 4.2;
    } else {
      isError = true;
    }
  } else {
    isError = true;
  }

  if (isError) {
    console.log("error");
  } else {
    console.log(price.toFixed(2));
  }
}

fruitShop(["kiwi", "Sunday", "3"]);
