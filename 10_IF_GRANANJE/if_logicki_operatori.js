console.log(`Logicki operatori`);


// Zadatak iz prezentacije

// 1. negacija
// 2. and
// 3. or
// if(!true && true || false) -> (false & true || false) -> (false || false) -> false
// if( (!true && true) || false)

let pol = "m";
let god = 17;

if (pol == "m" && god >= 18) {
    console.log("Osoba je muskog pola i punoletna je");
}
else if (pol == "m" && god < 18 && god >= 0) {
    console.log("Osoba je muskog pola i maloletna je");
}
else if (pol == "z" && god >= 18) {
    console.log("Osoba je zenskog pola i punoletna je");
}
else if (pol == "z" && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna je`);
}
else {
    console.log(`Pogresan unos`);
}

///////////////////////////////////////////////

pol = "M";
if (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML = `<img src="slike/z.png">`;
}
else if (pol == "m" || pol == "M") {
    document.body.innerHTML = `<img src="slike/m.png">`;
}
else {
    document.body.innerHTML = `<p>Pogresan unos</p>`;
}

/////////////////////////////////////////////////

pol = "M";
god = 15;
if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18) {
    console.log("Osoba je ženskog pola i punoletna");
}
//..... && 0<=god<18 NEEEEEEE!!!!!! -> 0<=god && god<18 odnosno god>=0 && god<18 DAAAAAAAAAA
else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god < 18 && god >= 0) {
    console.log("Osoba je ženskog pola i maloletna");
}
else if ((pol == "m" || pol == "M") && god >= 18) {
    console.log("Osoba je muškog pola i punoletna je");
}
else if ((pol == "m" || pol == "M") && god >= 0 && god < 18) {
    console.log("Osoba je muškog pola i maloletna je");
}
else {
    console.log("Pogrešan unos");
}

////// JA bre!
// 21. Zadatak 
// Naci koji je najveci od tri uneta broja a, b i c, koriscenjem logickih operatora
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

// 22. Zadatak
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih

let t = -45;
if (t < -15 || t > 40) {
    document.body.innerHTML += `<p>Ekstremna temperatura!</p>`;
}


// 23. Zadatak
//Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru). Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400

let datum = new Date();
let godina = datum.getFullYear();
// if (godina % 4 == 0 && godina % 100 != 0) {
//     console.log(`Godina ${godina} je prestupna`);
// }
// else {
//     console.log(`Godina ${godina} nije prestupna`);
// }
if (godina % 400 == 0) {
    console.log(`Godina ${godina} je prestupna`);
}
else {
    console.log(`Godina ${godina} nije prestupna`);

}


//24. Zadatak
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