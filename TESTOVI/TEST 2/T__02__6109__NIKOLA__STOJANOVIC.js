// Zadatak 1
let datum = new Date();
let sati = datum.getHours();
let minuti = datum.getMinutes();
if (sati < 9) {
    console.log(`Radno vreme jos uvek nije pocelo`);
}
else if (sati >= 17 && minuti > 0) {
    console.log(`Radno vreme je vec zavrseno`);
}
else {
    let n = sati * 60 + minuti;
    let m = 17 * 60;
    let doKraja = m - n;
    let doKrajasat = Math.floor(doKraja / 60);
    let doKrajamin = doKraja % 60;
    console.log(`Do kraja radnog vremena je ostalo ${doKrajasat} sati i ${doKrajamin} minuta`);
}


//Zadatak 2
let g = 1500;
let c = g * 5;
if (g < 1000) {
    console.log(`Posta ne daje popust za tezine ispod 1000g, tako da je Vasa cena transporta ${c} dinara.`);
}
else if (1000 <= g && g <= 2000) {
    let c12 = c - (c / 100) * 5;
    console.log(`Cena bez popusta je ${c} dinara`);
    console.log(`Cena sa popustom je ${c12} dinara`);
}
else if (g > 2000) {
    let c2 = c - (c / 100) * 10;
    console.log(`Cena bez popusta je ${c} dinara`);
    console.log(`Cena sa popustom je ${c2} dinara`);
}


//Zadatak 3
let r = 101;
let k = 25;
n = r / k;
if (n % 1 != 0) {
    n = Math.floor(r / k);
    m = n + 1;
    let r1 = m * k;
    let r2 = r1 - r;
    console.log(`Cvecarka treba da dokupi ${r2} ruza.`);
}
else {
    console.log(`Cvecarka ne treba da dokupuje ruze.`);
}


//Zadatak 4
n = 7;
m = 22;
i = n;
let br = 0;
let suma = 0;
for (i; i <= m; i++) {
    if (i % 7 == 0 && i % 2 != 0) {
        br++;
        suma = suma + i;
    }
}
let p = br * suma;
console.log(`U intervalu od ${n} do ${m} suma brojeva koji su deljivi sa 7 i neparni su je ${suma}.`)
console.log(`U intervalu od ${n} do ${m} broj brojeva koji su deljivi sa 7 i neparni su je ${br}.`);
console.log(`${p}`);


//Zadatak 5
n = 3;
m = 18;
i = n;
suma = 0;
let br2 = 0;
for (i; i <= m; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        suma = suma + i;
    }
    else if (i % 10 == 3) {
        br2++;
    }
}
p = suma - br2;
console.log(`Razlika zbira parnih brojeva od ${n} do ${m} koji su deljivi sa 3 i broja brojeva od ${n} do ${m} kojima je poslednja cifra 3 je ${p}.`);