class Snake {
  constructor(size) {
    this.x = 0;
    this.y = 0;
    this.v = 1;
    this.blockSize = size;
    this.body = [];
    this.addBlock(this.x, this.y);
    this.life = 1;
    this.alive = true;
  }
  move() {
    const head = this.body[0];
    head.oldX = head.x;
    head.oldY = head.y;
    switch (direction) {
      case "right":
        head.x += this.v;
        break;
      case "left":
        head.x -= this.v;
        break;
      case "up":
        head.y -= this.v;
        break;
      case "down":
        head.y += this.v;
        break;
      default:
        break;
    }
    head.teleportOpponent();
  }

  addBlock(x, y) {
    const block = new Block(x, y, this.blockSize);
    this.body.push(block);
  }

  update() {
    this.move();

    for (let b of this.body) {
      b.draw();
    }
  }
}
