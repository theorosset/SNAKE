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
    this.lvl = 1;
  }
  //gestion du deplacement du serpent + passage d'un coter a l'autre
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
  //gestion du mouvement du corp
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
  //si un point est recupérer on ajoute un block au body
  getPoint() {
    const head = this.body[0];
    if (head.x === point.x && head.y === point.y) {
      point.randomPoint();
      const { x, y } = this.newBlockBody();
      this.addBlock(x, y);
    }
  }
  //perdu si on touche le bot (uniquement la tête)
  ifTuchBot() {
    const head = this.body[0];
    const headBot = snakeBot.body[0];
    if (head.x === headBot.x && head.y === headBot.y && this.lvl >= 3) {
      this.life -= 1;
    }
  }
  // si la vie du serpent vaut 0 fin de la partie
  snakeDead() {
    if (this.life === 0) {
      snake.alive = false;
    }
  }
  //augmentation du niveau selon score
  initLvl() {
    const head = this.body[0];
    if (head.x === point.x && head.y === point.y) {
      point.point += 1;
      console.log(point.point);
    } else if (point.point === 10) {
      speed -= 25;
      this.lvl += 1;
      point.point = 0;
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
    this.initLvl();
    this.ifTuchBot();
    this.getPoint();
    this.snakeDead();

    for (let [i, b] of this.body.entries()) {
      const snakeBitesBody = this.ifSnakeBitesBody(b);

      if (i > 0) {
        const { oldX, oldY } = this.body[i - 1];
        b.setPosition(oldX, oldY);

        if (snakeBitesBody === true) {
          this.life -= 1;
        }
      }

      b.draw();
    }
  }
}
