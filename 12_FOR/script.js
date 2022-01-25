// let a = 1;
// while (a <= 5) {
//     console.log(`Na redu je broj ${a}`);
//     a++;
// }

// //1. nacin
// for (let i = 1; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}`);
// }

// //2. nacin
// i = 1;
// for (i; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}`);
// }

// //3.nacin
// i = 1;
// for (; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}`);
// }

// for( let i = 1, k = 5; i <= k; i++) {
//     console.log(i);
// }

//////////////////////////////////////////

// 1. Zadatak
console.log(" 1. Ispisati brojeve od 20 do 1");
// for (i = 20; i >= 1; i--) {
//     console.log(i);
// }

//////////////////////////////////////////

// 2. Zadatak
console.log("3. Ispisati parne brojeve od 1 do 20");

// //1. nacin
// for (i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// //2. nacin
// for (i = 2; i <= 20; i += 2) {
//     console.log(i);
// }

// //3. nacin
// for (i = 2; i <= 20; i = i + 2) {
//     console.log(i);
// }

////////////////////////////////////////////////

// console.log("5. Odrediti sumu brojeva od 1 do n");
// let n = 100;
// let suma = 0;
// for (i = 1; i <= n; i++) {
//     suma += i; // suma = suma + i; 
// }
// console.log(suma);

/////////////////////////////////
console.log("7. Odrediti prozivod brojeva od n do m");
// let n = 2;
// let m = 6;
// let p = 1;
// for (i = n; i <= m; i++) {
//     p *= i; // p = p * i;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

//////////////////////////////////////

console.log("9. For petljom u HTML-u ispisati svaku od slicica uz pomoc brojaca (iteratora)");
// <img src="slike/1.jpg">
// <img src="slike/2.jpg">
// <img src="slike/3.jpg">
// for (let i = 1; i <= 3; i++) {
//     document.body.innerHTML += `<img src="slike/${i}.jpg">`;
// }

//////////////////////////////////////////

console.log("11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150");
// let br = 0;
// for (let i = 5; i <= 150; i++) {
//     if (i % 13 == 0) {
//         br++;
//     }
// }
// console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);

////////////////////////////////////////

console.log("12. Ispisati aritmetičku sredinu brojeva od n do m.");

// let n = 2;
// let m = 6;
// let suma = 0;
// for (i = n; i <= m; i++) {
//     suma += i;
// }
// let p = m - n + 1;
// let sredina = suma / p;
// console.log(`Aritmetička sredina brojeva od ${n} do ${m} je ${sredina}.`);

///////////////////////////////////////

console.log("15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.");

// let n = 2;
// let m = 15;
// let i = n;
// let p = 4

// for(i; i <= m; i++) {

// }


////////////////////////////////////

console.log("16. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a.");

// let n = 2;
// let m = 7;
// let a = 2;
// let i = n;
// let suma = 0;
// for (i; i <= m; i++) {
//     if (i % a != 0) {
//         suma = suma + i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}.`);

///////////////////////



// 12. Jelena
// let n = 5;
// let m = 10;
// let suma = 0;
// let br = 0;
// for (let i = n; i <= m; i++) {
//     suma += i;
//     br++
// }
// let arsr = suma / br; // 45 / 6
// console.log(`Aritmetička sredina brojeva od ${n} do ${m} je ${arsr}.`);

/////////////////////////////////////////////////////////

// 15. Jelena 15. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.");
// 426 % 10 = 6
// 9645 % 10 = 5
// 41 % 10 = 1

// let n = 3;
// let m = 45;
// let br = 0;
// let suma = 0;

// for (let i = n; i <= m; i++) {
//     if (i % 10 == 4) {
//         console.log(i);
//         suma = suma + i;
//         br++;
//     }
// }
// console.log(`Broj brojeva između ${n} i ${m} kojima je poslednja cifra 4 je ${br}.`);
// console.log(`Suma brojeva između ${n} i ${m} kojima je poslednja cifra 4 je ${suma}.`);

////////////////////////////////////////////////////////////

// 16. Jelena Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

// let n = 5;
// let m = 10;
// let a = 3;
// let suma = 0;
// for (let i = n; i <= m; i++) {
//     if (i % a != 0) {
//         suma += i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

//////////////////////////////////////////////////////////////

