
let readlineSync = require('readline-sync');

console.log("Welcome to Heads or Tails!")

function getUserChoice(values) {

userChoice = readlineSync.question('heads or tails');

while(values.includes(userChoice)) {
		console.log(`${userChoice} is not a valid answer.`)
		userChoice = readlineSync.question('Choose between heads or tails: ');
	}

	console.log(userChoice);
	return userChoice;
}

function getComputerChoice(values) {

	let index = Math.floor(Math.random() * 2);
	let computerChoice = values[index];

	return computerChoice;
}



function start() {
	let choices = ['head', 'tail',];
	let score = {user: 0, computer: 0};
	let userChoice;
	let computerChoice;
	let continuePlaying = true;

while(continuePlaying === true) {


		userChoice = getUserChoice(choices);
		computerChoice = getComputerChoice(choices);
console.log(userChoice, computerChoice);

	if(userChoice === computerChoice) {
			console.log("AW better luck next time!");
		} else if (userChoice === 'tails' && computerChoice === 'heads' || userChoice === 'heads' && computerChoice === 'tails') {
			console.log("User Won, Congrats!!");
			score.user++;
		} else {
			console.log("Computer won, you lost!");
			score.computer++;
		}

console.log(`User has ${score.user} points, computer has ${score.computer} points`);


		continuePlaying = readlineSync.question('Do you want to play again? ((Y)es/(N)o)');

		if(continuePlaying.toLowerCase() !== 'y') {
			continuePlaying = false;
		} else {
			continuePlaying = true;
		}
	}
	console.log("Thanks for playing, come back soon!");
}

start();
