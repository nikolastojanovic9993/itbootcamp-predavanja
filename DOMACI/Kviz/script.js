console.log("Kviz");


let pitanje1 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje2 = {
    tekst: "Linux je",
    odgovori: ["Operativni sistem", "Komponenta Windows operativnih sistema", "Komponenta Microsoft Office", "Mašinski programski jezik"],
    indeksKorektnogOdgovora: 0,
};

let pitanje3 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje4 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje5 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje6 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje7 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje8 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje9 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanje10 = {
    tekst: "Izbaciti uljeza",
    odgovori: [".jpg", ".png", ".jpeg", ".mp4"],
    indeksKorektnogOdgovora: 3,
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];





let ispisiPitanja = niz => {      ///igranje sa kodom
    let divPitanja = document.createElement("div");

    niz.forEach((el, e) => {

        let forma = document.createElement("form");
        let postaviPitanje = document.createElement("p");
        forma.appendChild(postaviPitanje);

        divPitanja.appendChild(forma);
        document.body.appendChild(divPitanja);

        let tekstP = `${el.tekst}`;
        postaviPitanje.appendChild(document.createTextNode(tekstP));

        for (let i = 0; i < el.odgovori.length; i++) {


            let odgovor = document.createElement("input");
            let odgovorT = document.createElement("label");
            let odgovorTT = `${el.odgovori[i]}`;
            odgovor.setAttribute("for", `${el.odgovori[i]}`)
            odgovorT.appendChild(document.createTextNode(odgovorTT));
            odgovor.setAttribute("type", "radio");
            odgovor.setAttribute("name", `${e}`)
            odgovor.setAttribute("id", `${el.odgovori[i]}`)
            forma.appendChild(odgovor);
            forma.appendChild(odgovorT);
            divPitanja.appendChild(forma);
        }
    });
}
ispisiPitanja(pitanja);