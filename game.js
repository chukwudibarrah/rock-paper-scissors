// user choices
let choices = ["r", "p", "s"];

// to get randomised computer input
let computerInput = Math.floor(Math.random() * choices.length);
let randomChoice = choices[computerInput]; //convert random number to r, p or s

// set the scores to zero as start
let wins = 0;
let loses = 0;
let ties = 0;

// establish game rules
let userInput = prompt("Enter r (for rock), p (for paper) or s (for scissors):"); // create user input
alert("You entered: " + userInput);
alert("The computer entered: " + randomChoice)

if ((userInput === "r" && randomChoice === "s") || (userInput === "s" && randomChoice === "p") || (userInput === "p" && randomChoice === "r")) {
      wins++
      alert("You won! :)")
      alert("Current scores - Wins:", wins++)
} else if ((userInput === "r" && randomChoice === "p") || (userInput === "s" && randomChoice === "r") || (userInput === "p" && randomChoice === "s")) {
  loses++
  alert("You lost! :(")
  alert("Current scores - Loses: " + loses++)
} else if (userInput === randomChoice) {
  ties++
  alert("You tied! :|")
  alert("Current scores - Ties: " + ties++)
} else {
  alert("Your selection is not allowed. Please try again.")
}

let totalScores = [wins, loses, ties]
for (let i = 0; i < 11; i++) {
    alert("Total scores:", "Wins:", wins, "Loses:", loses, "Ties:", ties)  
}