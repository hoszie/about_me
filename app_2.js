'use strict';
alert ('Hello');

var europe = prompt('Have I ever been to Europe?').toLowerCase();
if (europe === 'yes' || europe === 'y') {
  alert('Na, still haven\'t been.');
} else {
  alert('You\'re right, but I really want to go though.');
}
console.log(europe);

var canJuggle = prompt ('Can I juggle?').toLowerCase();
if (canJuggle === 'yes' || canJuggle === 'y') {
  alert('Na, it\'s a muppet\'s passtime.');
} else {
  alert('So true, I can\'t.');
}
console.log(canJuggle);

var disJoint = prompt ('Can I dislocate a joint?').toLowerCase();
if (disJoint === 'yes' || disJoint === 'y') {
  alert('No, that\'s gross!');
} else {
  alert('Yea, I like my joints the way they are.');
}
console.log(disJoint);

var dogs = prompt('Do I like dogs?').toUpperCase();
if (dogs === 'YES' || dogs === 'Y') {
  alert('Yea, they are the best.');
} else {
  alert ('Come on, who doesn\'t like dogs in this town.');
}
console.log(dogs);

var iceCream = prompt ('Do I like icecream?').toUpperCase();
if (iceCream === 'YES' || iceCream === 'Y') {
  alert ('Yea, I scream for icecream.');
} else {
  alert ('Na, I\'m a sweet-tooth.');
}
console.log(iceCream);
