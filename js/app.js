'use strict';

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
  ''
];
let aArr = ['c','a','d','a','b','b','c','b','a','d','d','c','a',''];
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
  ['','','',''],
];


//#region DOM Handles

let questionBox = document.getElementById('questions');
let answerForm =  document.getElementById('input');
let answerA = document.getElementById('answer-a');
let answerB = document.getElementById('answer-b');
let answerC = document.getElementById('answer-c');
let answerD = document.getElementById('answer-d');

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

//#region Global Functions

// Populating Questions List
function constructQuestions(){
  for (let i in qArr){
    new Question(qArr[i], aArr[i], oArr[i]);
  }
}

// Choosing a question
function chooseQuestion(){
  let index = randomIntInclusive(0, Question.list.length);
  let question = Question.list.splice(index, 1);
  serveQuestion(question[0]);
}

// Displaying A Question
function serveQuestion(question){
  questionBox.firstChild.textContent = question.question;
  answerA.textContent = question.optionsArr[0];
  answerB.textContent = question.optionsArr[1];
  answerC.textContent = question.optionsArr[2];
  answerD.textContent = question.optionsArr[3];
}


// 2. collect input
function handleGuess(event){
  event.preventDefault();

  console.log(event);
}

// 3. compare input to answer

// 4. calculate score


function randomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//#endregion
answerForm.addEventListener('submit', handleGuess);
//#region Event Listener