// 18. Jelena Odrediti sa koliko brojeva je deljiv uneti broj k
// FOR petljom
let k = 6;
let br = 0;
for (let i = 1; i <= k; i++) {
    if (k % i == 0) {
        br++;
    }
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

// WHILE petljom
k = 7;
br = 0;
i = 1;
while (i <= k) {
    if (k % i == 0) {
        br++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);

// 19. Jelena Odrediti da li je dati prirodan broj k prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
// Samo se nadovezujemo na prethodni zadatak
if (br == 1) {
    console.log(`Broj nije ni prost ni složen.`);
}
else if (br == 2) {
    console.log(`Broj je prost.`);
}
else {
    console.log(`Broj je složen.`);
}

// 20. kao samostalno
// document.body.innerHTML += `<table>
//                                 <tr>
//                                     <td>Tekst</td>
//                                     <td>Tekst</td>
//                                 </tr>
//                                 <tr class="obojen">
//                                     <td>Tekst</td>
//                                     <td>Tekst</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Tekst</td>
//                                     <td>Tekst</td>
//                                 </tr>
//                                 <tr class="obojen">
//                                     <td>Tekst</td>
//                                     <td>Tekst</td>
//                                 </tr>
//                                 <tr>
//                                     <td>Tekst</td>
//                                     <td>Tekst</td>
//                                 </tr>
//                                 <tr class="obojen">
//                                     <td>Tekst</td>
//                                     <td>Tekst</td>
//                                 </tr>
//                             </table>`

// 20. Jelena
let tabela = `<table border="1">`;
for (let red = 1; red <= 6; red++) {
    if (red % 2 == 0) {
        tabela +=
            `
        <tr class="roze">
                <td>Tekst</td>
                <td>Tekst</td>
        </tr>
        `;
    }
    else {
        tabela +=
            `
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
    `}
}
tabela += `</table>`;
document.body.innerHTML += tabela;


// 4. Zadatak JA
//Ispisati dvostruku vrednost brojeva od 5 do 15 *

n = 5;
m = 15;
i = n;
suma = 0;
for (i; i <= m; i++) {
    suma = i + i;
    console.log(suma);
}


// 6. Zadatak JA
// Odrediti sumu brojeva od n do m 
n = 3;
m = 8;
i = n;
suma = 0;
for (i; i <= m; i++) {
    suma = suma + i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}}`);

// 8. Zadatak
//Odrediti sumu kvadrata brojeva od n do m *
n = 2;
m = 4;
i = n;
suma = 0;
for (i; i <= m; i++) {
    suma = suma + i * i;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}`);

//9. Zadatak
//Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora)
i = 1;
for (i; i <= 3; i++) {
    document.body.innerHTML += `<img src="slike/${i}.jpg">`;
}

//10. Zadatak
//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
n = 20;
m = 100;
i = n;
p = 1;
for (i; i <= m; i++) {
    if (i % 11 == 0) {
        p = p * i;
    }
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 je ${p}`);


// 11. Zadatak
// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150
n = 5;
m = 150;
i = n;
br = 0;
for (i; i <= m; i++) {
    if (i % 13 == 0) {
        br++;
    }
}
console.log(`U intervalu od ${n} do ${m} ima ${br} brojeva deljivih sa 13`);

// 12. Zadatak
//Ispisati aritmetičku sredinu brojeva od n do m.
n = 5;
m = 8;
i = n;
br = 0;
suma = 0;
for (i; i <= m; i++) {
    suma = suma + i;
    br++;
}
let sred = suma / br;
console.log(`Aritmetička sredina brojeva od ${n} do ${m} je ${sred}`);

// 13. Zadatak
//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
n = -5;
m = 5;
i = n;
let poz = 0;
let neg = 0;
for (i; i <= m; i++) {
    if (i < 0) {
        neg++;
    }
    else {
        poz++;
    }
}
console.log(`U intervalu od ${n} do ${m} ima ${poz} pozitivnih brojeva a ${neg} negativnih`);

// 14. Zadatak
//Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
n = 5;
m = 50;
i = n;
br = 0;
for (i; i <= m; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        br++;
    }
}
console.log(`Od ${n} do ${m} ima ${br} brojeva koji su deljivi sa 3 ili 5`);

//15. Zadatak
//Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
n = 4;
m = 15;
i = n;
br = 0;
suma = 0;
for (i; i <= m; i++) {
    if (i % 10 == 4) {
        br++;
        suma = suma + i;
    }
}
console.log(`Od ${n} do ${m} ima ${br} brojeva kojima je poslednja cifra 4 i njihova suma je ${suma}`);

//16. Zadatak;
//Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 5;
m = 10;
a = 3;
i = n;
suma = 0;
for (i; i <= m; i++) {
    if (i % a != 0) {
        suma = suma + i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

//17. Zadatak
//Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
n = 5;
m = 10;
a = 3;
i = n;
let proizvod = 1;
for (i; i <= m; i++) {
    if (i % a == 0) {
        proizvod = proizvod * i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${proizvod}`);

