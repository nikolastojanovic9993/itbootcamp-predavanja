let pitanje1 = {
    tekst: "The amount of light or darkness on a photograph is known as the:",
    odgovori: ["Exposure", "Shutter Speed", "Contrast", "Sharpness"],
    indeksKorektnogOdgovora: 0,
};

let pitanje2 = {
    tekst: "In a low light environment, the ISO should be set: ",
    odgovori: ["The highest setting there is on that particular camera", "The lowest setting there is on that particular camera", "Between 400 and 1600, depending on the camera", "About f/2.8"],
    indeksKorektnogOdgovora: 2,
};

let pitanje3 = {
    tekst: "The amount of light passing through a lens is defined by the:",
    odgovori: ["Shutter speed", "Aperture", "Film speed", "Exposure"],
    indeksKorektnogOdgovora: 1,
};

let pitanje4 = {
    tekst: "Perfect exposure is a result of the right mixture of:",
    odgovori: ["Shutter speed + aperture + resolution", "Film speed + aperture + exposure", "Exposure + aperture + shutter speed", "Aperture + shutter speed + film speed"],
    indeksKorektnogOdgovora: 3,
};

let pitanje5 = {
    tekst: "What is the unit of measurement for light in photography?",
    odgovori: ["Apertures", "Shutter speeds", "Candelabras", "Stops"],
    indeksKorektnogOdgovora: 3,
};

let pitanje6 = {
    tekst: "What is Aperture measured in?",
    odgovori: ["Spots", "Stops", "F Numbers", "Fractions"],
    indeksKorektnogOdgovora: 2,
};

let pitanje7 = {
    tekst: "What is shutter speed measured in?",
    odgovori: ["Stops", "F Numbers", "Seconds", "Exposures"],
    indeksKorektnogOdgovora: 2,
};

let pitanje8 = {
    tekst: "If a shutter speed is 1/100, what is twice as quick?",
    odgovori: ["2/50", "1/200", "1/50", "1/500"],
    indeksKorektnogOdgovora: 1,
};

let pitanje9 = {
    tekst: "When taking a photo at a gig, which camera mode should you be on?",
    odgovori: ["Sport", "Manual", "Aperture", "Macro"],
    indeksKorektnogOdgovora: 1,
};

let pitanje10 = {
    tekst: "A low aperture would create:",
    odgovori: ["A smaller depth of field", "A larger depth of field", "Aperture doesn't change the depth of field", "Better exposure"],
    indeksKorektnogOdgovora: 3,
};

let pitanje11 = {
    tekst: "The balancing of light within a photograph is known as the:",
    odgovori: ["White balance", "The aperture", "The shutter speed", "The exposure"],
    indeksKorektnogOdgovora: 3,
};

let pitanje12 = {
    tekst: "Which is the largest aperture?",
    odgovori: ["1.4", "2.8", "1600", "1/300"],
    indeksKorektnogOdgovora: 0,
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12];


function random(arr) {
    let n = arr.length;
    i = -1;
    let j;
    let t;
    while (++i < n) {
        j = Math.floor(Math.random() * n);
        t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
    }
}
random(pitanja);
let divPitanja = document.createElement("div");
    divPitanja.classList.add("divPitanja");
    document.body.appendChild(divPitanja);
    let naslov = document.createElement("h1");
    naslov.appendChild(document.createTextNode("Photography quiz"))
    naslov.classList.add("naslov");
    divPitanja.appendChild(naslov);


let ispisiPitanja = arr => {      
    

    arr.slice(-5).forEach((el, e) => {

        let forma = document.createElement("form");
        let postaviPitanje = document.createElement("p");
        forma.appendChild(postaviPitanje);

        divPitanja.appendChild(forma);
        

        let tekstP = `${e + 1}.`+ el.tekst;
        postaviPitanje.appendChild(document.createTextNode(tekstP));

        let tacan = el.indeksKorektnogOdgovora;

        for (let i = 0; i < el.odgovori.length; i++) {


            let odgovor = document.createElement("input");
            let odgovorT = document.createElement("label");
            let br = document.createElement("br");
            let odgovorTT = `${el.odgovori[i]}`;
            odgovor.setAttribute("for", `${el.odgovori[i]}`)
            
            odgovorT.appendChild(document.createTextNode(odgovorTT));
            odgovor.setAttribute("type", "radio");
            odgovor.setAttribute("name", `${e}`)
            odgovor.setAttribute("id", `${el.odgovori[i]}`)
            forma.appendChild(odgovor);
            forma.appendChild(odgovorT);
            forma.appendChild(br);
            if (i == tacan) {
                odgovor.classList.add("t");
            }
        }
    });
}
ispisiPitanja(pitanja);

let btnPosalji = document.createElement("button");
btnPosalji.appendChild(document.createTextNode("Check answers"));
btnPosalji.classList.add("posalji");

let btnReset = document.createElement("button");
btnReset.appendChild(document.createTextNode("Restart"));
btnReset.setAttribute("type", "reset");
btnReset.setAttribute("onClick", "document.location.reload()")
btnReset.classList.add("reset");
let divBtn = document.createElement("div");
divBtn.classList.add("divBtn");
divPitanja.appendChild(divBtn);
divBtn.appendChild(btnPosalji);
divBtn.appendChild(btnReset);
let divIspis = document.createElement("div")
divIspis.classList.add("divIspis");
divPitanja.appendChild(divIspis);
let pIspis = document.createElement("p");


let tacniOdg = document.getElementsByClassName("t");


let onesposobi = () => {
    let o = document.querySelectorAll("input");
    for (let i = 0; i < o.length; i++) {
        o[i].disabled = true;
    }
}

btnPosalji.addEventListener("click", () => {
    onesposobi();
    btnPosalji.disabled = true;
    for (let i = 0; i < tacniOdg.length; i++) {
        if (tacniOdg[i].checked) {
            let pIspis = document.createElement("p");
            pIspis.classList.add("tacno");
            pIspis.appendChild(document.createTextNode(`\u2714${i + 1}. Question - Correct`));
            divIspis.appendChild(pIspis);

            
        }
        else {
            let pIspis = document.createElement("p");
            pIspis.classList.add("netacno");
            pIspis.appendChild(document.createTextNode(`\u2716 ${i + 1}. Question - Incorrect`));
            divIspis.appendChild(pIspis);
            // divIspis.appendChild(document.createTextNode("Netacan odgovor"));
        }
    }
});

