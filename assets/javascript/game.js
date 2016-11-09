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
$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");

// variable for game start begins true; buttons can be clicked
var gameStart = true;

var wins = 0;
// shows user wins text in its div
$("#wins").html("<h3>WINS: " + wins + "</h3>");

var losses = 0;
// shows user losses text in its div
$("#losses").html("<h3>LOSSES: " + losses + "</h3>");


// *generates random number for targetNumber between 19 and 120
var targetNumber = Math.floor((Math.random() * 100) + 1);
$("#targetNumber").html("<h3>TARGET NUMBER: " + targetNumber + "</h3>");
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

// // crystal click function
// function crystalClick () {

// }

// game begins
function beginGame() {
if (gameStart === true) {
	// when crystal1 is clicked, things happen
	$("#crystal1").on("click", function() {
		// the value of the crystal is added to the userNumber
		userNumber = userNumber + crystal1;
		console.log("User number is " + userNumber);
		// updates wins counter
		$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");
			// if the user number is less than the target number, they can continue
			if (userNumber < targetNumber) {
				// the gameStart is still true; they can continue playing
				gameStart = true;
			// if the user number is equal to the target number, they have won
			} 
			else if (userNumber === targetNumber) {
				// add one point to the win counter
				wins++;
				// updates wins counter
				$("#wins").html("<h3>WINS: " + wins + "</h3>");
				console.log("Win count is " + wins);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>PERFECT! CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			// if the user number is greater than the target number
			} else {
				// adds one point to the losses counter
				losses++;
				$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
				console.log("Losses count is " + losses);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>YOU WENT OVER. CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			}

	});
	// when crystal2 is clicked, things happen
	$("#crystal2").on("click", function() {
		// the value of the crystal is added to the userNumber
		userNumber = userNumber + crystal2;
		console.log("User number is " + userNumber);
		// updates wins counter
		$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");
			// if the user number is less than the target number, they can continue
			if (userNumber < targetNumber) {
				// the gameStart is still true; they can continue playing
				gameStart = true;
			// if the user number is equal to the target number, they have won
			} 
			else if (userNumber === targetNumber) {
				// add one point to the win counter
				wins++;
				// updates wins counter
				$("#wins").html("<h3>WINS: " + wins + "</h3>");
				console.log("Win count is " + wins);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>PERFECT! CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			// if the user number is greater than the target number
			} else {
				// adds one point to the losses counter
				losses++;
				$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
				console.log("Losses count is " + losses);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>YOU WENT OVER. CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			}

	});

	// when crystal3 is clicked, things happen
	$("#crystal3").on("click", function() {
		// the value of the crystal is added to the userNumber
		userNumber = userNumber + crystal3;
		console.log("User number is " + userNumber);
		// updates wins counter
		$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");
			// if the user number is less than the target number, they can continue
			if (userNumber < targetNumber) {
				// the gameStart is still true; they can continue playing
				gameStart = true;
			// if the user number is equal to the target number, they have won
			} 
			else if (userNumber === targetNumber) {
				// add one point to the win counter
				wins++;
				// updates wins counter
				$("#wins").html("<h3>WINS: " + wins + "</h3>");
				console.log("Win count is " + wins);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>PERFECT! CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			// if the user number is greater than the target number
			} else {
				// adds one point to the losses counter
				losses++;
				$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
				console.log("Losses count is " + losses);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>YOU WENT OVER. CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			}

	});

	// when crystal4 is clicked, things happen
	$("#crystal4").on("click", function() {
		// the value of the crystal is added to the userNumber
		userNumber = userNumber + crystal4;
		console.log("User number is " + userNumber);
		// updates wins counter
		$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");
			// if the user number is less than the target number, they can continue
			if (userNumber < targetNumber) {
				// the gameStart is still true; they can continue playing
				gameStart = true;
			// if the user number is equal to the target number, they have won
			} 
			else if (userNumber === targetNumber) {
				// add one point to the win counter
				wins++;
				// updates wins counter
				$("#wins").html("<h3>WINS: " + wins + "</h3>");
				console.log("Win count is " + wins);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>PERFECT! CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			// if the user number is greater than the target number
			} else {
				// adds one point to the losses counter
				losses++;
				$("#losses").html("<h3>LOSSES: " + losses + "</h3>");
				console.log("Losses count is " + losses);
				// alerts are tacky. this alerts the user to what just happened.
				$("#gameStatus").html("<h2>YOU WENT OVER. CLICK HERE TO TRY AGAIN!</h2>");
				// game start is now false; the game is over.
				gameStart = false;
			}

	});

}
}

//initialize game on first load
beginGame(); 

// function to restart game
function restartGame() {
	// removes game status text
	$("#gameStatus").text("");	
	// generates a new random target number
	targetNumber = Math.floor((Math.random() * 100) + 1);
	$("#targetNumber").html("<h3>TARGET NUMBER: " + targetNumber +"</h3>");
	// resets userNumber to 0
	userNumber = 0;
	$("#yourNumber").html("<h3>YOUR NUMBER: " + userNumber + "</h3>");
	console.log("Random target number value is " + targetNumber);
	// generate random number for crystal1 between 1 and 12
	crystal1 = Math.floor((Math.random() * 12) + 1);
	console.log("Crystal 1 value is " + crystal1);
	// generate random number for crystal2 between 1 and 12
	crystal2 = Math.floor((Math.random() * 12) + 1);
	console.log("Crystal 2 value is " + crystal2);
	// generate random number for crystal3 between 1 and 12
	crystal3 = Math.floor((Math.random() * 12) + 1);
	console.log("Crystal 3 value is " + crystal3);
	// generate random number for crystal4 between 1 and 12
	crystal4 = Math.floor((Math.random() * 12) + 1);
	console.log("Crystal 4 value is " + crystal4);
	// changes game status to true
	gameStatus = true;

	beginGame();
}


// on click, runs function to reset the game
$("#gameStatus").on("click", function() {
		restartGame();
		
});



