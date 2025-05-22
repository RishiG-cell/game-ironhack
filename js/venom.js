class Venom {
  constructor(gameScreen, width, height) {
    this.gameScreen = gameScreen;
    this.possibleXValues = [
      120, 400, 488, 850, 750, 950, 500, 600, 1100, 1150, 700, 150, 180, 980,
      200, 240, 270, 300, 400, 488, 500, 600, 700, 800, 900, 1000, 1100, 220,
      1150,
    ];
    this.index = Math.floor(Math.random() * this.possibleXValues.length);
    this.left = this.possibleXValues[this.index];
    this.top = -200;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");
    this.element.src = "images/venomimg.jpg";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
    this.speed = 3;
  }

  move() {
    this.top = this.top + this.speed;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const beerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      beerRect.left < obstacleRect.right &&
      beerRect.right > obstacleRect.left &&
      beerRect.top < obstacleRect.bottom &&
      beerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
