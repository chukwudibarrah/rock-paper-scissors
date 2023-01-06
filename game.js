// user choices
let choices = ["r", "p", "s"];

// to get randomised computer input
let computerInput = Math.floor(Math.random() * choices.length);
let randomChoice = choices[computerInput]; //convert random number to r, p or s

// set the scores to zero as start
let wins = 0;
let loses = 0;
let ties = 0;

do {
// establish game rules
let userInput = prompt("Enter r (for rock), p (for paper) or s (for scissors):"); // create user input
alert("You entered: " + userInput);
alert("The computer entered: " + randomChoice)

if ((userInput === "r" && randomChoice === "s") || (userInput === "s" && randomChoice === "p") || (userInput === "p" && randomChoice === "r")) {
      wins++
      alert("You won! :)")
      alert(wins++)
} else if ((userInput === "r" && randomChoice === "p") || (userInput === "s" && randomChoice === "r") || (userInput === "p" && randomChoice === "s")) {
  loses++
  alert("You lost! :(")
  alert(loses++)
} else if (userInput === randomChoice) {
  ties++
  alert("You tied! :|")
  alert(ties++)
} else {
  alert("Your selection is not allowed. Please try again.")
}

} while (wins < 11);
alert("Final scores:")
