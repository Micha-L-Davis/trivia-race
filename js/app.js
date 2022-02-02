'use strict';

//#region DOM Handles

let choice = document.getElementById('player-select');
let qPara = document.getElementById('q-para');
let answerForm =  document.getElementById('input');
let answerA = document.getElementById('answer-a');
let answerB = document.getElementById('answer-b');
let answerC = document.getElementById('answer-c');
let answerD = document.getElementById('answer-d');
let playerImg = document.getElementById('player-racer');
let opponentImg = document.getElementById('opponent-racer');
let livePlay = document.getElementById('live-play');

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

let difficultyArr = [2, 2, 3, 3, 1, 1, 2, 1, 3, 2, 2, 3, 3, 3, 2, 2, 1, 3, 3, 2, 3, 1, 1, 3, 3, 3];

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

let playerCoords = [['45px', '250px', 'rear'],['80px', '80px', 'rear'],['275px','50px', 'right'],['480px','80px', 'right'],['510px','259px', 'front'],['460px','400px', 'front'],['275px','440px', 'left'],['80px','420px', 'left'], ['45px', '250px', 'rear']];

let opponentCoords = [['125px', '250px', 'rear'],['140px', '130px', 'rear'],['250px','125px', 'right'],['420px','130px', 'right'],['450px','250px', 'front'],['420px','380px', 'front'],['300px','400px', 'left'],['150px','375px', 'left'], ['125px', '250px', 'rear']];

//#endregion

//#region Question Constructor & Prototype

function Question(question, answer, optionsArr, difficulty) {
  this.question = question;
  this.answer = answer;
  this.optionsArr = optionsArr;
  this.difficulty = difficulty;

  questionList.push(this);
}

let questionList = [];

function Racer(image, name, animal) {
  this.image = image;
  this.name = name;
  this.animal = animal;
  this.positionX = '45px';
  this.positionY = '250px';
  this.score = 0;
  this.date = new Date().toString();

  playerImg.src = this.image;
}

//#endregion

//#region Runtime Code


let currentQuestion;
constructQuestions();
chooseQuestion();
let player;
let opponent = new Racer('/img/racer-img/chicken_rear.png','Cluck-U', 'chicken');

//#endregion

//#region Global Functions

// Populating Questions List
function constructQuestions(){
  for (let i=0; i < qArr.length; i++){
    new Question(qArr[i], aArr[i], oArr[i], difficultyArr[i]);
  }
}

// Choosing a question
function chooseQuestion(){
  let index = randomIndex();

  if (questionList){
    currentQuestion = questionList.splice(index, 1)[0];
    serveQuestion(currentQuestion);
  }
}

// Displaying A Question
function serveQuestion(question){
  qPara.textContent = question.question;
  answerA.textContent = question.optionsArr[0];
  answerB.textContent = question.optionsArr[1];
  answerC.textContent = question.optionsArr[2];
  answerD.textContent = question.optionsArr[3];
}


// question difficulty counter and total questions asked variables
let easyQsCorrect = 0;
let medQsCorrect = 0;
let hardQsCorrect = 0;
let totalQuestions = 0;

// Answer Event Handler
function handleGuess(event){
  event.preventDefault();
  if(event.target.type === 'button' && event.target.name === 'answer'){
    totalQuestions++;
    console.log(totalQuestions);
    if (event.target.value === currentQuestion.answer){
      console.log('correct!');
      document.getElementById('correct').style.display='flex';
      player.score++;
      if (currentQuestion.difficulty === 1){
        easyQsCorrect++;
      }
      if (currentQuestion.difficulty === 2){
        medQsCorrect++;
      }
      if (currentQuestion.difficulty === 3){
        hardQsCorrect++;
      }
      console.log(currentQuestion.difficulty);
      console.log(player.score);
    }
    else{
      console.log('incorrect!');
      document.getElementById('incorrect').style.display='flex';
    }

    let aiAnswer = randomIntInclusive(0, 1);

    if (aiAnswer === 0){
      console.log('AI guesses correctly');
      opponent.score++;
    }
    else {
      console.log('AI guesses incorrectly');
    }
    console.log(opponent.score);

    advanceRacers(player, opponent);
  }
}

// Player choice event handler
function handleSubmit(event){
  event.preventDefault();

  console.log(event);
  let playerName = event.target[0].value;
  let playerImage;
  let playerAnimal;
  for (let i = 1; i <= 5; i++) {
    if (event.target[i].checked === true){
      playerAnimal = event.target[i].value;
      playerImage = `/img/racer-img/${playerAnimal}_rear.png`;
    }
  }
  player = new Racer(playerImage, playerName, playerAnimal);
  advanceRacers(player, opponent);
  document.getElementById('pregame').style.display='none';
  document.getElementById('live-play').style.display='flex';
}

function advanceRacers(player, opponent){
  player.positionX = playerCoords[player.score][0];
  player.positionY = playerCoords[player.score][1];
  player.image = `/img/racer-img/${player.animal}_${playerCoords[player.score][2]}.png`;
  opponent.positionX = opponentCoords[opponent.score][0];
  opponent.positionY = opponentCoords[opponent.score][1];
  opponent.image = `/img/racer-img/${opponent.animal}_${opponentCoords[opponent.score][2]}.png`;
  renderRacers(player,opponent);
}

function renderRacers(player, opponent){
  playerImg.src = player.image;
  playerImg.style.left = player.positionX;
  playerImg.style.top =player.positionY;
  opponentImg.src = opponent.image;
  opponentImg.style.left = opponent.positionX;
  opponentImg.style.top = opponent.positionY;

}

//renderRacers(playerImg, opponentImg);

function endRace(){
  // display results
  player.score = (((1*easyQsCorrect) + (2*medQsCorrect) + (3*hardQsCorrect)) / totalQuestions) * 1000;
  storeData();
  updateLeaderboard();
}

let leaderboard = [];
function updateLeaderboard() {
  let retrieveLeaderboard = localStorage.getItem('leaderboard');

  if(retrieveLeaderboard) {
    leaderboard = JSON.parse(retrieveLeaderboard);
  }

  let retrievePlayer = localStorage.getItem('playerData');
  let parsedPlayer = JSON.parse(retrievePlayer);
  leaderboard.push(parsedPlayer);

  let stringifiedLeaderboard = JSON.stringify(leaderboard);
  localStorage.setItem('leaderboard', stringifiedLeaderboard);
}

function randomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIndex() {
  return Math.floor(Math.random() * questionList.length);
}

function storeData() {
  console.log('saving');
  let playerData = JSON.stringify(player);
  localStorage.setItem('playerData', playerData);
}

function handleConfirm(event){
  event.preventDefault();
  if(event.target.type === 'button' && event.target.name !== 'answer'){
    switch (event.target.name) {
    case 'correct-answer':
      document.getElementById('correct-answer').style.display='none';
      break;
    case 'incorrect-answer':
      document.getElementById('incorrect-answer').style.display='none';
      break;
    case 'you-win':
      document.getElementById('you-win').style.display='none';
      break;
    case 'you-lose':
      document.getElementById('you-lose').style.display='none';
      break;
    default:
      break;
    }
    if (player.score >= 8 || opponent.score >= 8){
      endRace();
    }
    else{
      chooseQuestion();
    }
  }
}
//#endregion

//#region Event Listener

answerForm.addEventListener('click', handleGuess);
choice.addEventListener('submit', handleSubmit);
livePlay.addEventListener('click', handleConfirm);

//#endregion
