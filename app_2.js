'use strict';

function hello () {
	var greeting = prompt( 'Hey there. Let\'s play a little quick guessing game. But first, what\'s your name?' );
	console.log ( 'Their name is: ' + greeting );

	alert( 'Well, it\'s nice to meet you ' + greeting + '. I\'m also going to tally your correct answers and show you at the end. Cool?' );
	alert( 'Sweet, let\'s start!' );
}

var guessCount = 0;
var score = 0;

function yesNo () {
	var europe = prompt( 'Have I ever been to Europe?' ).toLowerCase();
	if ( europe === 'yes' || europe === 'y' ) {
		alert( 'Na, still haven\'t been.' );
	} else {
		alert( 'You\'re right, but I really want to go though.' ); 
		score = score + 1;
	}
		console.log( europe );	
}	

function juggle () {
	var canJuggle = prompt( 'Can I juggle?' ).toLowerCase();
	if ( canJuggle === 'yes' || canJuggle === 'y' ) {
		alert( 'Na, it\'s a muppet\'s passtime.' );
	} else {
		alert( 'So true, I can\'t.' );
		 score = score + 1;
	}
		
	console.log( canJuggle );
}

function joint () {
	var disJoint = prompt( 'Can I dislocate a joint?' ).toLowerCase();
	if ( disJoint === 'yes' || disJoint === 'y' ) {
		alert( 'No, that\'s gross!' );
	} else {
		alert( 'Yea, I like my joints the way they are.' );
		return score = score + 1;
	}
	console.log(disJoint);
}

function pets () {
	var dogs = prompt( 'Do I like dogs?' ).toUpperCase();
	if ( dogs === 'YES' || dogs === 'Y' ) {
		alert( 'Yea, they are the best.' );
		return score = score + 1;
	} else {
		alert( 'Come on, who doesn\'t like dogs in this town.' );
	}
	console.log(dogs);
}

function dessert () {
	var iceCream = prompt( 'Do I like icecream?' ).toUpperCase();
	if ( iceCream === 'YES' || iceCream === 'Y' ) {
		alert( 'Yea, I scream for icecream.' );
		return score = score + 1;
	} else {
		alert( 'Na, I\'m a sweet-tooth.' );
	}
console.log(iceCream); 
} 

											//guessing-game
function carTrouble() {
	var myCar = 'ford';
	do {
		var guess = prompt( 'What kind of car do I drive?' ).toLowerCase();
		if( myCar !== guess ) {
			alert( 'Nope, not that kind of car.' );
		} else {
			alert ( 'That\'s my ride!' );
			return score = score + 1;
		}
		guessCount ++;
	} while( myCar !== guess && guessCount < 3 );
	console.log ( 'My car is a ' + myCar );
}

function foods() {
	var favFood = 'sushi';
	do {
		var guess = prompt( 'What is my favourite food?' ).toLowerCase();
		if( favFood !== guess ) {
			alert( 'Na, I don\'t care for that.' );
		} else {
			alert( 'Yea, love that stuff.' );
			return score = score + 1;
		} 
		guessCount ++;
	} while( favFood !== guess && guessCount < 3 );
	console.log( 'My favourite food is ' + favFood );
}

function sports() {
	var favSport = 'soccer';
	do {
		var guess = prompt( 'What is my favourite sport?' ).toLowerCase();
		if( favSport !== guess ) {
			alert( 'Nope, not my absolute favourite. Try again.' );
		} else {
			alert( 'Yep, love the game!' );
			return score = score + 1;
		}	 
		guessCount ++;
	} while( favSport !== guess && guessCount < 3 );
	console.log( 'My favourite sport is ' + favSport );
}

function midWest() {
var lastState = 'illinois';
	do {
		var guess = prompt( 'What was the last state I visited?' );
		if(lastState !== guess) {
			alert( 'No, not that one.' )
		} else {
			alert( 'That\'s the one. Chicago is nuts.' );
			return score = score + 1;
		}
		guessCount ++;
	} while(lastState !== guess && guessCount < 3);
	console.log( 'Last state I visited was ' + lastState ); 
}

function beenThere() {
	for (var i = 0; i < 4; i++) {
		var visitedStates = 16;
		var guess = parseInt(prompt( 'How many states have I visited?' ));
		if ( guess > 30 ) {
			alert( 'Way too many!' );
		} else if ( guess > 17 ) {
			alert( 'Too many.' );
		} else if ( guess === 16 ) {
			alert( 'Nailed it! Wyoming has been the prettiest.' );
			return score = score + 1;
		} else {
			alert( 'Too few.' );
		} 
		guessCount ++;
	}
	console.log( 'I\'ve visited ' + visitedStates + ' states.' );
}
			

function beenThereCountry() {
	var visitedCountry = [ 'india', 'canada', 'nepal', 'nicaragua', 'laos' ];
	do {
		var guess = prompt( 'What countries have I visited?' ).toLowerCase();
		if ( visitedCountry.indexOf ( guess ) !== -1 ) {
			alert( 'Been there!' );
			return score = score + 1;
		} else {
			alert( 'Nope, haven\'t been there yet.' );
		}
	} while ( !visitedCountry.includes ( guess ) && guessCount < 3 );
	console.log( visitedCountry );
}
			

function yourDone () {
	alert( 'Cool, you\'re all done. Your score was ' + score + '.' );
}


hello();
yesNo();
juggle();
joint();
pets();
dessert();

carTrouble();
foods();
sports();
midWest();
beenThere();
beenThereCountry();
yourDone();
