/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc

let countSeconds = 0;
let timerId = 0;

window.addEventListener("DOMContentLoaded", instalEventColors);

function dropNavigationClick(event) {
  const element = event.getElementsByTagName("img")[0];
  const array = element.src.split("/");
  const name = array[array.length - 1];
  if (name == "arrowDown.png") {
    element.src = "../images/arrowUp.png";
  } else {
    element.src = "../images/arrowDown.png";
  }
}
function dropIndexNavigationClick(event) {
  const element = event.getElementsByTagName("img")[0];
  const array = element.src.split("/");
  const name = array[array.length - 1];
  if (name == "arrowDown.png") {
    element.src = "images/arrowUp.png";
  } else {
    element.src = "images/arrowDown.png";
  }
}
function mapLoad() {
  const preloader = document.getElementsByClassName("map-preloader")[0];
  preloader.classList.add("map-preloader-hidden");
}

function startTimer() {
  timerId = setInterval(function () {
    countSeconds++;
    printTimer();
  }, 1000);
}

function printTimer() {
  const seconds = document.getElementById("seconds");
  const minutes = document.getElementById("minutes");
  const hour = document.getElementById("hour");
  if (pageDate.filename == "timer.html") {
    hour.textContent = Math.floor(countSeconds / 3600); // 0
    minutes.textContent = Math.floor(
      (countSeconds - hour.textContent * 3600) / 60
    ); 
    seconds.textContent =
      countSeconds - (hour.textContent * 3600 + minutes.textContent * 60);
  }
}

function refreshTimer() {
  clearInterval(timerId);
  countSeconds = 0;
  startTimer();
}

function instalEventColors() {
  const submenu = document.getElementsByClassName("submenu");
  for (let index = 0; index < submenu.length; index++) {
    const menu = submenu[index];
    const navLinks = menu.getElementsByClassName("nav-item");
    for (let index = 0; index < navLinks.length; index++) {
      const element = navLinks[index];
      element.addEventListener("click", changeBgColor);
    }
  }
}

function changeBgColor(event) {
  clearBgColor();
  const element = event.path[2];
  element.classList.add("bg-secondary");
}

function clearBgColor() {
  const submenu = document.getElementsByClassName("submenu");
  for (let index = 0; index < submenu.length; index++) {
    const menu = submenu[index];
    const navLinks = menu.getElementsByClassName("nav-item");
    for (let index = 0; index < navLinks.length; index++) {
      const element = navLinks[index];
      element.classList.remove("bg-secondary");
    }
  }
}
