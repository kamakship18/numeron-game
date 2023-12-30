// Iteration 5: Store the player score and display it on the game over screen
let totalScore = localStorage.getItem("score");
// console.log(score);
let scoreBoard = document.getElementById("score-board");
let playagain = document.getElementById("play-again-button");
scoreBoard.innerHTML = totalScore;
playagain.onclick = (evt) => {
  location.href = "./game.html";
}; 