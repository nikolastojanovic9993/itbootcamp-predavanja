//1. zadatak

let a = 5;
let b = 7;
if (a > b) {
    console.log(`Broj ${a} je veci ili jednak od broja ${b}`);
}
else {
    console.log(`Broj ${a} je manji ili jednak od broja ${b}`);
}

//2. zadatak

let t = 6;
if (t > 0) {
    console.log(`Temperatura je u plusu`);
}
else {
    console.log(`Temperatura je u minusu`);
}

//4. zadatak

let datum = new Date();
let sati = datum.getHours();
if (sati > 12) {
    console.log(`Trenutno je popodne`);
}
else {
    console.log(`Trenutno je jutro`);
}

//5. zadatak

let godina = datum.getFullYear();
let godinarodjenja = 1993;
if (godina - godinarodjenja < 18) {
    console.log(`Osoba je maloletna`);
}
else {
    console.log(`Osoba je punoletna`);
}

//6. zadatak

let x = 5;
let y = 7;
let z = 9;
if (z > y > x) {
    console.log(`Broj ${z} je najveci`);
}

//JELENA
//2. Zadatak
let temp = 10;
if (temp >= 0) {
    document.body.innerHTML = `<p style="color: red;">Temperatura od ${temp} stepeni je u plusu </p>`;
}
else {
    document.body.innerHTML = `<p style="color: blue;">Temperatura od ${temp} stepeni je u minusu </p>`;
}

// 3. Zadatak
let pol = "m";
if (pol == "m") {
    //Prikazi avatar muskarca
    document.body.innerHTML += `<img src="slike/m.png">`;
}
else {
    //Prikazi avatar zene
    document.body.innerHTML += `<img src="slike/z.png">`;
}

// 6. Zadatak
let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; //pretpostavka
if (maks < b2) {
    maks = b2; //ako je maks manje od b2, onda maks postaje b2 jer je losa pretpostavka
}

if (maks < b3) {
    maks = b3;
}

document.body.innerHTML += `<p>${maks}</p>`


// 7. Zadatak
let p = 78;
// if(p > 50) {
//     console.log(`Ucenik je polozio ispit`);
// }
// else {
//     console.log(`Ucenik je pao ispit`);
// }

// if(50 < p < 60) {
//     console.log(`Ucenik je dobio ocenu 6`);
// }
// if(60 < p < 70) {
//     console.log(`Ucenik je dobio ocenu 7`);
// }
// else if(70 < p < 80) {
//     console.log(`Ucenik je dobio ocenu 8`);
// } 
// else if(80 < p < 90) {
//     console.log(`Ucenik je dobio ocenu 9`);
// }
if (90 < p) {
    console.log(`Ucenik je dobio ocenu 10`);
}
else if (80 < p) {
    console.log(`Ucenik je dobio ocenu 9`);
}
else if (70 < p) {
    console.log(`Ucenik je dobio ocenu 8`);
}
else if (60 < p) {
    console.log(`Ucenik je dobio ocenu 7`);
}
else if (50 < p) {
    console.log(`Ucenik je dobio ocenu 6`);
}
else if (p < 50) {
    console.log(`Ucenik nije polozio ispit`);
}
else if (100 <= p) {
    console.log(`Pogresan unos`);
}
else if (p < 0) {
    console.log(`Pogresan unos`);
}

// 5. Zadatak

// 8. Zadatak
let dan = datum.getDay();
// console.log(`${dan}`);
if (dan == 0) {
    console.log(`Danas je vikend`);
}
else if (dan == 6) {
    console.log(`Danas je vikend`);
}
else {
    console.log(`Danas je radni dan`);
}

// 9. Zadatak
if (sati > 18) {
    console.log(`Dobro vece!`);
}
else if (sati > 12) {
    console.log(`Dobar dan!`);
}
else {
    console.log(`Dobro jutro!`);
}

// 10. Zadatak
let d1 = 20;
let m1 = 12;
let g1 = 1993;

let d2 = 24;
let m2 = 10;
let g2 = 1993;

if (g1 < g2) {
    console.log(`Prvi datum je raniji`);
}
else if (g1 > g2) {
    console.log(`Drugi datum je raniji`);
}
else if (m1 < m2) {
    console.log(`Prvi datum je raniji`);
}
else if (m1 > m2) {
    console.log(`Drugi datum je raniji`);
}
else if (d1 < d2) {
    console.log(`Prvi datum je raniji`);
}
else if (d1 > d2) {
    console.log(`Drugi datum je raniji`);
}
else {
    console.log(`Datumi su isti`);
}

// 11. Zadatak
sat = 21;
let PocetakRada = 9;
let KrajRada = 17;
if (sat >= KrajRada) {
    console.log(`Firma ne radi`);
}
else if (sat <= PocetakRada) {
    console.log(`Firma ne radi`);
}
else {
    console.log(`Firma radi`);
}

// 12. Zadatak
let p1 = 7;
let k1 = 10;
let p2 = 6;
let k2 = 11;

if (k1 < p2) {
    console.log(`Ne preklapaju se`);
}
else if (k2 < p1) {
    console.log(`Ne preklapaju se`);
}
else {
    console.log(`Preklapaju se`);
}

// 13. Zadatak
// 4 / 2 = 2 cela + 0 ostatak
// 5 / 2 = 2 cela + 1 ostatak
// 6 / 2 = 3 cela + 0 ostatak
// 7 / 2 = 3 cela + 1 ostatak
let k = 21;
if (k % 2 == 0) {
    console.log(`Broj ${k} je paran`);
}
else {
    console.log(`Broj ${k} je neparan`);
}

// 14. Zadatak
// nesto / 0 = beskonacno
// o / nesto = 0
if (k % 3 != 0) {
    console.log(`Broj ${k} nije deljiv brojem 3`);
}
else {
    console.log(`Broj ${k} je deljiv brojem 3`);
}


// 16. Zadatak
broj = 8;
if (broj <= 0) {
    broj = broj - 1; //broj-- ili broj -= 1
    console.log(broj);
}
else {
    broj = broj + 1; //broj++ ili broj += 1
    console.log(broj);
}

// 17. Zadatak
let a1 = 45;
let a2 = 65;
let a3 = 35;

// Najveci broj
let maksimalni = a1;
if (maksimalni < a2) {
    maksimalni = a2
}
if (maksimalni < a3) {
    maks = a3;
}
console.log(`Najveci broj je ${maksimalni}`);

// Najmanji broj
let min = a1;
if (min > a2) {
    min = a2;
}
if (min > a3) {
    min = a3
}
console.log(`Najmanji broj je ${min}`);

// Srednji broj
let srednji = a1 + a2 + a3 - min - maksimalni;
console.log(`Srednji broj je ${srednji}`);

// 18. Zadatak
// 1. Nacin

let s = 15.3;
console.log(s % 1);
if (s % 1 == 0) {
    console.log(`Broj ${s} je ceo broj`);
}
else {
    console.log(`Broj ${s} nije ceo broj`);
}

// 2. Nacin
s = 14.5;
console.log(Math.floor(s)); //Moze i sa zaokruzivanjem round i ceil
if (Math.floor(s) == s) {
    console.log(`Broj ${s} je ceo broj`);
}
else {
    console.log(`Broj ${s} nije ceo broj`);
}