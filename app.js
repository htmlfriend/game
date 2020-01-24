let $start = document.querySelector("#start");
let $game = document.querySelector(".game");

let score = 0;
$start.addEventListener("click", startGame);
$game.addEventListener("click", handlerBox);
function startGame() {
  $start.classList.add("hide");
  $game.style.backgroundColor = "#ffffff";
  generateBox();
}

function generateBox() {
  $game.innerHTML = "";
  let box = document.createElement("div");
  box.setAttribute("data-box", "true");
  box.style.height = box.style.width = "50px";
  box.style.backgroundColor = "red";
  box.style.position = "absolute";
  box.style.top = "0";
  box.style.left = "0";
  box.style.cursor = "pointer";
  $game.insertAdjacentElement("afterbegin", box);
}
function handlerBox(event) {
  if (event.target.dataset.box) {
    generateBox();
    score++;
  }
}
