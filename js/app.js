'use strict';

var correctAnswers = 0;

function getName() {
  //Get the users name to respond and provide alerts.
  var name = prompt('What is your name?'); 
  console.log('Hello ' + name);
  if (name) {
    alert ('Hello ' + name + ', Press the Start quiz button to begin');
  }
  while(!name){
    name = prompt('Please enter your name');
  }
}

getName();

//Get the answer to the question on going to college in both California and Oregon.  Alert based upon the answer.  Use a boolean in the logic.
// Write new loop code that checks for answers and keeps track of right answers.
// if a field exists in an array with acceptable yes/no, y/n, YES/NO, Y/N answers, then continue
// otherwise keep asking for a valid answer.

var yesIsAnswer = ['yes', 'y', 'YES', 'Y'];  //Defind global yesIsAnswer array.
console.log(yesIsAnswer);
var noIsAnswer = ['no','n','NO','N'];  //Defind global noIsAnswer array.
var collegeStates = '';

function collegeQuestion() {
  var goodAnswer = ['yes', 'no', 'y', 'n', 'YES', 'NO', 'Y', 'N'];  

  while(!goodAnswer.includes(collegeStates)){collegeStates = prompt('Did I go to college in both California and Oregon? yes/no');
    console.log('College in both California and Oregon? ' + collegeStates);
  }

  var collegeStatesBoolean;
  if (collegeStates.toLowerCase() === 'yes' || collegeStates.toLowerCase() === 'y'){
    collegeStatesBoolean = true;
  }else{
    collegeStatesBoolean = false;
  }

  console.log('College States is ' + collegeStatesBoolean);
  if (collegeStatesBoolean === true){
    alert('You are correct about me going to college in both California and Oregon.  I began and graduated from Claremont McKenna College but attended the University of Oregon my sophomore year and winter term of my senior year completing my degree in March, 1985')
    var collegeStates= '';
    correctAnswers ++;
  }else{
    alert('I did go to college in both California and Oregon.   I began and graduated from Claremont McKenna College but attended the University of Oregon my sophomore year and winter term of my senior year completing my degree in March, 1985')
    collegeStates = '';
  }

  teacherQuestion(goodAnswer);
}

//collegeQuestion();

function teacherQuestion(teacherAnswer) {
  //Get the answer to the question if I was a teacher and check for yes/no or y/n.  alert based upon the response.
  while(!teacherAnswer.includes(teacher)){var teacher = prompt('Was I ever a teacher? yes/no');}
  if (yesIsAnswer.includes(teacher)){console.log('teacher if ' + teacher);
    alert ('Correct.  I was a driving instructor at Summit High School in Bend, Oregon.  I also taught behind the wheel.');
  }else {console.log('teacher else ' + teacher);
    alert ('Incorrect.  I actually did teach a driver education class at Summit High School as well as in the car training.');
  }
  correctAnswers ++;
  poleQuestion(teacherAnswer);
}

function poleQuestion(poleAnswer) {
  //Get the answer to the question about the fishing pole.  Alert based upon response.  Check for appropriate answer. 
  while(!poleAnswer.includes(pole)){var pole = prompt('Do I use a 5 weight fishing pole to fly fish for trout? yes/no');
  }   console.log('pole ' + pole);
  if (yesIsAnswer.includes(pole)){
    console.log('pole answer is yes ' + pole);
    alert('Incorrect. It is a common misconception that fly fishermen use fishing poles but they actually use fishing rods.  I do use a 5 weight fly rod when fishing for trout');
  } else {console.log('pole answer is no ' + pole)
    alert('Correct. I use a 5 weight fishing rod NOT a fishing pole.');
    correctAnswers ++;
  }

  flyQuestion();
}

function flyQuestion() {
  //Get the answer to the question about serendipity just for fun.  Check the response is a appropriate once.  Alert differently upon response.
  var flyType = prompt('Is Serendipity an actual fly name? yes/no');
  console.log(flyType);

  if (flyType.toLowerCase() !== 'yes' && flyType.toLowerCase() !== 'y' && flyType.toLowerCase() !== 'no' && flyType.toLowerCase() !== 'n') { 
    prompt('Please enter \'yes\' or \'no\'');
  } else {
    if (flyType.toLowerCase() === 'yes' || flyType.toLowerCase() === 'y') {
      alert('Correct. Serendipity is a fly name');
      correctAnswers ++;
    } else {
      if (flyType.toLowerCase() === 'no' || flyType.toLowerCase() === 'n') {
        alert('Incorrect.  Although unusual, Serendipity is a fly nane. Fly tiers have fun when naming flies.  How serendipituous is that?');
      }
    }
  }

  hobbies();
}

function hobbies(){
  //Array with hobbies for quesion
  var markHobbies = ['skiing', 'golf', 'fishing', 'fly fishing', 'cycling'];
  console.log(markHobbies);
  var hobbyGuess = prompt('What is one of my hobbies');
  hobbyGuess = hobbyGuess.toLowerCase();
  console.log(hobbyGuess);
  if (hobbyGuess === 'skiing'  || hobbyGuess === 'golf'  ||hobbyGuess === 'fishing'  ||
  hobbyGuess === 'fly fishing'  ||hobbyGuess === 'cycling') {
    alert('Correct. '+ hobbyGuess + ' is one of my hobbies.');
    correctAnswers ++;
  }else {
    console.log('else working');
    alert('Incorrect. ' + hobbyGuess + ' is not one of my hobbies.');
  }

  numberQuestion();
}

function numberQuestion() {
  //Sixth question with quessing my favorite number
  collegeStates = '';
  var favoriteNumber = '213';
  console.log('My favorite number is ' + favoriteNumber);
  var favoriteNumberGuess = prompt('Please take a guess at my favorite number ');
  console.log('Favorite Number Guess is ' + favoriteNumberGuess);
  var i = 0;

  while (i < 3) {
    if (favoriteNumber === favoriteNumberGuess) { 
      alert('You are correct! My favorite number is ' + favoriteNumber);
      correctAnswers ++;
      alert('You got ' + correctAnswers + ' out of six questions.');
      correctAnswers = 0;
      break;
    } else {
      i++;

      if (favoriteNumber *1 < favoriteNumberGuess *1) {
        console.log(favoriteNumberGuess);
        favoriteNumberGuess = prompt('Please guess another number lower than ' + favoriteNumberGuess);
      } else {
        console.log(favoriteNumberGuess);
        favoriteNumberGuess = prompt('Please guess another number higher than ' + favoriteNumberGuess);
      }
    }
    if( i === 3){
      alert('You ran out of guesses.  My favorite number is ' + favoriteNumber);
      alert('You got ' + correctAnswers + ' out of six questions.');
      correctAnswers = 0;
    }
  }
}