//18. Zadatak
//Odrediti sa koliko brojeva je deljiv uneti broj k
k = 9;
i = 1;
br = 0;
for (i; i <= k; i++) {
    if (k % i == 0) {
        br++;
    }
}
console.log(`Broj ${k} je deljiv sa ${br} broja`);

//19. Zadatak
//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
n = 4;
i = 1;
br = 0;
for (i; i <= n; i++) {
    if (n % i == 0) {
        br++;
    }
}
if (br <= 2) {
    console.log(`Broj ${n} je prost`);
}
else {
    console.log(`Broj ${n} je slozen`);
}

//20. Zadatak
//Napraviti tabelu sa 6 redova. Svaki red tabele treba da ima po dve ćelije (dve kolone). Svakom parnom redu dodati klasu „obojen“. Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
let table = `<table border="1">`;
let red = 1;
for (red; red <= 6; red++) {
    if (red % 2 == 0) {
        table += `<tr class="roze">
                    <td>Tekst</td>
                    <td>Teskt</td>
                    </tr>`
    }
    else {
        table += `<tr>
                    <td>Tekst</td>
                    <td>Teskt</td>
                    </tr>`
    }
}
table += `</table>`
document.body.innerHTML += table


//21. Zadatak
//Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
red = 1;
let lista = `<ul>`

for (red; red <= 10; red++) {
    if (red % 3 != 0) {
        lista += `<li>Element ${red}</li>`
    }
    else if (red % 3 == 0) {
        lista += `<li>Element ${red}
                  <ul><li class="lila">Element ${red}</li></ul></li> `
    }
}
lista += `</ul>`
document.body.innerHTML += lista

red = 1;
lista = `<ul>`

for (red; red <= 10; red++) {
    if (red == 2) {
        lista += `<li>Element ${red}
        <ul><li class="lila">Element ${++red}</li></ul></li> `
    }
    else if (red == 5) {
        lista += `<li>Element ${red}
        <ul><li class="lila">Element ${++red}</li></ul></li> `
    }
    else if (red == 8) {
        lista += `<li>Element ${red}
        <ul><li class="lila">Element ${++red}</li></ul></li> `
    }
    else {
        lista += `<li>Element ${red}</li>`
    }
}
lista += `</ul>`
document.body.innerHTML += lista




//22. Zadatak
//Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.
let s = 1;
for (s; s <= 64; s++) {
    if (s % 8 == 0) {
        document.body.innerHTML += `<span>${s}</span><br>`
    }
    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
}

//23. Zadatak
//Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju. *

s = 1;
for (s; 1 <= s && s <= 8; s++) {
    if (s % 2 == 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }

    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s == 8) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 9 <= s && s <= 16; s++) {
    if (s % 2 != 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }
    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 17 <= s && s <= 24; s++) {
    if (s % 2 == 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }

    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 25 <= s && s <= 32; s++) {
    if (s % 2 != 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }
    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 33 <= s && s <= 40; s++) {
    if (s % 2 == 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }

    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 41 <= s && s <= 48; s++) {
    if (s % 2 != 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }
    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 49 <= s && s <= 56; s++) {
    if (s % 2 == 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }

    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
    if (s % 8 == 0) {
        document.body.innerHTML += `<br>`
    }
}
for (s; 57 <= s && s <= 64; s++) {
    if (s % 2 != 0) {
        document.body.innerHTML += `<span style="background-color: black; color: white;">${s}</span>`
    }
    else {
        document.body.innerHTML += `<span>${s}</span>`
    }
}


