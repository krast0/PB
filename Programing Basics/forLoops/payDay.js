function payDay(input) {
  let openPages = Number(input[0]);
  let salary = Number(input[1]);
  let inputL = input.length

  for (let i = 2; i <= inputL; i++) {
    if (input[i] === "Facebook") {
      salary -= 150;
    } if (input[i] === "Instagram") {
      salary -= 100;
    } if (input[i] === "Reddit") {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary.toFixed(0));
  }
}
payDay(["5", "500", "Facebook","Reddit","Github.com", "Stackoverflow.com", "softuni.bg"]);
