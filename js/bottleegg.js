class BottleEgg {
  constructor(gameScreen, width, height) {
    this.gameScreen = gameScreen;
    this.possibleXValues = [
      125, 420, 440, 859, 72, 920, 540, 634, 1154, 1140, 760, 120, 180, 980,
      200, 240, 270, 300, 420, 440, 509, 62, 720, 840, 934, 1154, 1140, 760, 12,
      120, 420, 440, 859, 72, 920, 540, 634, 1154, 1140, 760, 120, 180, 980,
      200, 240, 270, 300, 420, 440, 509, 62, 720, 840, 934, 1154, 1140, 760, 12,
    ];
    this.index = Math.floor(Math.random() * this.possibleXValues.length);
    this.left = this.possibleXValues[this.index];
    this.top = -200;
    this.width = width;
    this.height = height;
    this.element = document.createElement("img");
    this.element.src = "images/bottle.webp";
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
