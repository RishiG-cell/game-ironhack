class BeerBullet {
  constructor(gameScreen, positionX, positionY) {
    this.gameScreen = gameScreen;
    this.left = positionX;
    this.top = positionY;
    this.width = 50;
    this.height = 50;
    this.element = document.createElement("img");
    this.element.src = "/game-ironhack/images/beer.webp";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top = this.top - 4;
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
