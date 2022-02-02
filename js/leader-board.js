'use string';

// retreive data from local storage
let retrievePlayer = localStorage.getItem('leaderboard');

let parsedPlayer = JSON.parse('retrievePlayer');

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

function scoreBoard() {

  const table = document.querySelector('table');

  for (let i = 0; i <= 3; i++) {


    let tr = document.createElement('tr');
    table.appendChild(tr);

    let td1 = document.createElement('td');
    td1.textContent = parsedPlayer[i].date;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = parsedPlayer[i].name;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = parsedPlayer[i].score;
    tr.appendChild(td3);

  }

}

scoreBoard();
