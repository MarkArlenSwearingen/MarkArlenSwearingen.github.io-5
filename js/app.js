'use strict';
//Get the users name to respond hello
var name = prompt('What is your name?'); 
console.log('Hello ' + name);

//Get the answer to the question on going to college in both California and Oregon.  Alert based upon the answer.  Use a boolean in the logic.
var collegeStates = prompt('Did I go to college in both California and Oregon? yes/no');
console.log('College in both California and Oregon? ' + collegeStates);

var collegeStatesBoolean;
if (collegeStates.toLowerCase() === 'yes' || collegeStates.toLowerCase() === 'y'){
  collegeStatesBoolean = true;
}else{
  collegeStatesBoolean = false;
}

console.log('College States is ' + collegeStatesBoolean);
if (collegeStatesBoolean === true){
  alert('You are correct about me going to college in both California and Oregon.  I began and graduated from Claremont McKenna College but attended the University of Oregon my sophomore year and winter term of my senior year completing my degree in March, 1985')
}else{
  alert('I did go to college in both California and Oregon.   I began and graduated from Claremont McKenna College but attended the University of Oregon my sophomore year and winter term of my senior year completing my degree in March, 1985')
}

//Get the answer to the question if I was a teacher and check for yes/no or y/n.  alert based upon the response.
var teacher = prompt('Was I ever a teacher? yes/no');
if (teacher.toLocaleLowerCase() !== 'yes' && teacher.toLocaleLowerCase() !== 'y' && teacher.toLocaleLowerCase() !== 'no' && teacher.toLocaleLowerCase() !== 'n'  ){
  console.log('teacher if the answer was inappropriate ' + teacher);
  teacher =  prompt('Please enter yes/no');
  console.log('teacher after prompting again for yes/no ' + teacher);
}
if (teacher.toLowerCase() === 'yes' || teacher.toLowerCase() === 'y')
{alert ('Correct.  I was a driving instructor at Summit High School in Bend, Oregon.  I also taught behind the wheel.');
}else {alert ('I actually did teach a driver education class at Summit High School as well as in the car training.');
}

//Get the answer to the question about the fishing pole.  Alert based upon response.  Check for appropriate answer once.  It will be improved later in a loop.       
var pole = prompt('Do I use a 5 weight fishing pole to fly fish for trout? yes/no');
console.log(pole);
if (pole.toLowerCase() !== 'yes' && pole.toLowerCase() !== 'y' && pole.toLowerCase() !== 'no' && pole.toLowerCase() !== 'n')
{ prompt('Please enter \'yes\' or \'no\'')
}else {
  if (pole.toLowerCase() === 'yes' || pole.toLowerCase() === 'y') {alert('It is a common misconception that fly fishermen use fishing poles but they actually use fishing rods.  I do use a 5 weight fly rod when fishing for trout');
  }else {if (pole.toLowerCase() === 'no' || pole.toLowerCase() === 'n')
  {alert('Correct. I use a 5 weight fishing rod NOT a fishing pole.');}
  }
}

//Get the answer to the question about serendipity just for fun.  Check the response is a appropriate once.  Alert differently upon response.
var flyType = prompt('Is Serendipity an actual fly name? yes/no');
console.log(flyType);

if (flyType.toLowerCase() !== 'yes' && flyType.toLowerCase() !== 'y' 
    && flyType.toLowerCase() !== 'no' && flyType.toLowerCase() !== 'n')
{ prompt('Please enter \'yes\' or \'no\'')}
else {
  if (flyType.toLowerCase() === 'yes' || flyType.toLowerCase() === 'y') 
  {alert('Correct. Serendipity is a fly name');
  }else {if (flyType.toLowerCase() === 'no' || flyType.toLowerCase() === 'n')
  {alert('Although unusual, Serendipity is a fly nane. Fly tiers have fun when naming flies.  How serendipituous is that?');}
  }
}


