var sideOne = []
sideOne[0] = "Putter";
sideOne[1] = "Mid Range";
sideOne[2] = "Fairway Driver";
sideOne[3] = "Distance Driver";
sideOne[4] = "Partner Picks";
sideOne[5] = "You Pick";


function roll() {
	var randomSide = Math.floor(Math.random()*(sideOne.length));
	document.getElementById('prandom').innerHTML = sideOne[randomSide];
	document.getElementById('rollCounter').innerHTML ++;


	var storedCount = document.getElementById('rollCounter').innerHTML;
	var storedCount_string = JSON.stringify(storedCount);
	
}



