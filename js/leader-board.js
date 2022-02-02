'use string';

// retrieve data from local storage
let leaderboard = [];
updateLeaderboard();

function updateLeaderboard() {
  let retrieveLeaderboard = localStorage.getItem('leaderboard');

  if(retrieveLeaderboard) {
    leaderboard = JSON.parse(retrieveLeaderboard);
  }

  let stringifiedLeaderboard = JSON.stringify(leaderboard);
  localStorage.setItem('leaderboard', stringifiedLeaderboard);
}
// THIS IS JUST A TEST ***********
// let parsedPlayer = [];

// // sort feature <--- USE ME ON INCOMING JSON parsedPlayer
// let playa = parsedPlayer.sort((score,b) => a - b);
// console.log(playa);
// function Racer(score, name) {

//   this.name = name;


//   this.score = score;
//   this.date = new Date().toString();

//   parsedPlayer.push(this);
// }
// console.log(parsedPlayer);
// let p1 = new Racer(4, 'Rick');
// let p2 = new Racer(8, 'Morty');
// let p3 = new Racer(10, 'Stimpy');
// let p4 = new Racer(100, 'Ren');

//THIS IS THE END OF THE TEST ****************

// // Grab window into the DOM
// let myContainer = document.getElementById('table');

// render the table on the scoreboard
// render name, score, and date

// After sorting, pop off any extras until the top three are left
while (leaderboard.length > 3){
  leaderboard.pop();
}

function scoreBoard() {

  const table = document.querySelector('table');

  for (let i = 0; i < leaderboard.length; i++) {

    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td1 = document.createElement('td');
    td1.textContent = leaderboard[i].date;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = leaderboard[i].name;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = leaderboard[i].score;
    tr.appendChild(td3);

  }

}

scoreBoard();
