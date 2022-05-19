class Point {
  constructor(size) {
    this.sizePoint = size;
    this.randomPoint();
    this.point = 0;
  }

  randomPoint() {
    let maxSizeWidth = gameSize / this.sizePoint;
    this.x = Math.round((Math.random() * gameSize) % maxSizeWidth);
    this.y = Math.round((Math.random() * gameSize) % maxSizeWidth);
    this.limitOfRandomNumber();
    console.log(this.x, this.y);
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(
      this.x * this.sizePoint,
      this.y * this.sizePoint,
      this.sizePoint,
      this.sizePoint
    );
  }
  limitOfRandomNumber() {
    if (this.x >= 30) {
      return (this.x -= 2);
    } else if (this.x <= 2) {
      return (this.x += 2);
    }

    if (this.y >= 30) {
      return (this.y -= 2);
    } else if (this.y <= 2) {
      return (this.y += 2);
    }
  }
}
