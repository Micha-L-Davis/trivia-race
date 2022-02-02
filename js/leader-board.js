'use string';

// retrieve data from local storage
let leaderboard = [];
updateLeaderboard();

function updateLeaderboard() {
  let retrieveLeaderboard = localStorage.getItem('leaderboard');

  if (retrieveLeaderboard) {
    leaderboard = JSON.parse(retrieveLeaderboard);
    // call sort here
    console.log(leaderboard);
  }
  let stringifiedLeaderboard = JSON.stringify(leaderboard);
  localStorage.setItem('leaderboard', stringifiedLeaderboard);
}

// // sort feature <--- USE ME ON INCOMING JSON parsedPlayer
leaderboard.sort((a,b) => b.score - a.score);

// After sorting, pop off any extras until the top three are left
while (leaderboard.length > 3) {
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
