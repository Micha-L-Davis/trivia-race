'use string';


let leaderboard = [];
updateLeaderboard();
displayLeaderboard();

// Retrieve saved leaderboard, if it exists, and sort the data. Trim any extra entries and save to local storage
function updateLeaderboard() {
  let retrieveLeaderboard = localStorage.getItem('leaderboard');

  if (retrieveLeaderboard) {
    leaderboard = JSON.parse(retrieveLeaderboard);

    leaderboard.sort((a,b) => b.score - a.score);
    while (leaderboard.length > 3) {
      leaderboard.pop();
    }
  }

  let stringifiedLeaderboard = JSON.stringify(leaderboard);
  localStorage.setItem('leaderboard', stringifiedLeaderboard);
}

// Display leaderboard
function displayLeaderboard() {

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
    td3.textContent = Math.ceil(leaderboard[i].score);
    tr.appendChild(td3);
  }

}

