/*
Pseudocode
- Create array that stores r, p, s
- Create a prompt that takes in user selection of one from r, p, s
- Create a variable that stores a random integer input 1-3
- Create an if else tree that equates 0, 1, 2 to r, p, s 
- Create an if else tree to compare userInput & compChoice
*/

// --- GAME CODE --- //
// Opening message
alert(`You have 10 rounds after which the game will refresh`);

// Setting up choices array
let choices = ["r", "p", "s"];

// Setting tally
let tie = 0;
let win = 0;
let loss = 0;
let invalid = 0;
let round = 0;

// Set outcomes
for (let i = 0; i < 10; i++) {
	// declaring round number
	round = i + 1;

	// Taking user input
	let userInput = prompt(
		`Round ${round}\n \nPlease enter one of the following: r, p or s \n(Note: r = rock, p = paper, s = scissors)`
	);

	// Generating a random computer input (0-2)
	let compInput = Math.floor(Math.random() * 3);
	// expected output: 0, 1 or 2

	// choices element is the randomly generated integer (0-2)
	let compChoice = choices[compInput];
	console.log();

	if (userInput && (userInput == "r" || userInput == "p" || userInput == "s")) {
		alert(`You have chosen: ${userInput}`);
		alert(`Computer has chosen: ${compChoice}`);

		if (compChoice == userInput) {
			tie++;
		} else if (
			(userInput == "r" && compChoice == "s") ||
			(userInput == "s" && compChoice == "p") ||
			(userInput == "p" && compChoice == "r")
		) {
			win++;
		} else {
			loss++;
		}
	} else {
		invalid++;
		alert(`Invalid Selection`);
	}
}

// Giving final tally
alert(
	`Final Tally! \n\nWins: ${win} \nLosses: ${loss} \nTies: ${tie} \nInvalid: ${invalid}`
);

// User's game outcome declaration
if (win > loss) {
	alert(`You've Won!`);
} else if (win < loss) {
	alert(`You've Lost!`);
} else if (win === loss) {
	alert(`You've Tied!`);
}

// Refresh the game
location.reload();
