
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

let countSeconds=0
function startTimer() {
  setInterval(function(){
    printTimer()
    countSeconds++
  },1000)
}

function printTimer(){
  let seconds=document.getElementById('seconds') 
  let minutes=document.getElementById('minutes')
  let hour=document.getElementById('hour')
  hour.textContent=Math.floor(countSeconds/3600) //0 
  minutes.textContent= Math.floor((countSeconds-hour.textContent*3600)/60) //0
  seconds.textContent=countSeconds-(hour.textContent*3600+minutes.textContent*60)

}

window.addEventListener('hashchange',function(){
 if(this.document.title=='Timer'){
  startTimer()
 }
})

