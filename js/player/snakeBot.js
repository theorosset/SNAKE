class SnakeBot {
  constructor(size) {
    this.x = 10;
    this.y = 28;
    this.v = 1;
    this.blockSize = size;
    this.body = [];
    this.addBlock(this.x, this.y);
    this.goX = 0;
    this.goY = 0;
    this.lvl = 1;
  }

  //envoie du bot a une certaine position une fois atteint un point aléatoire est générer
  goToPosition() {
    const maxSizeWidth = gameSize / this.blockSize;
    const head = this.body[0];
    if (this.goX !== head.x || this.goY !== head.y) {
      if (this.goX < head.x) {
        head.x -= this.v;
      } else if (this.goX > head.x) {
        head.x += this.v;
      }
      if (this.goY < head.y) {
        head.y -= this.v;
      } else if (this.goY > head.y) {
        head.y += this.v;
      }
    } else {
      this.goX = Math.round((Math.random() * gameSize) % maxSizeWidth);
      this.goY = Math.round((Math.random() * gameSize) % maxSizeWidth);
    }
  }
  //ajout de la tête
  addBlock(x, y) {
    const block = new BlockBot(x, y, this.blockSize);
    this.body.push(block);
  }

  update() {
    this.goToPosition();
    for (let b of this.body) {
      b.draw();
    }
  }
}
