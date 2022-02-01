'use-strict';

// <button type="submit" value="submit">Start Race!</button>

//Create contructor function for Player
// properties (name, racer)

function Player(name, racer){
  this.name = name;
  this.racer = racer;
  this.finalScore = 0;
}

//Save user input to local storage

// let retrievedProducts = localStorage.getItem('products');

// let parsedProducts = JSON.parse(retrievedProducts);

// //this goes in handle submit function
// let stringifiedProducts = JSON.stringify(productArray);

// localStorage.setItem('products', stringifiedProducts);

//Add event listener for submit button on splash 
// create a handle submit function 
//----changes display from flex to none in pregame id
//----change display on racetrack from hidden to display?


//Grab the entire form in the DOM that includes the button
let choice = document.getElementById('player-select');

//on submit do this below

function handleSubmit(event){
  event.preventDefault();

  document.getElementById('pregame').style.display='none';
  // this will be for toggling pregame

  // document.getElementById('live-play').style.display='grid/flex/whatever is used';
    // this will be for toggling racetrack
    
}


//listen to when the submit button is clicked
choice.addEventListener('submit', handleSubmit);
