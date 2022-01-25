// 1. Zadatak
//Naći i ispisati najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora.
let a = 6;
let b = 7;
let c = 8;

// 1. nacin samo logicki
// if (a > b && a > c && b > c) {
//     console.log(`Broj ${a} je najveci`);
//     console.log(`Broj ${b} je srednji`);
//     console.log(`Broj ${c} je najmanji`);
// }
// else if (a > b && a > c && c > b) {
//     console.log(`Broj ${a} je najveci`);
//     console.log(`Broj ${c} je srednji`);
//     console.log(`Broj ${b} je najmanji`);
// }
// else if (b > a && b > c && a > c) {
//     console.log(`Broj ${b} je najveci`);
//     console.log(`Broj ${a} je srednji`);
//     console.log(`Broj ${c} je najmanji`);
// }
// else if (b > a && b > c && c > a) {
//     console.log(`Broj ${b} je najveci`);
//     console.log(`Broj ${c} je srednji`);
//     console.log(`Broj ${a} je najmanji`);
// }
// else if (c > a && c > b && a > b) {
//     console.log(`Broj ${c} je najveci`);
//     console.log(`Broj ${a} je srednji`);
//     console.log(`Broj ${b} je najmanji`);
// }
// else if (c > a && c > b && b > a) {
//     console.log(`Broj ${c} je najveci`);
//     console.log(`Broj ${b} je srednji`);
//     console.log(`Broj ${a} je najmanji`);
// }

// 2. nacin
if (a > b && a > c) {
    console.log(`Broj ${a} je najveci`);
    if (b > c) {
        console.log(`Broj ${b} je srednji`);
        console.log(`Broj ${c} je najmanji`);
    }
    else {
        console.log(`Broj ${b} je najmanji`);
        console.log(`Broj ${c} je srednji`);
    }
}
else if (b > a && b > c) {
    console.log(`Broj ${b} je najveci`);
    if (a > c) {
        console.log(`Broj ${a} je srednji`);
        console.log(`Broj ${c} je najmanji`);
    }
    else {
        console.log(`Broj ${c} je srednji`);
        console.log(`Broj ${a} je najmanji`);
    }
}
else if (c > a && c > b) {
    console.log(`Broj ${c} je najveci`);
    if (a > b) {
        console.log(`Broj ${a} je srednji`);
        console.log(`Broj ${b} je najmanji`);
    }
    else {
        console.log(`Broj ${b} je srednji`);
        console.log(`Broj ${a} je najmanji`);
    }
}


//2. Zadatak
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
let t = -45;
if (t < -15 || t > 40) {
    document.body.innerHTML += `<p>Ekstremna temperatura!</p>`;
}


//3. Zadatak
// Ispitati da li je uneta godina prestupna. Godina je prestupna ako je deljiva sa 4 i važi jedno od sledeća dva pravila: godina nije deljiva sa 100 ili je deljiva sa 400.
let datum = new Date();
let godina = datum.getFullYear();
if (godina % 4 == 0 && godina % 100 != 0) {
    console.log(`Godina ${godina} je prestupna`);
}
else if (godina % 400 == 0) {
    console.log(`Godina ${godina} je prestupna`);
}
else {
    console.log(`Godina ${godina} nije prestupna`);
}


//4. Zadatak
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
let dan = datum.getDay();
let sati = datum.getHours();
let minuti = datum.getMinutes();
let pocetakR = 9;
let krajR = 20;
let pocetakV = 10;
let krajV = 18;
if (dan == 0 || dan == 6) {
    if (sati > krajV && minuti > 0) {
        console.log(`Butik je trenutno zatvoren`);
    }
    else if (sati < pocetakV) {
        console.log(`Butik je trenutno zatvoren`);
    }
}

else if (sati > krajR && minuti > 0) {
    console.log(`Butik je trenutno zatvoren`);
}
else if (sati < pocetakR) {
    console.log(`Butik je trenutno zatvoren`);
}
else {
    console.log(`Butik je trenutno otvoren`);
}


//5. Zadatak
//Za preuzeti datum i mesec sa računara, odrediti koliko dana ima do kraja tekućeg meseca. Rezultat ispisati na ekranu i u konzoli.
let mesec = datum.getMonth();
let ostaloDana = 1;
let danMesec = datum.getDate();
if (mesec == 0, 2, 4, 6, 7, 9, 11) {
    ostaloDana = 31 - danMesec;
    console.log(`Do kraja meseca je ostalo ${ostaloDana} dana.`);
}
else if (mesec == 1) {
    if (godina % 4 == 0 && godina % 100 != 0) {
        ostaloDana = 29 - danMesec;
        console.log(`Do kraja meseca je ostalo ${ostaloDana} dana.`);
    }
    else if (godina % 400 == 0) {
        ostaloDana = 29 - danMesec;
        console.log(`Do kraja meseca je ostalo ${ostaloDana} dana.`);
    }
    else {
        ostaloDana = 28 - danMesec;
        console.log(`Do kraja meseca je ostalo ${ostaloDana} dana.`);
    }
}
else {
    ostaloDana = 30 - danMesec;
    console.log(`Do kraja meseca je ostalo ${ostaloDana} dana.`);
}
document.body.innerHTML += `<p>Do kraja meseca je ostalo ${ostaloDana} dana.</p>`


