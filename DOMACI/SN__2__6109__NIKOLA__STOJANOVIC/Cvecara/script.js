let inputRuze = document.getElementById("ruze");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");

// let inputBombonjera = document.getElementById("bombonjera");
// let inputCokolada = document.getElementById("cokolada");
// let inputSampanjac = document.getElementById("sampanjac");

let btnIzracunaj = document.getElementById("izracunaj");

btnIzracunaj.addEventListener("click", (e) => {
    e.preventDefault();
    let inputRuzeValue = inputRuze.value;
    inputRuzeValue = parseInt(inputRuzeValue || 0);

    let inputLjiljaniValue = inputLjiljani.value;
    inputLjiljaniValue = parseInt(inputLjiljaniValue || 0);

    let inputGerberiValue = inputGerberi.value;
    inputGerberiValue = parseInt(inputGerberiValue || 0); 

    let dodaci = document.getElementsByClassName("dodaci1");
    let dodaciNiz = Array.from(dodaci);
    let cena = 0;
    let pIspis = document.getElementById("pIspis")
    for (let i = 0; i < dodaciNiz.length; i++) {
        if (dodaciNiz[i].checked == true) {
            cena += 500;
            pIspis.innerHTML += "+";
            pIspis.innerHTML += dodaciNiz[i].value 
            pIspis.innerHTML += "<br>"
            
        }
    }
    console.log(cena);

    let checkedPlacanje = document.querySelector(`input[name = "placanje"]:checked`);
    let checkedPlacanjeValue = checkedPlacanje.value;
    console.log(inputRuzeValue, inputLjiljaniValue, inputGerberiValue, checkedPlacanjeValue);

    let divRuze = document.getElementById("ruzeDiv");
    for (let i = 0; i < inputRuzeValue; i++) {
        divRuze.innerHTML += '<img src="slike/ruza.jpg">';
    }
 

    let divLjiljani = document.getElementById("ljiljaniDiv");
    for (let i = 0; i < inputLjiljaniValue; i++) {
        divLjiljani.innerHTML += '<img src="slike/ljiljan.jfif">';
    }

    let divGerberi = document.getElementById("gerberiDiv");
    for (let i = 0; i < inputGerberiValue; i++) {
        divGerberi.innerHTML += '<img src="slike/gerber.jfif">';
    }

    cena += inputRuzeValue * 150 + inputLjiljaniValue * 120 + inputGerberiValue * 70;
    let cenaP = cena - (cena / 100 * 10);
    let pCena = document.getElementById("cena");
    if (checkedPlacanjeValue == "kes") {
        pCena.innerHTML = `Cena Vaše porudžbine je: ${cena} din.`
    }
    else if (checkedPlacanjeValue == "kartica" && cena > 2000) {
        pCena.innerHTML = `Cena bez popusta je: ${cena} din.`;
        pCena.innerHTML += "<br>";
        pCena.innerHTML += `Cena sa popustom je: ${cenaP} din.`
    }
 

});
