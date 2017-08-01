'use strict'

alert ('Hello');

var europe = prompt('Have I ever been to Europe?').toLowerCase();
        if (europe === 'yes' || 'y') {
			alert('Na, still haven\'t been.');
    } else {
            alert('You\'re right, but I really want to go though.');
	}
	console.log(europe);
		
var canJuggle = prompt ('Can I juggle?').toLowerCase();
        if (canJuggle === 'yes' || 'y') {
            alert('Na, it\'s a muppet\'s passtime.');
    } else {
            alert('So true, I can\'t.');
} 

var disJoint = prompt ('Can I dislocate a joint?').toLowerCase();
		if (disJoint === 'yes' || 'y') {
			alert('No, that\'s gross!');
	} else { 
			alert('Yea, I like my joints the way they are.');
}

var dogs = prompt('Do I like dogs?').toUpperCase();
		if (dogs === 'YES' || 'Y') {
			alert('Yea, they are the best.');
	} else {
			alert ('Come on, who doesn\'t like dogs in this town.');
}

var iceCream = prompt ('Do I like icecream?').toUpperCase();
		if (iceCream === 'YES' || 'Y') {
			alert ('Yea, I scream for icecream.');
	} else {
			alert ('Na, I\'m a sweet-tooth.');
}

