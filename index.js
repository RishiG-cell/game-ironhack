const gameIntro = document.querySelector("#game-intro");
const startBttn = document.querySelector("#start");
const gameScreen = document.querySelector("#game-container");
const audio = document.querySelector("#audio");

startBttn.addEventListener("click", () => {
  startGame();
});

function startGame() {
  gameIntro.style.display = "none";
  gameScreen.style.display = "flex";
  audio.play();
  audio.volume = 0.01;
}
