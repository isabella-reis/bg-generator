const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#bgColor");
const currentStyle = document.getElementById('currentStyle')

function setGradient() {
  body.style.background =
    "linear-gradient(to bottom right," +
    color1.value +
    ", " +
    color2.value +
    ") no-repeat center center fixed";

  currentStyle.innerText = `background: linear-gradient(to bottom right, ${color1.value}, ${color2.value});`
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

