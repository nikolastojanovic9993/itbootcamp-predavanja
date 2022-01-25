console.log("Events");

//1. Dohvati HTML element na koji zelis da postavis osluskivac
let pKlikni = document.getElementById("klikni");

//2. Na element postavljamo osluskivac
pKlikni.addEventListener("click", () => {
    console.log("Jednom kliknuto na paragraf");
});

///////////////////////////////////////////////////

//1.
let pKlikniDva = document.getElementById("dvaKlika");

//2.
pKlikniDva.addEventListener("dblclick",() => {
    console.log("Dva puta kliknuto na paragraf");
});

///////////////////////////////////////////////////

//1.
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");

//2.
let res = 0;
let spanRes = document.getElementById("res");
btnPlus.addEventListener("click", () => {
    res++;
    //console.log(res);
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "blue";
    }
    else {
        spanRes.style.color = "red";
    }
});
btnMinus.addEventListener("click", () => {
    res--;
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "blue";
    }
    else {
        spanRes.style.color = "red";
    }
});

///////////////////

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

/////////////////////////////////////////////////

// DOM  
let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name = 'pol']");
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnPosalji.addEventListener("click", (e) => {
    e.preventDefault(); //da se ne reloaduje stranica
    //pravis promenljivu koja ce da sadrzi tekucu godinu
    let date = new Date();
    let tekucaGodina = date.getFullYear();
    //dodeljujes vrednost promenljivoj, tj pravis promenljivu od vrednosti koja se unese
    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    //posto je po defaultu to string iako je broj (godina rodjenja), moras da da promenis tip elementa u broj 
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue);
   
    let god = tekucaGodina - inputGodinaRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`;

    let checkedPol = document.querySelector(`input[name = "pol"]:checked`); // vraca HTML tag onog input polja na koje je kliknuto
    let checkedPolValue = checkedPol.value; //vraca vrednost iz selektovanog HTML taga

    if (checkedPolValue == "z") {
        pIspis.innerHTML += " i zenskog je pola";
    }
    else if (checkedPolValue == "m") {
        pIspis.innerHTML += " i muskog je pola";
    }
    else {
        pIspis.innerHTML += " i nije se opredelio za pol";
    }
});