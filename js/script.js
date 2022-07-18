/* eslint-disable require-jsdoc */

// eslint-disable-next-line require-jsdoc

let countSeconds = 0;
let timerId = 0;

function dropNavigationClick(event) {
  event.classList.toggle('arrow-down');
  event.classList.toggle('arrow-up');
}

function mapLoad() {
  const preloader = document.getElementById('map-preloader');
  if (preloader) {
    preloader.classList.add('map-preloader-hidden');
  }
}

function startTimer() {
  if (countSeconds == 0) {
    timerId = setInterval(function() {
      countSeconds++;
      printTimer();
    }, 1000);
  } else {
    refreshTimer();
  }
}

function printTimer() {
  const seconds = document.getElementById('seconds');
  const minutes = document.getElementById('minutes');
  const hour = document.getElementById('hour');
  if (seconds) {
    hour.textContent = Math.floor(countSeconds / 3600);
    minutes.textContent = Math.floor(
        (countSeconds - hour.textContent * 3600) / 60,
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

function changeBgColor(event) {
  clearBgColor();
  if (event.target.tagName == 'A') {
    event.path[2].classList.add('bg-secondary');
  }
}

function clearBgColor() {
  const nav = document.getElementsByClassName('submenu');
  for (let index = 0; index < nav.length; index++) {
    const element = nav[index].getElementsByTagName('li');
    for (let index = 0; index < element.length; index++) {
      element[index].classList.remove('bg-secondary');
    }
  }
}

window.addEventListener('hashchange', clearBgColor);
