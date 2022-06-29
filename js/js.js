
function dropNavigationClick(event) {
  let element = event.getElementsByTagName("img")[0];
  let array = element.src.split("/");
  let name = array[array.length - 1];
  if (name == "arrowDown.png") {
    element.src = "../images/arrowUp.png";
  } else {
    element.src = "../images/arrowDown.png";
  }
}
function dropIndexNavigationClick(event) {
  let element = event.getElementsByTagName("img")[0];
  let array = element.src.split("/");
  let name = array[array.length - 1];
  if (name == "arrowDown.png") {
    element.src = "images/arrowUp.png";
  } else {
    element.src = "images/arrowDown.png";
  }
}
function mapLoad() {

  let preloader = document.getElementsByClassName("map-preloader")[0];
  // let map=document.getElementsByClassName("map")[0]
  preloader.classList.add("map-preloader-hidden");
}

function setTimer() {
    sessionStorage.setItem("hour", "0");
    sessionStorage.setItem("minutes", "0");
    sessionStorage.setItem("seconds", "0");
  sessionStorage.setItem("IsSetTimer", "true");
  upTimer();
}

function upTimer() {
  let title = document.title;
  let hour = document.getElementById("hour");
  let seconds = document.getElementById("seconds");
  let minutes = document.getElementById("minutes");

   
    let countHour = parseInt(sessionStorage.getItem("hour"));
    let countMinutes = parseInt(sessionStorage.getItem("minutes"));
    let countSeconds = parseInt(sessionStorage.getItem("seconds"));
    if (title == "Timer") {
      hour.textContent = countHour;
      minutes.textContent = countMinutes;
      seconds.textContent = countSeconds;  
    }
    if (countSeconds < 59) {
      countSeconds++;
      if (title == "Timer") {
        seconds.textContent = countSeconds;
      }
    } else if (countMinutes < 59) {
      
      countMinutes++;
      if (title == "Timer") {
        seconds.textContent=0
        minutes.textContent = countMinutes;
        
      }
      countSeconds = 0;
      
    } else{ 
      countHour++;
        if (title == "Timer") {
            seconds.textContent=0
            minutes.textContent = 0;  
            hour.textContent = countHour;
        }
       
      countSeconds=0
      countMinutes=0
      
    }
    
    sessionStorage.setItem("hour", countHour);
    sessionStorage.setItem("minutes", countMinutes);
    sessionStorage.setItem("seconds", countSeconds);
  
}


window.addEventListener("load", function () {
  setInterval(function(){
    if (sessionStorage.getItem("IsSetTimer")) {
      upTimer();
    }
  },1000)
});
