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

if (userInput === "r" || userInput === "p" || userInput === "s") {
  alert("You entered: " + userInput);
  alert("The computer entered: " + randomChoice)
} else {
  alert("Your selection is not allowed. Please try again.")
}

if ((userInput === "r" && randomChoice === "s") || (userInput === "s" && randomChoice === "p") || (userInput === "p" && randomChoice === "r")) {
      wins++
      alert("You won! :)")
      alert(wins++)
      console.log("Current scores - Wins:", wins, "Loses:", loses, "Ties:", ties);
} else if ((userInput === "r" && randomChoice === "p") || (userInput === "s" && randomChoice === "r") || (userInput === "p" && randomChoice === "s")) {
  loses++
  alert("You lost! :(")
  alert(loses++)
  console.log("Current scores - Wins:", wins, "Loses:", loses, "Ties:", ties);
} else if (userInput === randomChoice) {
  ties++
  alert("You tied! :|")
  alert(ties++)
  console.log("Current scores - Wins:", wins, "Loses:", loses, "Ties:", ties);
} 

} while ((wins+loses+ties) < 11);
console.log("Final scores - Wins:", wins, "Loses:", loses, "Ties:", ties);
