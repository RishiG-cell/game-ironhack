const gameIntro = document.querySelector("#game-intro");
const startBttn = document.querySelector("#start");
const gameScreen = document.querySelector("#game-screen");
const audio = document.querySelector("#audio");
const muteBtn = document.querySelector("#mute");
const restartBtn = document.querySelector("#restart-button");
let game;

function startGame() {
  game1 = new Game();
  game1.start();
  //audio
  audio.play();
  audio.volume = 0.01;
}

startBttn.addEventListener("click", () => {
  startGame();
});

restartBtn.addEventListener("click", () => {
  console.log("beep");
  // window.location.reload;
  startGame();
});

muteBtn.addEventListener("click", () => {
  audio.pause();
});
muteBtn.addEventListener("dblclick", () => {
  audio.play();
});

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    game1.player.directionX = -8;
  }
  if (event.code === "ArrowRight") {
    game1.player.directionX = 8;
  }
  if (event.code === "ArrowUp") {
    game1.player.directionY = -8;
  }
  if (event.code === "ArrowDown") {
    game1.player.directionY = 8;
  }
  if (event.code === "Space") {
    const playerLeft = game1.player.left;
    const playerRight = game1.player.top;
    game1.player.beer.push(
      new BeerBullet(game1.gameScreen, playerLeft, playerRight)
    );
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") {
    game1.player.directionX = 0;
  }
  if (event.code === "ArrowRight") {
    game1.player.directionX = 0;
  }
  if (event.code === "ArrowUp") {
    game1.player.directionY = 0;
  }
  if (event.code === "ArrowDown") {
    game1.player.directionY = 0;
  }
});
