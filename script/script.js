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


const buttons = document.querySelectorAll('.button_anzahl button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
      // Esconde todos os inputs
      document.querySelectorAll('.zwei_personen, .drei_personen, .sechs_personen').forEach(inputDiv => {
          inputDiv.style.display = 'none';
      });

      // Exibe os inputs correspondentes ao botão clicado
      const buttonClass = button.className;
      const inputsToShow = document.querySelector('.' + buttonClass + '_personen');
      
      // Verifica se a classe do botão é 'sechs'
      if (buttonClass === "sechs") {
          inputsToShow.style.display = 'grid';
      } else {
          inputsToShow.style.display = 'block';
      }
      
        

        // Define os textos dos parágrafos de acordo com os inputs
        const frontInput = inputsToShow.querySelector(".rename_front");
        const rightInput = inputsToShow.querySelector(".rename_right");
        const topInput = inputsToShow.querySelector(".rename_top");
        const backInput = inputsToShow.querySelector(".rename_back");
        const leftInput = inputsToShow.querySelector(".rename_left");
        const bottomInput = inputsToShow.querySelector(".rename_bottom");

        const frontParagraph = document.querySelector(".text_front");
        const rightParagraph = document.querySelector(".text_right");
        const topParagraph = document.querySelector(".text_top");
        const backParagraph = document.querySelector(".text_back");
        const leftParagraph = document.querySelector(".text_left");
        const bottomParagraph = document.querySelector(".text_bottom");

        frontInput.addEventListener('input', function() {
            frontParagraph.textContent = frontInput.value;
        });

        rightInput.addEventListener('input', function() {
            rightParagraph.textContent = rightInput.value;
        });

        topInput.addEventListener('input', function() {
            topParagraph.textContent = topInput.value;
        });

        backInput.addEventListener('input', function() {
            backParagraph.textContent = backInput.value;
        });

        leftInput.addEventListener('input', function() {
            leftParagraph.textContent = leftInput.value;
        });

        bottomInput.addEventListener('input', function() {
            bottomParagraph.textContent = bottomInput.value;
        });
    });
});
