const bttnZwei = document.querySelector(".zwei");

function clickZwei() {
    const bttns = document.querySelectorAll("#rename button");
    bttns.forEach(bttn => {
        bttn.style.display = "none";
    });

    const inputs = document.querySelector(".zwei_personen");
    inputs.style.display= "inline";
}

bttnZwei.addEventListener("click", clickZwei);