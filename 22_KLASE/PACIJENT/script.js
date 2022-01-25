import { Pacijent } from "./pacijenti.js"

let p1 = new Pacijent("Jelena", 1.66, 66);
let p2 = new Pacijent("Ana", 1.8, 72);
let p3 = new Pacijent("Pera", 1.9, 140);
let p4 = new Pacijent("Mika", 1.67, 57);
let p5 = new Pacijent("Mila", 1.5, 70);

let pacijenti = [p1, p2, p3, p4, p5];


//Ispisati podatke o pacijentu sa najmanjom
let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {
    let min = pacijenti[0]; //min je ceo objekat
    pacijenti.forEach(p => {
        if (min.tezina > p.tezina) {//ovde poredis tezinu od min sa tezinom tekuceg
            min = p; //cuvas ceo objekat, ne samo tezinu
        }
    });
    spanMinTezRez.innerHTML = min.stampajListu();
    // console.log(min);
    // min.stampaj();
});

// Ispisati podatke o pacijentu sa najvecom BMI vrednoscu
let btnMaxBMI = document.querySelector("#maxBMI");
let maxBMIRez = document.querySelector("#maxBMIRez");
btnMaxBMI.addEventListener("click", () => {
    let maxBMI = pacijenti[0]; //pretpostavka je da prvi pacijent ima maksimalni BMI
    for (let i = 1; i < pacijenti.length; i++) {
        if (maxBMI.bmi() < pacijenti[i].bmi()) {
            maxBMI = pacijenti[i];
        }
    }
    maxBMIRez.innerHTML = maxBMI.stampajListu();
});
