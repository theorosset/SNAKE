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
  newBlockBody() {
    let { x, y } = this.body[this.body.length - 1];
    switch (direction) {
      case "right":
        x -= this.v;
        break;
      case "left":
        x += this.v;
        break;
      case "up":
        y += this.v;
        break;
      case "down":
        y -= this.v;
        break;
      default:
        break;
    }
    return { x, y };
  }

  getPoint() {
    const head = this.body[0];
    if (head.x === point.x && head.y === point.y) {
      point.randomPoint();
      const { x, y } = this.newBlockBody();
      this.addBlock(x, y);
    }
  }
  addBlock(x, y) {
    const block = new Block(x, y, this.blockSize);
    this.body.push(block);
  }

  ifSnakeBitesBody(body) {
    const head = this.body[0];
    return head.x === body.x && head.y === body.y;
  }

  update() {
    this.move();
    this.getPoint();

    for (let [i, b] of this.body.entries()) {
      const snakeBitesBody = this.ifSnakeBitesBody(b);

      if (i > 0) {
        const { oldX, oldY } = this.body[i - 1];
        b.setPosition(oldX, oldY);

        if (snakeBitesBody === true) {
          this.life -= 1;
          if (this.life === 0) {
            this.alive = false;
          }
        }
      }

      b.draw();
    }
  }
}
