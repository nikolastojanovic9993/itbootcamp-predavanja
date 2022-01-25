// 1. Zadatak
//Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.
let kupovina = ["hleb", "jaja", "cokolada", "brasno"];
let spisak = niz => {
    let rez = "";
    rez += "<ul>";
    niz.forEach (el => {
        rez += `<li>${el}</li>`;
    });
    rez += "</ul>"
    return rez;
}
document.getElementById('d1').innerHTML += spisak(kupovina);


//2. Zadatak
//Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.
let timovi = ["Zdravlje", "Radnicki", "Crvena Zvezda", "Partizan"];
let tabelaTimovi = niz => {
    let rez = "";
    rez += `<table style="border: 1px solid black">`;
    niz.forEach(el => {
        rez += `<tr><td style="border: 1px solid black">${el}</td></tr>`;
    });
    rez += "</table>"
    return rez;
}
document.getElementById('d2').innerHTML += tabelaTimovi(timovi);


//3. Zadatak
//Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.
let slike = ["slike/slika2.JPG", "slike/slika3.JPG"];
let stampaSlika = niz => {
    let rez = "";
    niz.forEach(el => {
        rez += `<img src=${el}>`;
    });
    return rez;
}
document.getElementById('d3').innerHTML += stampaSlika(slike);