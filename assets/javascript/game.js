// randomly generated number
// each crystal (4) represents a number that is hidden (has a value)
// each time you click it, it adds to your total score
// the only way to see the value of the crystal is by clicking it
// match your score to the random number
// when the match happens, you get a win point
// when you lose you get a minus point
// the game restarts and the target number and the crystal value numbers change
// random number to match is between 19 and 120
// crystal numbers are between 1 and 12


// create variables
// var crystal1
// var crystal2
// var crystal3 
// var crystal4 
// var targetNumber 
var userNumber = 0; 
// shows user number text in its div
$("#yourNumber").addClass("h2");
$("#yourNumber").text("YOUR NUMBER: " + userNumber);

// variable for game start begins true; buttons can be clicked
var gameStart = true

var wins = 0;
// shows user wins text in its div
$("#wins").addClass("h2");
$("#wins").text("WINS: " + wins);

var losses = 0;
// shows user losses text in its div
$("#losses").addClass("h2");
$("#losses").text("LOSSES: " + losses);


// *generate random number for targetNumber between 19 and 120
var targetNumber = Math.floor((Math.random() * 100) + 1);
$("#targetNumber").addClass("h2");
$("#targetNumber").text("TARGET NUMBER: " + targetNumber);
console.log("Random target number value is " + targetNumber);

// generate random number for crystal1 between 1 and 12
var crystal1 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 1 value is " + crystal1);

// generate random number for crystal2 between 1 and 12
var crystal2 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 2 value is " + crystal2);

// generate random number for crystal3 between 1 and 12
var crystal3 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 3 value is " + crystal3);

// generate random number for crystal4 between 1 and 12
var crystal4 = Math.floor((Math.random() * 12) + 1);
console.log("Crystal 4 value is " + crystal4);

// game begins
if (gameStart = true) {
	// when crystal1 is clicked, things happen
	$("#crystal1").on("click", function() {
		// the value of the crystal is added to the userNumber
		userNumber = userNumber + crystal1;
		console.log("User number is " + userNumber);
			// if the user number is less than the target number, they can continue
			if (userNumber < targetNumber) {
				// the gameStart is still true; they can continue playing
				gameStart = true;
				console.log("Game start is " + gameStart);
			// if the user number is equal to the target number, they have won
			} else if (userNumber === targetNumber) {
				// add one point to the win counter
				wins++;
				// makes the text look good
				$("#wins").addClass("h2");
				// updates wins counter
				$("#wins").text("WINS: " + wins);
				console.log("Win count is " + wins);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").addClass("h2");
				$("#gameStatus").text("NICE JOB! YOU WON!");
				// game start is now false; the game is over.
				gameStart = false;
				console.log("Win! Game start is " + gameStart);
			// if the user number is greater than the target number
			} else {
				// adds one point to the losses counter
				losses++;
				// makes the text look good
				$("#losses").addClass("h2");
				$("#losses").text("LOSSES: " + losses);
				console.log("Win count is " + losses);
				$("#gameStatus").addClass("h2");
				$("#gameStatus").text("BUMMER, DUDE. TRY AGAIN!");
				gameStart = false;
				console.log("Lose! Game start is " + gameStart);
			}

	});

}

// if the image is clicked 
	// is it less than the target number?
		// allowed to continue clicking that image
	// is it equal to the target number?
		// win
	// is it greater than the target number?
		// loss

// after win or loss, how can the game refresh?

