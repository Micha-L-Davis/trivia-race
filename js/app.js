'use strict';

//#region DOM Handles

let qPara = document.getElementById('q-para');
let answerForm =  document.getElementById('input');
let answerRadios = document.forms['input'].elements['answer'];
let answerA = document.getElementById('answer-a');
let answerB = document.getElementById('answer-b');
let answerC = document.getElementById('answer-c');
let answerD = document.getElementById('answer-d');

//#endregion

//#region Data Containers

let qArr = [
  'Which mammal is known to have the most powerful bite in the world?',
  'A dog sweats through which part of its body?',
  'What is the size of a newborn kangaroo?',
  'A baby goat is called what?',
  'What animal is the largest mammal in the world?',
  'What name is given to a female deer?',
  'What do snakes use to smell?',
  'What is the name of the largest snake in the world?',
  'Where are a cricket\'s ears located?',
  'How far can a skunk spray?',
  'How long does the average housefly live for?',
  'How many babies can a German cockroach produce in one year?',
  'How many flowers do honey bees have to visit in order to make one pound of honey?',
  'Which member of the Beatles had a cat named Elvis?',
  'In Rome, which animal is protected under the law?',
  'What common farm animal doesn\'t have teeth on their upper jaw?',
  'What object does a male penguin often gift to a female penguin to win her over?',
  'Which type of animal is known to be the fastest bird in the world?',
  'Which two mammals are the only ones known to lay eggs?',
  'Which bird is known to be the smallest in the world?',
  'What popular sea creature has the ability to clone itself?',
  'Which sea creature is known to be the only natural predator of the Great White Shark?',
  'Why are flamingos pink?',
  'Which bird is known to have eyes larger than its brain?',
  'Where is a shrimp\'s heart located in its body?',
  'Which mammal is not able to jump?',
];

let aArr = ['c','a','d','a','b','b','c','b','a','d','d','c','a','b','a','d','c','d','d','a','b','c','d','a','b','c'];

let oArr = [
  ['Tiger','Bear','Hippopotamus','Elephant'],
  ['Paws','Ears','Eyes','Nose'],
  ['1 foot','3 feet','10 inches','1 inch'],
  ['Kid','Baby','Calf','Doe'],
  ['Elephant','Blue Whale','Bear','Giraffe'],
  ['Calf','Doe','Lady','Cow'],
  ['Nose','Skin','Tongue','Eyes'],
  ['King Cobra','Anaconda','Rattlesnake','Python'],
  ['On their legs','On their head','On their tail','On their feet'],
  ['2 feet','50 feet','6 inches','10 feet'],
  ['80 years','1 day','10 hours','28 days'],
  ['1,000','100','30,000','35 million'],
  ['2 million','100','So Many','10,000'],
  ['Ringo Starr','John Lennon','Paul McCartney','George Harrison'],
  ['Cat','Mongoose','Dragon','Parrot'],
  ['Cow','Pig','Geese','Goats'],
  ['Snowball','Icicle','A Rock','Flower'],
  ['The Golden Eagle','The Osprey','The Duck','The Peregrine Falcon'],
  ['The elephant and the lion','The bat and the raccoon','The hedgehog and the gopher','The anteater and the duck-billed platypus.'],
  ['Bee Hummingbird','Finch','Yellow Canary','Lovebird'],
  ['Clown Fish','Jellyfish','Sea Urchin','Giant Squid'],
  ['Loch Ness Monster','Humpback Whale','Orca Whale','None'],
  ['Their ancestral DNA was changed 50 years ago','Flamingos are extinct','Flamingos are not pink','Due to their main source of food being shrimp and algae'],
  ['Ostrich','Owl','Bald Eagle','Vulture'],
  ['Tail','Head','Abdomen','They do not have a heart'],
  ['Hippopotamus','Rhinoceros','Elephant','Polar Bear'],
];

//#endregion

//#region Question Constructor & Prototype

function Question(question, answer, optionsArr) {
  this.question = question;
  this.answer = answer;
  this.optionsArr = optionsArr;

  Question.list.push(this);
}

Question.list = [];

//#endregion

//#region Runtime Code

let currentQuestion;
let questionCount = 5;
let correctQuestions = 0;
constructQuestions();
chooseQuestion();

//#endregion

//#region Global Functions

// Populating Questions List
function constructQuestions(){
  for (let i in qArr){
    new Question(qArr[i], aArr[i], oArr[i]);
  }
}

// Choosing a question
function chooseQuestion(){
  questionCount--;
  let index = randomIntInclusive(0, Question.list.length);
  currentQuestion = Question.list.splice(index, 1)[0];
  serveQuestion(currentQuestion);
}

// Displaying A Question
function serveQuestion(question){
  qPara.textContent = question.question;
  answerA.textContent = question.optionsArr[0];
  answerB.textContent = question.optionsArr[1];
  answerC.textContent = question.optionsArr[2];
  answerD.textContent = question.optionsArr[3];
}


// Answer Event Handler
function handleGuess(event){
  event.preventDefault();

  if (event.target.value === currentQuestion.answer){
    console.log('correct!');
    correctQuestions++;
  }
  else{
    console.log('incorrect!');
  }
  if (questionCount){
    for (let i in answerRadios){
      // answerRadios[i].checked = false;
    }
    chooseQuestion();
  }
  else{
    endRace();
  }
}


function endRace(){
  // display results
}

function randomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//#endregion

//#region Event Listener

answerForm.addEventListener('change', handleGuess);

//#endregion
