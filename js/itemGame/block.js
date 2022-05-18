class Block {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.oldX = x;
    this.oldY = y;
    this.size = size;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
  }

  setPosition(x, y) {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = x;
    this.y = y;
  }

  teleportOpponent() {
    let maxSizeWidth = gameSize / this.size;

    if (this.x < 0) {
      this.x = maxSizeWidth;
    } else if (this.x > maxSizeWidth) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = maxSizeWidth;
    } else if (this.y > maxSizeWidth) {
      this.y = 0;
    }
  }
}
