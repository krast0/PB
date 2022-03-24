function ticketsForCinema(input) {
  let index = 0;
  let command = input[index];

  let standardCounter = 0;
  let kidCounter = 0;
  let studentCounter = 0;
  let totalTicketsCounter = 0;

  while (command !== "Finish") {
    let nameOfMovie = command;
    index++;
    let freeSpaces = Number(input[index]);
    index++;
    let ticketType = input[index];
    let ticketCounter = 0;

    while (ticketType !== "End") {
      ticketCounter++;
      if (ticketType === "standard") {
        standardCounter++;
      } else if (ticketType === "student") {
        studentCounter++;
      } else if (ticketType === "kid") {
        kidCounter++;
      }
      if (ticketCounter >= freeSpaces) {
        break;
      }
      ticketType = input[++index];
    }
    totalTicketsCounter += ticketCounter;
    let resultSingleFilm = (ticketCounter / freeSpaces) * 100;
    console.log(`${nameOfMovie} - ${resultSingleFilm.toFixed(2)}% full.`);
    command = input[++index];
  }
  console.log(`Total tickets: ${totalTicketsCounter}`);
  console.log(
    `${((studentCounter / totalTicketsCounter) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((standardCounter / totalTicketsCounter) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidCounter / totalTicketsCounter) * 100).toFixed(2)}% kids tickets.`
  );
}
ticketsForCinema([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
