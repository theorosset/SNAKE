//recupéeration du canvas et initialisation du context
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

//terrain du snake
const gameSize = 600;
const square = 20;

//constructeur
const snake = new Snake(square);
const block = new Block(square);

//direction du serpent
let direction = "right";

//detection de la touche presser (fleche)
document.addEventListener("keydown", (e) => {
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
  snake.update();
  if (snake.alive) {
    setTimeout(begin, 250);
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
