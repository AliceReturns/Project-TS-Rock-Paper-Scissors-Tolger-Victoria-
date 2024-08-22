const roundsOfGame = document.getElementById("Rounds") as HTMLDivElement;
const fiveRoundsBtn = document.getElementById("fiveRounds") as HTMLInputElement;
const tenRoundsBtn = document.getElementById("tenRounds") as HTMLInputElement;
const fifteenRoundsBtn = document.getElementById(
  "fifteenRounds"
) as HTMLInputElement;
const twentyRoundsBtn = document.getElementById(
  "twentyRounds"
) as HTMLInputElement;
const score = document.getElementById("Output") as HTMLDivElement;
const choices = document.getElementById("Choices") as HTMLDivElement;
const rockBtn = document.getElementById("Rock") as HTMLInputElement;
const scissorsBtn = document.getElementById("Scissors") as HTMLInputElement;
const paperBtn = document.getElementById("Paper") as HTMLInputElement;
const resetBtn = document.getElementById("Reset") as HTMLButtonElement;

const setGameRounds = (): void => {
  let selectedRounds: number | null = null;

  if (fiveRoundsBtn.checked) {
    selectedRounds = 5;
    console.log("5 Runden");
  } else if (tenRoundsBtn.checked) {
    selectedRounds = 10;
    console.log("10 Runden");
  } else if (fifteenRoundsBtn.checked) {
    selectedRounds = 15;
    console.log("15 Runden");
  } else if (twentyRoundsBtn.checked) {
    selectedRounds = 20;
    console.log("20 Runden");
  }

  if (selectedRounds !== null) {
    console.log(`Spiel wird über ${selectedRounds} Runden gespielt.`);
  }
};

fiveRoundsBtn.addEventListener("change", setGameRounds);
tenRoundsBtn.addEventListener("change", setGameRounds);
fifteenRoundsBtn.addEventListener("change", setGameRounds);
twentyRoundsBtn.addEventListener("change", setGameRounds);

// new
