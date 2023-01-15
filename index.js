document.addEventListener("keypress", function(event){

  playDrum(event.key)

  buttonAnimation(event.key)

})

for (let i = 0; document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    playDrum(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML)
  });
}

function playDrum(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
  }
}
function buttonAnimation(key){
  var buttonClass = "." + key;
  var button = document.querySelector(buttonClass);
  button.classList.toggle("pressed");
  setTimeout(function(){
    button.classList.toggle("pressed")
  },100)
}
