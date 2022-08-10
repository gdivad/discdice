var sideOne = []
sideOne[0] = "Putter";
sideOne[1] = "Mid Range";
sideOne[2] = "Fairway Driver";
sideOne[3] = "Distance Driver";
sideOne[4] = "Partner Picks";
sideOne[5] = "You Pick";


var sideTwo = []
sideTwo[0] = "Forehand";
sideTwo[1] = "Backhand";
sideTwo[2] = "Hammer";
sideTwo[3] = "Roller";
sideTwo[4] = "Weak Hand";
sideTwo[5] = "You Pick";

function roll() {
	var randomSide = Math.floor(Math.random()*(sideOne.length));
	document.getElementById('prandom').innerHTML = sideOne[randomSide];

	document.getElementById('rollCounter').innerHTML ++;


	//var storedCount = document.getElementById('rollCounter').innerHTML;
	//var storedCount_string = JSON.stringify(storedCount);
	
}

function rollTwo() {
	var randomSideTwo = Math.floor(Math.random()*(sideTwo.length));
	document.getElementById('randomThrow').innerHTML = sideTwo[randomSideTwo];
	//document.getElementById('rollCounter').innerHTML ++;
}


