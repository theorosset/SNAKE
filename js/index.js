//recupéeration du canvas et initialisation du context
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//terrain du snake et sa vitesse
const gameSize = 600;
const square = 20;
let speed = 250;
//constructeur
const snake = new Snake(square);
const point = new Point(square);
const snakeBot = new SnakeBot(square);

//gestion du DOM
function getScoreAndDifficulty() {
  const score = document.querySelector("#point");
  const level = document.querySelector("#lvl");
  score.innerText = snake.body.length - 1;
  level.innerText = snake.lvl;
}

//gestion du bot
function botControl() {
  snakeBot.update();
}
function beginBot() {
  botControl();
}

//gestion de la direction
let direction = "right";
//detection de la touche presser (fleche)
document.addEventListener("keydown", (e) => {
  e.stopPropagation();
  switch (e.key) {
    case "ArrowLeft":
      direction = "left";
      break;
    case "ArrowRight":
      direction = "right";
      break;
    case "ArrowUp":
      direction = "up";
      break;
    case "ArrowDown":
      direction = "down";
      break;
    default:
      break;
  }
});

function restartSnake() {
  const body = snake.body.length - 1;

  return (
    snake.body.splice(1, body),
    (snake.life = 1),
    (snake.alive = true),
    (snake.lvl = 1),
    (speed = 250)
  );
}

function main() {
  clear();
  point.draw();
  snake.update();

  getScoreAndDifficulty();
  if (snake.alive) {
    setTimeout(begin, speed);
  } else {
    alert("perdu");
    point.point = 0;
    restartSnake();
    begin();
  }
  if (snake.lvl >= 3) {
    botControl();
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function begin() {
  main();
}
begin();
