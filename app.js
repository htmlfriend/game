let $start = document.querySelector("#start");
let $game = document.querySelector(".game");
let $time = document.querySelector("#time");
let $timeHeader = document.querySelector("#time-header");
let $resultHeader = document.querySelector("#result-header");
let $result = document.querySelector("#result");
let $gameTime = document.querySelector("#game-time");
let score = 0;
let isGameStarted = false;
let arrColors = [
  "black",
  "blue",
  "red",
  "orange",
  "green",
  "lightblue",
  "pink"
];

$start.addEventListener("click", startGame);
$game.addEventListener("click", handlerBox);
$gameTime.addEventListener("input", setGameTime);
setGameTime();
function startGame() {
  score = 0;
  setGameTime();
  isGameStarted = true;
  hide($start);
  $game.style.backgroundColor = "#ffffff";
  $gameTime.setAttribute("disabled", "true");
  let interval = setInterval(function() {
    let time = parseFloat($time.textContent);
    if (time <= 0) {
      //end game
      clearInterval(interval);
      endGame();
    } else {
      $time.textContent = (time - 0.1).toFixed(1);
    }
  }, 100);
  generateBox();
}

function generateBox() {
  $game.innerHTML = "";
  let box = document.createElement("div");
  box.setAttribute("data-box", "true");
  let boxSize = getRandom(30, 100);
  let gameSize = $game.getBoundingClientRect();
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;
  box.style.height = box.style.width = boxSize + "px";
  box.style.backgroundColor = arrColors[getRandom(0, arrColors.length)];
  box.style.position = "absolute";
  box.style.top = getRandom(maxTop, 0) + "px";
  box.style.left = getRandom(maxLeft, 0) + "px";
  box.style.cursor = "pointer";
  $game.insertAdjacentElement("afterbegin", box);
}
function handlerBox(event) {
  if (isGameStarted) {
    if (event.target.dataset.box) {
      generateBox();
      score++;
    } else {
      return false;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function endGame() {
  hide($timeHeader);
  show($resultHeader);
  isGameStarted = false;
  show($start);
  $game.style.backgroundColor = "#ccc";
  $game.innerHTML = "";
  setGameScore();
  $gameTime.removeAttribute("disabled");
}

function setGameScore() {
  $result.textContent = score.toString();
}
function setGameTime() {
  let time = parseInt($gameTime.value);
  $time.textContent = time.toFixed(1);
  hide($resultHeader);
  show($timeHeader);
}

function show($el) {
  $el.classList.remove("hide");
}

function hide($el) {
  $el.classList.add("hide");
}
