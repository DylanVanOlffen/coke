// JavaScript Document
//dlo voor het hamburger menu
console.log("hi");

var MenuButton = document.querySelector("nav button:nth-of-type(1)")
var NavMenu = document.querySelector("nav ul")
var DiabetesGif = document.createElement('img')

//https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html
// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

//https://tenor.com/view/diabetes-stare-intensifies-gif-4484736
DiabetesGif.src = 'images/old-man-diabetes.gif'


MenuButton.addEventListener("click", ToggleMenu);

function ToggleMenu() {

    NavMenu.classList.toggle("ShowMenu");
    console.log("menuuuu")
}

DiabetesGif.setAttribute("style", "position:absoloute; width:50em; top:0;");
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function activateCheats() {
  
    //https://www.youtube.com/watch?v=h8PqfsWeKbQ//

    var audio = new Audio('sounds/Rachel_Congratulations.mp3');
    audio.play();

    setTimeout(() => { alert("Congrats, you now have diabetes") }, 500) ;

    document.querySelector('section').appendChild(DiabetesGif)

  }
  

