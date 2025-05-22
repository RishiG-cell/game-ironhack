class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameContainer = document.getElementById("game-container");
    this.gameOverScreen = document.getElementById("game-over");
    this.livesElement = document.getElementById("lives");
    this.scoreElm = document.getElementById("beers-score");
    this.livesEndElement = document.getElementById("lives-end");
    this.scoreEndElm = document.getElementById("beers-end-score");
    this.player = new Player(this.gameScreen, 750, 750, 100, 150);
    this.height = 800;
    this.width = 1000;
    this.obstacles = [new Obstacle(this.gameScreen, 30, 40)];
    this.orange = [new Orange(this.gameScreen, 50, 40)];
    this.venomObj = [];
    this.bottlePoints = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.counter = 0;
    this.amountObs = 80;
  }

  start() {
    this.livesElement.innerText = this.lives;
    this.scoreElm.innerText = this.score;
    this.gameOverScreen.style.display = "none";
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.gameContainer.style.display = "flex";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();
    this.counter++;
    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }

  update() {
    this.player.move();

    if (this.counter % this.amountObs === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen, 30, 40));
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();
      for (let j = 0; j < this.player.beer.length; j++) {
        const currBeer = this.player.beer[j];
        currBeer.move();
        if (currBeer.didCollide(currentObstacle)) {
          currentObstacle.element.remove();
          currBeer.element.remove();
          this.obstacles.splice(i, 1);
          i--;
          this.player.beer.splice(j, 1);
          j--;
        }
      }

      if (this.player.didCollide(currentObstacle)) {
        console.log("mangood");
        currentObstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        this.lives--;
        this.livesElement.innerText = this.lives;
        this.player.element.classList.add("spin");
        setTimeout(() => {
          this.player.element.classList.remove("spin");
        }, 1000);
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      if (currentObstacle.top > 800) {
        currentObstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }
    if (this.counter % this.amountObs === 0) {
      this.orange.push(new Orange(this.gameScreen, 50, 40));
    }

    for (let i = 0; i < this.orange.length; i++) {
      const currentObstacle = this.orange[i];
      currentObstacle.move();

      if (this.player.didCollide(currentObstacle)) {
        console.log("juiced");
        currentObstacle.element.remove();
        this.orange.splice(i, 1);
        i++;
        this.score++;
        if (this.score % 10 === 0 && this.score !== 0) {
          this.venomObj.push(new Venom(this.gameScreen, 40, 70));
        }
        if (this.score % 15 === 0 && this.score !== 0) {
          this.bottlePoints.push(new BottleEgg(this.gameScreen, 100, 70));
        }
        this.scoreElm.innerText = this.score;
        if (this.score % 2 === 0) {
          this.amountObs = this.amountObs - 5;
        }
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      if (currentObstacle.top > 800) {
        currentObstacle.element.remove();
        this.orange.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < this.bottlePoints.length; i++) {
      const currentObstacle = this.bottlePoints[i];
      currentObstacle.move();

      if (this.player.didCollide(currentObstacle)) {
        currentObstacle.element.remove();
        this.bottlePoints.splice(i, 1);
        i++;
        this.score = this.score + 10;
        this.scoreElm.innerText = this.score;
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      if (currentObstacle.top > 800) {
        currentObstacle.element.remove();
        this.bottlePoints.splice(i, 1);
        i--;
      }
    }

    for (let i = 0; i < this.venomObj.length; i++) {
      const currentObstacle = this.venomObj[i];
      currentObstacle.move();
      for (let j = 0; j < this.player.beer.length; j++) {
        const currBeer = this.player.beer[j];
        currBeer.move();
        if (currBeer.didCollide(currentObstacle)) {
          currentObstacle.element.remove();
          currBeer.element.remove();
          this.venomObj.splice(i, 1);
          i--;
          this.player.beer.splice(j, 1);
          j--;
        }
      }

      if (this.player.didCollide(currentObstacle)) {
        console.log("venomed");
        currentObstacle.element.remove();
        this.venomObj.splice(i, 1);
        i--;
        this.lives = 0;
        this.livesElement.innerText = this.lives;
        this.player.element.classList.add("spin");
        setTimeout(() => {
          this.player.element.classList.remove("spin");
        }, 1000);
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      if (currentObstacle.top > 800) {
        currentObstacle.element.remove();
        this.venomObj.splice(i, 1);
        i--;
      }
    }
  }
  gameOver() {
    this.player.element.remove();
    this.obstacles.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });
    this.orange.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });
    this.bottlePoints.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });
    this.player.beer.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });
    this.venomObj.forEach((oneObstacle) => {
      oneObstacle.element.remove();
    });

    this.gameScreen.style.display = "none";
    this.gameContainer.style.display = "none";
    this.gameOverScreen.style.display = "block";
    audio.pause();
    this.scoreEndElm.innerText = this.score;
  }
}
