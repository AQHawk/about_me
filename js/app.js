'use strict';

function userName() {
  var userName = prompt('Hi! What\'s your name?');
  alert('Hi, ' + userName + '. Ready for a little guessing game? Let\'s see if you can answer some questions about me. Sound Good?');
}
userName();

function answer1() {
  var answer1 = prompt('Was I born and raised in Washington? Y/N').toLowerCase();
  console.log('Answer 1 is ' + answer1);
  if (answer1 === 'n' || answer1 === 'no') {
    //tell user they got the right answer
    alert('You are correct, but I did spend 8 years in Washington while in the military. ');
  } else {
    alert('You are incorrect. I was born and raised in Kansas');
  }
}
answer1();

function answer2() {
  var answer2 = prompt('Did I spend 20 years in the military? Y/N').toLowerCase();
  console.log('Answer 2 is ' + answer2);
  if (answer2 === 'y' || answer2 === 'yes') {
    alert('Correctomundo!..and I have a million stories to tell about it');
  } else {
    alert('You are incorrect. I left the service in 2009 after 20 years.');
  }
}
answer2();

function answer3() {
  var answer3 = prompt('Was I a bartender? Y/N').toLowerCase();
  console.log('Answer 3 is ' + answer3);
  if (answer3 === 'y' || answer3 === 'yes') {
    alert('You are correct...and the ladies loved our "Cocktail" routine');
  } else {
    alert('You are incorrect. I learned the ropes at the Salina Country Club for the first year then tended bar for another three years');
  }
}
answer3();

function answer4() {
  var answer4 = prompt('Did I like my work as an IT?').toLowerCase();
  console.log('Answer 4 is ' + answer4);
  if (answer4 === 'n' || answer4 === 'no') {
    alert('You are correct');
  } else {
    alert('You are incorrect');
  }
}
answer4();

function answer5() {
  var answer5 = prompt('Do I like kittens?').toLowerCase();
  console.log('Answer 5 is ' + answer5);
  if (answer5 === 'y' || answer5 === 'yes') {
    alert('You are correct! That one was kind of a gimme. Who doesn\'t like kittens!?');
  } else {
    alert('Of course I do. Who doesn\'t like kittens!?');
  }
}
answer5();


var guessesRemaining = 4;
var cupsCoffee = 8;

while (guessesRemaining > 0) {
  var answer6 = parseInt(prompt('Now we\'re going to try a little guessing game if you\'re up for it. Can you tell me how many cups of coffee I\'ve had this week already? You get 4 guesses.'));
  if (answer6.toString() == 'NaN') {
    alert('Sorry, this needs to be a number');
    // answer6 = prompt('beexlebub');
  } else if (answer6 === cupsCoffee) {
    alert('You are correct! I am dosin on Coffee!');
    break;
    // answer = prompt('beexl');
  } else if (answer6 < cupsCoffee) {
    alert('Too low!Try again');
    guessesRemaining--;
    // answer6 = prompt('too low');
  } else {
    alert('Too high! Try again');
    guessesRemaining--;
  }
  if (guessesRemaining === 0) {
    alert('You\'re all out of guesses. 8 was the magic number');
  }
}
answer6();
console.log('Answer 6 is ' + answer6);
