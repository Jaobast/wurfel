var cube = document.getElementsByClassName('cube')[0];

var min = 1;
var max = 24;

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min));
}

cube.onclick = function() {
  var xRand = getRandom(max, min) * 90;
  var yRand = getRandom(max, min) * 90;
    
  cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

const inputs = document.querySelectorAll('[id^="rename_"]');
const texts = document.querySelectorAll('[class^="text_"]');

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', function() {
      texts[i].innerHTML = inputs[i].value;
  });
}