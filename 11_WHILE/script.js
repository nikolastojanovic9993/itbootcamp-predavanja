/*
let i = 1;
console.log(i); // 1
i++;
console.log(i); // 2
i++;
console.log(i); // 3
i++;
console.log(i); // 4
i++;
console.log(i); // 5
i++;
*/

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i je: ${i}`);


// VEZBANJE

// 1. Zadatak
// a. Svaki u posebnom redu

i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}
// i = 21;

// b) Svi brojevi u istom redu
let rez = "";
i = 1;
while (i <= 20) {
    rez += i + " ";
    i++;
}
console.log(rez);


// 2. Zadatak (ispisati brojeve od 20 do 1)
i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

// 3. Zadatak (ispisati parne brojeve od 1 do 20)
// moj nacin
i = 1;

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
        i++;
    }
    else {
        i++;
    }
}

// Stefan
i = 1
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++; //znaci ako nije ispunjen if uslov, onda ides na i++ i vracas se u while
}

// drugi nacin stefan
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
    //i = i + 2;
}

// 4. Zadatak Stefan

/*document.body.innerHTML += "<p style='color: red'>1. paragraf</p>"; //spolja stavljas dvostruke unutra jednostruke navodnike zbog JS-a, ne cita ako stavis iste

document.body.innerHTML += "<p style='color: purple'>2. paragraf</p>";

document.body.innerHTML += "<p style='color: green'>3. paragraf</p>";

document.body.innerHTML += "<p style='color: red'>4. paragraf</p>";

document.body.innerHTML += "<p style='color: purple'>5. paragraf</p>";

document.body.innerHTML += "<p style='color: green'>6. paragraf</p>"; */

let n = 16;
i = 1;
while (i <= n) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style='color: red'>${i}. paragraf</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style='color: purple'>${i}. paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style='color: green'>${i}. paragraf</p>`;
    }
    i++;
}


// 6. Zadatak Stefan
// ODrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0;
while (i <= 100) {
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je ${suma}`);

/*

--------------------------------
#Iteracije |  i  |  suma
--------------------------------
     0     |  1  |    0
     1     |  2  |    1
     2     |  3  |    3
     3     |  4  |    6
     4     |  5  |    10
     ...................
     ...................
     100   | 101 |   5050

     */


// 7. Zadatak Stefan
// Odrediti sumu brojeva od 1 do n
n = 18;
i = 1;
suma = 0; //moras da restartujes sumu
while (i <= n) {
    suma += i; //suma = suma + 1;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`);

// 9. Zadatak Stefan
// Odrediti proizvod brojeva od n do m
n = 4;
let m = 6;

i = n;
let proizvod = 1; //1 ne 0 jer dole mnozis a ne moze nulom da se mnozi
while (i <= m) {
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}`);

// 10. Zadatak
// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 2;
m = 6;
i = n;
let sumaParnih = 0;
let sumaNeparnih = 0;
while (i <= m) {
    if (i % 2 == 0) {
        sumaParnih = sumaParnih + i * i;
        i++;
    }
    else if (i % 2 != 0) {
        sumaNeparnih = sumaNeparnih + i * i * i;
        i++;
    }
    else {
        i++
    }
}
console.log(`Suma kvadrata parnih brojeva je ${sumaParnih}`);
console.log(`Suma kubova neparnih brojeva je ${sumaNeparnih}`);


// 5. Zadatak JA
//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
// document.body.innerHTML += `<img src="slike/slika1.JPG">`
// document.body.innerHTML += `<img src="slike/slika2.JPG">`
// document.body.innerHTML += `<img src="slike/slika3.JPG">`
// document.body.innerHTML += `<img src="slike/slika4.JPG">`
// document.body.innerHTML += `<img src="slike/slika5.JPG">`
// document.body.innerHTML += `<img src="slike/slika6.JPG">`
// document.body.innerHTML += `<img src="slike/slika7.JPG">`
// document.body.innerHTML += `<img src="slike/slika8.JPG">`
let l = 8;
i = 1;
let okvir = "solid 5px black";
let okvir2 = "solid 5px red";
while (i <= l) {
    if (i % 2 == 0) {
        document.body.innerHTML += `<img style="border: ${okvir}" src = "slike/slika${i}.JPG">`;
        i++;
    }
    else {
        document.body.innerHTML += `<img style="border: ${okvir2}" src = "slike/slika${i}.JPG">`;
        i++;
    }
}


// 11. Zadatak Ja
//Odrediti sa koliko brojeva je deljiv uneti broj k
let k = 1564;
i = 1;
let br = 0;
while (i <= k) {
    if (k % i == 0) {
        br++;
        i++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva`);


// 12. Zadatak JA
//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom
k = 10;
i = 1;
br = 0;
while (i <= k) {
    if (k % i == 0) {
        br++;
        i++
    }
    i++
}
if (br <= 2) {
    console.log(`Broj ${k} je prost`);
}
else {
    console.log(`Broj ${k} je slozen`);
}

