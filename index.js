let container = document.createElement("div");
let body = document.querySelector("body");
let wheel = document.createElement("div");
let button = document.createElement("div");
let textArea = document.createElement("textArea");
let getbutton = document.createElement("div");

let deg = 0;

getbutton.classList.add("getbutton");
wheel.classList.add("wheel");
button.classList.add("button");
button.innerText = "start";
container.classList.add("container");

const colors = ["red", "blue", "green", "yellow"];
const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

wheel.classList.add("wheel");

body.appendChild(container);
container.appendChild(textArea);

let result = "";

function draw() {
  for (let i = 0; i < items.length; i++) {
    let colorIndex = i;
    let deg = Math.floor(360 / items.length);
    if (i === items.length - 1) {
      colorIndex =
        colorIndex - colors.length * Math.floor(i / colors.length) + 1;
    } else if (colorIndex >= colors.length) {
      colorIndex = colorIndex - colors.length * Math.floor(i / colors.length);
    }

    result = result + ` ${colors[colorIndex]}`;
    "" + ` red` + `0deg 40deg`;
    "red 0deg 40deg," + "blue" + `40deg + 80deg`;
    if (i === items.length - 1) {
      result = result + ` ${deg * i}deg ${deg * (i + 1)}deg`;
    } else {
      result = result + ` ${deg * i}deg ${deg * (i + 1)}deg,`;
    }
  }
  wheel.style.background = `conic-gradient(${result})`;
}

function getItems() {
  let text = textArea.value;
  items.split("\n");
  draw();
}

container.appendChild(wheel);
container.appendChild(button);
container.appendChild(textArea);

function rotatewheel() {
  deg = deg + 1440 + Math.random() * 360;
  wheel.style.transform = `rotate(${deg}deg)`;
}

button.onclick = rotatewheel;
button.onclick = getItems;
