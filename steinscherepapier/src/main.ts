const choices: string[] = ["Rock", "Paper", "Scissors"];

let numRounds: number = 0;
let currentRound: number = 0;
let userWins: number = 0;
let computerWins: number = 0;

const roundCheckboxes = document.querySelectorAll(
  ".Rounds input[type='checkbox']"
);
const outputDiv = document.querySelector(".Output") as HTMLDivElement;
const choiceButtons = document.querySelectorAll(".Choices button");
const resetButton = document.getElementById("reset") as HTMLButtonElement;
const userScoreDisplay = document.getElementById(
  "userScore"
) as HTMLParagraphElement;
const computerScoreDisplay = document.getElementById(
  "computerScore"
) as HTMLParagraphElement;

let gameStarted: boolean = false;

//# Event Listener: Rundenanzahl
roundCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if ((checkbox as HTMLInputElement).checked) {
      numRounds = parseInt((checkbox as HTMLInputElement).value);
      roundCheckboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          (otherCheckbox as HTMLInputElement).checked = false;
        }
      });
      startGame();
    }
  });
});

//# Funktion: Spielstart
function startGame() {
  if (!gameStarted) {
    currentRound = 0;
    userWins = 0;
    computerWins = 0;
    updateScore();
    choiceButtons.forEach(
      (button) => ((button as HTMLButtonElement).disabled = false)
    );
    gameStarted = true;
    playRound();
  }
}
