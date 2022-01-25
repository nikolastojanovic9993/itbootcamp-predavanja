// 9. Zadatak
//Ispisati dvostruku vrednost brojeva od 5 do 15
let n = 5;
let m = 15;
let i = n;
suma = 0;
//1. nacin
for (i; i <= m; i++) {
    suma = i + i;
    console.log(suma);
}

//2. nacin; Nisam siguran sta se trazi zadatkom
suma = 0;
i = n;
for (i; i <= m; i++) {
    suma = suma + i;
}
let rez = suma * 2;
console.log(rez);


//10. Zadatak
//Odrediti sumu brojeva od n do m .
n = 5;
m = 7;
i = n;
suma = 0;
for (i; i <= m; i++) {
    suma = suma + i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}.`);


//11. Zadatak
//Odrediti sumu kvadrata brojeva od n do m.
n = 3;
m = 10;
i = n;
suma = 0;
for (i; i <= m; i++) {
    suma = suma + i * i;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}.`);


//12. Zadatak
//Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100
n = 20;
m = 100;
i = n;
let proizvod = 1;
for (i; i <= m; i++) {
    if (i % 11 == 0) {
        proizvod = proizvod * i;
    }
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 je ${proizvod}`);


//13. Zadatak
//Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.
n = -15;
m = 5;
let poz = 0;
let neg = 0;
i = n;
for (i; i <= m; i++) {
    if (i < 0) {
        neg++;
    }
    else if (i > 0) {
        poz++;
    }
    else {
        console.log(`0 nije niti pozitivan niti negativan broj`);
    }
}
console.log(`U intervalu od ${n} do ${m} pozitivno je ${poz} brojeva a negativno ${neg}`);


//14. Zadatak
// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
n = 5;
m = 50;
i = n;
br = 0;
for (i; i <= 50; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        br++;
    }
}
console.log(`Od 5 do 50 ima ${br} brojeva koji su deljivi sa 3 ili sa 5. `);


//15. Zadatak
// Odrediti proizvod brojeva od n do m koji su deljivi brojem a.
n = 4;
m = 11;
a = 5;
i = n;
p = 1;
for (i; i <= m; i++) {
    if (i % a == 0) {
        p = p * i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa ${a} je ${p}`);


//16. Zadatak
//Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
n = 6;
i = 1;
br = 0;
for (i; i <= n; i++) {
    if (n % i == 0 && i % 3 == 0 && i % 2 != 0) {
        br++;
    }
}
console.log(br);


//17. Zadatak
// Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
n = 123;
let o = 0;
let z = 0;
while (n > 0) {
    o = n % 10;
    z = z + o;
    n = (n - o) / 10;
}
console.log(z);


//18. Zadatak
//Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici.
let red = 1;
let lista = `<ul>`

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


//19. Zadatak
//Kreirati 64 span elemenata i rasporediti ih kao na slici, tako da elementi izgledaju kao polja šahovske table. U realizaciji ovog zadatka koristiti for petlju.

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