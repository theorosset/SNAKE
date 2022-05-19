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

//gestion du DOM
function getScoreAndDifficulty() {
  const score = document.querySelector("#point");
  const level = document.querySelector("#lvl");
  score.innerText = snake.body.length - 1;
  level.innerText = snake.lvl;
}

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

function main() {
  clear();
  point.draw();
  snake.update();
  getScoreAndDifficulty();
  if (snake.alive) {
    setTimeout(begin, speed);
  } else {
    alert("perdu");
  }
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function begin() {
  main();
}

begin();
