'use strict';


var userName = prompt('Hi! What\'s your name?');
alert('Hi, ' + userName + '. After reading my about me, let\'s see if you can answer some questions. Sound Good?');

var answer1 = prompt('Was I born and raised in Washington? Y/N').toLowerCase();
console.log('Answer 1 is ' + answer1);
if (answer1 ==='n' || answer1 === 'no') {
  //tell user they got the right answer
  alert('You are correct, but I did spend 8 years in Washington while in the military. ');
} else {
  alert('You are incorrect. I was born and raised in Kansas');
}

var answer2 = prompt('Did I spend 20 years in the military? Y/N').toLowerCase();
console.log('Answer 2 is ' + answer2);
if (answer2 ==='y' || answer2 === 'yes') {
  alert('Correctomundo!..and I have a million stories to tell about it');
} else {
  alert('You are incorrect. I left the service in 2009 after 20 years.');
}

var answer3 = prompt('Was I a bartender? Y/N').toLowerCase();
console.log('Answer 3 is ' + answer3);
if (answer3 ==='y' || answer3 === 'yes') {
  alert('You are correct...and the ladies loved our "Cocktail" routine');
} else {
  alert('You are incorrect. I learned the ropes at the Salina Country Club for the first year then tended bar for another three years');
}

var answer4 = prompt('Did I like my work as an IT?').toLowerCase();
console.log('Answer 4 is ' + answer4);
if (answer4 ==='n' || answer4 === 'no') {
  alert('You are correct');
} else {
  alert('You are incorrect');
}

var answer5 = prompt('Do I like kitties?').toLowerCase();
console.log('Answer 5 is ' + answer5);
if (answer5 ==='y' || answer5 === 'yes') {
  alert('You are correct! That one was kind of a gimme. Who doesn\'t like kitties!?');
} else {
  alert('Of course I do. Who doesn\'t like kitties!?');
}

var guesses = 3;

var answer6 = parseInt(prompt('Now we\'re going to try a little guessing game if you\'re up for it. Can you tell me how many cups of coffee I\'ve had this week already? You get 4 guesses.'));
while (guesses > 0 ) {
  if (answer6 === 7) {
  alert('You are correct! I am dosin on Coffee!');
  break;
} else {
  alert('Sorry. Try again.');
  guesses--;
  answer6 = parseInt(prompt('How many?'));
}
}
console.log('Answer 6 is ' + answer6);



// I had to comment out question 7 for the rest to work. Struggled with it. I'll have to resubmit.

// var answer7 = (prompt('Let's see if you\'re better at this. Can you guess a state that I have lived in besides Washington?');
//
// var states;
// states = ['California', 'Oregon', 'Colorado', 'Texas', 'Missouri', 'Virginia', 'South Carolina'];
//
// for (var i=0; i < myArray.length; i++) {
//   console.log(myArray[i]);
}








/*
Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!

The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.

Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have

Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit. */

// OR ||
// AND &&
