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


const frontInput = document.querySelector(".rename_front");
const rightInput = document.querySelector(".rename_right");
const topInput = document.querySelector(".rename_top");
const backInput = document.querySelector(".rename_back");
const leftInput = document.querySelector(".rename_left");
const bottomInput = document.querySelector(".rename_bottom");


frontInput.addEventListener('input', function() {
    const updatedText = frontInput.value;
    const frontParagraph = document.querySelector(".text_front");
    frontParagraph.textContent = updatedText;
});

rightInput.addEventListener('input', function() {
    const updatedText = rightInput.value;
    const rightParagraph = document.querySelector(".text_right");
    rightParagraph.textContent = updatedText;
});

topInput.addEventListener('input', function() {
    const updatedText = topInput.value;
    const topParagraph = document.querySelector(".text_top");
    topParagraph.textContent = updatedText;
});

backInput.addEventListener('input', function() {
    const updatedText = backInput.value;
    const backParagraph = document.querySelector(".text_back");
    backParagraph.textContent = updatedText;
});

leftInput.addEventListener('input', function() {
    const updatedText = leftInput.value;
    const leftParagraph = document.querySelector(".text_left");
    leftParagraph.textContent = updatedText;
});

bottomInput.addEventListener('input', function() {
    const updatedText = bottomInput.value;
    const bottomParagraph = document.querySelector(".text_bottom");
    bottomParagraph.textContent = updatedText;
});