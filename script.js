let clickedTime;
let createdTime;
let reactionTime;
let highScore = [];

function makeBox() {
  let hue =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  let time = Math.random() * 5000;
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let top = Math.random() * (windowHeight - 400) + 100;
  let left = Math.random() * (windowWidth - 200);
  let shape = Math.random() * 50;

  setTimeout(function () {
    document.getElementById("box").style.display = "block";
    document.getElementById("box").style.background = hue;
    document.getElementById("box").style.top = top + "px";
    document.getElementById("box").style.left = left + "px";
    document.getElementById("box").style.borderRadius = shape + "%";
    createdTime = Date.now();
  }, time);

  if (highScore.length > 0 && reactionTime == highScore[0]) {
    document.getElementById("highScore").style.color = "red";
  } else {
    document.getElementById("highScore").style.color = "white";
  }
}

document.getElementById("box").onclick = function () {
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime) / 1000;
  highScore.push(reactionTime);
  highScore.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("highScore").innerHTML = highScore[0];
  document.getElementById("time").innerHTML = reactionTime;
  this.style.display = "none";
  makeBox();
};

makeBox();
