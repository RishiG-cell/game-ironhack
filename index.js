const gameIntro = document.querySelector("#game-intro");
const startBttn = document.querySelector("#start");
const gameScreen = document.querySelector("#game-container");

startBttn.addEventListener("click", () => {
  startGame();
});

function startGame() {
  gameIntro.style.display = "none";
  gameScreen.style.display = "flex";
}
