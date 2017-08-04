'use strict';
alert('Hello');
var score = 0;

function yesNo () {
var europe = prompt('Have I ever been to Europe?').toLowerCase();
		if (europe === 'yes' || europe === 'y') {
			alert('Na, still haven\'t been.');
		} else {
			alert('You\'re right, but I really want to go though.');
		score = score + 1;
		}
		console.log(europe);
}	

function juggle () {
	var canJuggle = prompt('Can I juggle?').toLowerCase();
	if (canJuggle === 'yes' || canJuggle === 'y') {
		alert('Na, it\'s a muppet\'s passtime.');
	} else {
		alert('So true, I can\'t.');
		score = score + 1;
	}
	console.log(canJuggle);
}


function joint () {
var disJoint = prompt('Can I dislocate a joint?').toLowerCase();
if (disJoint === 'yes' || disJoint === 'y') {
	alert('No, that\'s gross!');
} else {
	alert('Yea, I like my joints the way they are.');
	score = score + 1;
}
console.log(disJoint);
}

function pets () {
	var dogs = prompt('Do I like dogs?').toUpperCase();
	if (dogs === 'YES' || dogs === 'Y') {
		alert('Yea, they are the best.');
		score = score + 1;
	} else {
		alert('Come on, who doesn\'t like dogs in this town.');
	}
	console.log(dogs);
}

function dessert () {
var iceCream = prompt('Do I like icecream?').toUpperCase();
if (iceCream === 'YES' || iceCream === 'Y') {
	alert('Yea, I scream for icecream.');
	score = score + 1;
} else {
	alert('Na, I\'m a sweet-tooth.');
}
console.log(iceCream); 
} 

												//guessing-game

var guessCount = 0;
function carTrouble() {
	var myCar = 'ford';
	do {
		var guess = prompt( 'What kind of car do I drive?' ).toLowerCase();
		if( myCar !== guess ) {
			alert( 'Nope, not that kind of car.' );
		} else {
			alert ( 'That\'s my ride!' );
			score = score + 1;
		}
		guessCount ++;
	} while( myCar !== guess && guessCount < 3 );
	console.log ( 'My car is a ' + myCar);
}

guessCount = 0;
function foods() {
	var favFood = 'sushi';
	do {
		var guess = prompt( 'What is my favourite food?' ).toLowerCase();
		if( favFood !== guess ) {
			alert( 'Na, I don\'t care for that.');
		} else {
			alert( 'Yea, love that stuff.');
			score = score + 1;
	} 
		guessCount ++;
	} while( favFood !== guess && guessCount < 3 );
	console.log( 'My favourite food is ' + favFood);
}

guessCount = 0;
function sports() {
	var favSport = 'soccer';
	do {
		var guess = prompt( 'What is my favourite sport?' ).toLowerCase();
		if( favSport !== guess ) {
			alert( 'Nope, not my absolute favourite. Try again.');
		} else {
			alert( 'Yep, love the game!');
			score = score + 1;
	} 
		guessCount ++;
	} while( favSport !== guess && guessCount < 3 );
	console.log( 'My favourite sport is ' + favSport);
}

guessCount = 0;
function midWest() {
var lastState = 'illinois';
	do {
		var guess = prompt( 'What was the last state I visited?');
		if( lastState !== guess ) {
			alert( 'No, not that one.')
		} else {
			alert( 'That\'s the one. Chicago is nuts.' );
			score = score + 1;
	}
		guessCount ++;
	} while ( lastState !== guess && guessCount < 3 );
	console.log( 'Last state I visited was ' + lastState ); 
}

							
guessCount = 0;
function beenThere() {
	for (var i = 0; i < 4; i++) {
		var visitedStates = 16;
		var guess = parseInt(prompt( 'How many states have I visited?' ));
		if (guess > 30) {
			alert( 'Way too many!' );
		} else if (guess > 17) {
			alert( 'Too many.' );
		} else if (guess === 16) {
			alert( 'Nailed it! Wyoming has been the prettiest.' );
			score = score + 1;
			break;
		} else {
			alert( 'Too few.'  );
	} 
		guessCount ++;
	}
	console.log( 'I\'ve visited ' + visitedStates + ' states.' );
}

// indexOf
function beenThereCountry() {
var visitedCountry = [ 'india', 'canada', 'nepal', 'nicaragua', 'laos' ];
do {
	var guess = prompt( 'What countries have I visited?' ).toLowerCase();
	if ( visitedCountry.indexOf ( guess ) !== -1) {
		alert( 'Been there! ');
		score = score + 1;
		break;
    } else {
		alert( 'Nope, haven\'t been there yet.' );
  }
} while ( !visitedCountry.includes ( guess ) );
console.log( visitedCountry );
}

yesNo();
juggle();
joint();
pets();
dessert();
carTrouble();
midWest();
sports();
foods();
beenThere();
beenThereCountry();

alert('Your score is: ' + score);



// while ( !visitedCountry.includes ( guess ) )