//6. Zadatak
//Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3𝑚 površine lokala. Za posmatrani kafić su dati podaci da ima 𝑣 𝑚 i da je u njemu trenutno n gostiju. Brojeve 𝑣 i 𝑛 određujete sami. Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.
let v = 200;
let n = 80;
let k = v / n;
let n1 = 0
if (k < 3) {
    while (v / n <= 3) {
        n--;
        n1++;
    }
    document.body.innerHTML += `<p style="color: red">NE</p>`
    document.body.innerHTML += `<p style="color: red">Potrebno je da ${n1} čoveka napusti lokal</p>`
}
else {
    document.body.innerHTML += `<p style="color: green">DA</p>`
}


//7. Zadatak
//Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.
let pocSatLek1 = 08;
let pocMinLek1 = 00;
let krajSatLek1 = 15;
let krajMinLek1 = 30;
let pocSatLek2 = 13;
let pocMinLek2 = 30;
let krajSatLek2 = 20;
let krajMinLek2 = 00;
document.body.innerHTML += `<p class="pocetak">Prvi lekar počinje sa radom u ${pocSatLek1} časova i ${pocMinLek1} minuta.</p>`
document.body.innerHTML += `<p class="kraj">Prvi lekar završava sa radom u ${krajSatLek1} časova i ${krajMinLek1} minuta.</p>`
document.body.innerHTML += `<p class="pocetak">Drugi lekar počinje sa radom u ${pocSatLek2} časova i ${pocMinLek2} minuta.</p>`
document.body.innerHTML += `<p class ="kraj">Drugi lekar završava sa radom u ${krajSatLek2} časova i ${krajMinLek2} minuta.</p>`

let p1 = pocSatLek1 * 60 + pocMinLek1;
let k1 = krajSatLek1 * 60 + krajMinLek1; //930
let p2 = pocSatLek2 * 60 + pocMinLek2; //870
let k2 = krajSatLek2 * 60 + krajMinLek2;

if (k1 <= p2) {
    document.body.innerHTML += `<p>Radno vreme lekara se ne poklapa</p>`;
}
else if (k2 <= p1) {
    document.body.innerHTML += `<p>Radno vreme lekara se ne poklapa</p>`;
}
else if (k1 > p2 && p1 < p2 && p1 < k2 && k1 < k2) //Morao sam ovoliko uslova da ne bi upadalo ovde kada rade paralelno, s tim sto jedan pocinje pre drugog i zavrsava posle njega 
{
    let pp1 = k1 - p2;
    let pS1 = Math.floor(pp1 / 60);
    let pM1 = pp1 % 60;
    document.body.innerHTML += `<p>Radno vreme lekara se poklapa i proveli su ${pS1} časova i ${pM1} minuta zajedno na poslu.</p>`;
}
else if (k2 > p1 && k1 > k2 && p2 < p1 && p2 < k2) {
    let pp2 = k2 - p1;
    let pS2 = Math.floor(pp2 / 60);
    let pM2 = pp2 % 60;
    document.body.innerHTML += `<p>Radno vreme lekara se poklapa i proveli su ${pS2} časova i ${pM2} minuta zajedno na poslu..</p>`;
}
else if (p1 > p2 && k2 > k1) {
    let pp3 = k1 - p1;
    let pS3 = Math.floor(pp3 / 60);
    let pM3 = pp3 % 60;
    document.body.innerHTML += `<p>Radno vreme lekara se poklapa i proveli su ${pS3} časova i ${pM3} minuta zajedno na poslu...</p>`;
}
else if (p2 > p1 && k1 > k2) {
    let pp4 = k2 - p2;
    let pS4 = Math.floor(pp4 / 60);
    let pM4 = pp4 % 60;
    document.body.innerHTML += `<p>Radno vreme lekara se poklapa i proveli su ${pS4} časova i ${pM4} minuta zajedno na poslu....</p>`;
}





//8. Zadatak
//Za uneta dva broja i karakter napraviti kalkulator koji vrši:
//● Množenje ta dva broja ukoliko je uneto slovo ’m’
//● Deljenje ukoliko je uneto slovo ’d’
//● Sabiranje ukoliko je uneto slovo ’s’
//● Oduzimanje ukoliko je uneto slovo ’o’
let br1 = 6;
let br2 = 2;
let operacija = "o";
let rez = 0;
if (operacija == "m") {
    rez = br1 * br2;
    console.log(`Rezultat je ${rez}`);
}
else if (operacija == "d") {
    rez = br1 / br2;
    console.log(`Rezultat je ${rez}`);
}
else if (operacija == "s") {
    rez = br1 + br2;
    console.log(`Rezultat je ${rez}`);
}
else if (operacija == "o") {
    rez = br1 - br2;
    console.log(`Rezultat je ${rez}`);
}
else {
    console.log(`Pogrešan unos`);
}