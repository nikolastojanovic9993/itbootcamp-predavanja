let pitanje1 = {
    tekst: "Koji glumac ima najvise osvojenih Oskara za najboljeg glumca?",
    odgovori: ["Danijel Dej-Luis", "Marlon Brando", "Robert DeNeiro", "Leonardo DiKaprio"],
    indeksKorektnogOdgovora: 0,
}
let pitanje2 = {
    tekst: "Koji od ovih tenisera je najduze bio svjetski broj 1?",
    odgovori: ["Rafael Nadal", "Andre Agasi", "Novak Djokovic", "Pit Sampras"],
    indeksKorektnogOdgovora: 2,
}
let pitanje3 = {
    tekst: "Izbaci uljeza",
    odgovori: ["Mercedes", "Ferrari", "Volkswagen", "Samsung"],
    indeksKorektnogOdgovora: 3,
}
let pitanja = [pitanje1, pitanje2, pitanje3];
// to su objekti
let ispisiPitanja = niz => {      ///igranje sa kodom
    let divPitanja = document.createElement("div");
    let forma = document.createElement("form");
    let fieldset = document.createElement("fieldset")
    let postaviPitanje = document.createElement("p");
    let odgovor = document.createElement("input");
    odgovor.setAttribute("type", "radio");

    forma.appendChild(odgovor);
    forma.appendChild(fieldset);
    divPitanja.appendChild(postaviPitanje);
    divPitanja.appendChild(forma);


    niz.forEach((el, i) => {

        document.body.innerHTML += `${el.tekst} <br>`


        for (let i = 0; i < el.odgovori.length; i++) {
            document.body.appendChild(fieldset)
            document.body.appendChild(postaviPitanje)
            document.body.innerHTML += `${el.odgovori[i]}<br>`
            //document.body.appendChild(forma);
            //forma.innerHTML += ${el.odgovori[i]} <br>;
            document.body.appendChild(forma);

        } document.body.appendChild(fieldset);



    });
}
ispisiPitanja(pitanja)


let btn = document.createElement("BUTTON");
btn.textContent = "Posalji odgovore ";
document.body.appendChild(btn);
let btn2 = document.createElement("BUTTON");
btn2.textContent = "Nova pitanja";
document.body.appendChild(btn2);