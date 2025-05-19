class Obstacle {
  constructor(gameScreen, width, height) {
    this.gameScreen = gameScreen;
    this.possibleXValues = [
      120, 400, 488, 500, 600, 700, 150, 180, 200, 240, 270, 300, 400, 488, 500,
      600, 700,
    ];
    this.index = Math.floor(Math.random() * this.possibleXValues.length);
    this.left = this.possibleXValues[this.index];
    this.top = -200;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");
    this.element.src = "images/mango.webp";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top = this.top + 3;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
