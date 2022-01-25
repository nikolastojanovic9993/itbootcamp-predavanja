function suma(a, b) // definicija f-je
{
    return a + b;
}

console.log(suma(4, 5)); // Poziv f-je
console.log(suma(1, 0)); // Poziv f-je

// Anonimne funkcije
let suma2 = function (a, b) {
    return a + b;
} // Anonimna je jer nema ime, unutar promenljive je i tako je i pozivas

console.log(suma2(6, 6));

// Arrow funkcije (skracen zapis anonimnih funkcija)
let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));

//Arrow funkcija za ispis poruke
let hello = () => {
    console.log("Hello world!");
}
hello();

let pozdrav = (ime, prezime) => {
    console.log("Zdravo " + ime + " " + prezime);
}
pozdrav("Nikola", "Stojanovic");
pozdrav("Vladan", "Stojic");

// Arrow f-ja kojoj se prosledjuje ime i godine korisnika, a ona ispisuje ime i da li je korisnik punoletan ili ne
let ispis = (ime, godine) => {
    if (godine < 18) {
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color: blue">${poruka}</p>`;
    }
    else {
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color:green">${poruka}</p>`;
    }
}

ispis("Pera", 28);
ispis("Mika", 16);

//Vezbanje
//3. Zadatak
//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan

let neparan = (n) => {
    if (n % 2 != 0) {
        return "Tačno";
    }
    else {
        return "Netačno";
    }
}
console.log(neparan(3));
console.log(neparan(4));

//4. Zadatak
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// let maks2 = (a, b) => {
//     if (a > b) {
//         return a;
//     }
//     else if (b > a) {
//         return b;
//     }
//     else {
//         return "Brojevi su jednaki"
//     }
// }
// console.log(maks2(2, 4));
// console.log(maks2(4, 4));

// let maks4 = (a, b, c, d) => {
//     let max1 = maks2(a, b);
//     let max2 = maks2(c, d);
//     let max = maks2(max1, max2);
//     return max
// }
// console.log(maks4(6, 2, 3, 4));

//5. Zadatak
//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike
let slika = (adresa) => {
    document.body.innerHTML += `<img src=${adresa}>`
}
slika("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*");

//6. Zadatak
//Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju
let boja = (boja) => {
    document.body.innerHTML += `<p style="color:${boja}">Tekst paragrafa</p>`;
}
boja("red");
boja("blue");




//5. Zadatak Stefan
let slika1 = (putanja) => {
    return `<img src="${putanja}">`;
}

let slika2 = (putanja) => `<img src="${putanja}">`; // Sraceni nacin pisanja, kad ima samo return statement

let slika3 = putanja => `<img src="${putanja}">`; //Ukoliko ima samo jedan parametar, moze bez zagrada

document.body.innerHTML += slika1("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*");
document.body.innerHTML += slika2("https://thumbs.dreamstime.com/b/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg");
document.body.innerHTML += slika3("http://cdn.akc.org/content/article-body-image/samoyed_puppy_dog_pictures.jpg");


//4. Zadatak Stefan
let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

let max2 = (a, b) => {
    // return if(a > b) then a else b; - Ovo ti treba ali ne moze
    return (a > b) ? a : b; // ovako moze
}
let max3 = (a, b) => (a > b) ? a : b;

// ? : - __?__:__

console.log(max3(16, 9));
console.log(max3(16, 16));

let max4 = (a, b, c, d) => {
    return max2(max2(a, b), max2(c, d))
}
let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max4(6, 19, -5, 5));
console.log(max4DN(6, 19, -5, 5));

// Da li je broj paran ili ne
let paran = n => (n % 2 == 0);
console.log(paran(6));

//7. Zadatak
//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
let sedmiDan = (n) => {
    if (n % 7 == 0) {
        return "Nedelja"
    }
    else if (n % 7 == 1) {
        return "Ponedeljak";
    }
    else if (n % 7 == 2) {
        return "Utorak";
    }
    else if (n % 7 == 3) {
        return "Sreda";
    }
    else if (n % 7 == 4) {
        return "Četvrtak";
    }
    else if (n % 7 == 5) {
        return "Petak";
    }
    else if (n % 7 == 6) {
        return "Subota";
    }
}
console.log(sedmiDan(6));

let mesec = n => {
    if (n % 12 == 0) {
        return "Januar"
    }
    else if (n % 12 == 1) {
        return "Februar";
    }
    else if (n % 12 == 2) {
        return "Mart";
    }
    else if (n % 12 == 3) {
        return "April";
    }
    else if (n % 12 == 4) {
        return "Maj";
    }
    else if (n % 12 == 5) {
        return "Jun";
    }
    else if (n % 12 == 6) {
        return "Jul";
    }
    else if (n % 12 == 7) {
        return "Avgust";
    }
    else if (n % 12 == 8) {
        return "Septembar";
    }
    else if (n % 12 == 9) {
        return "Oktobar";
    }
    else if (n % 12 == 10) {
        return "Novembar";
    }
    else if (n % 12 == 11) {
        return "Decembar";
    }
}
console.log(mesec(3));

//8. Zadatak
//Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
//Prebrojati koliko ima ovakvih brojeva od n do m.
let deljivSaTri = (n, m) => {
    let i;
    let br = 0;
    for (i = n; i <= m; i++) {
        if (i % 3 == 0) {
            br++;
            console.log(i);
        }

    }
    console.log(br);
}
deljivSaTri(3, 6);

//9. Zadatak
//Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
    let i;
    let suma = 0;
    for (i = n; i <= m; i++) {
        suma = suma + i;
    }
    return suma;
}
console.log(sumiraj(3, 5));

// 7. Zadatak Stefan
let sedmiDan1 = n => (n % 7 == 0) ? "Ned" : (n % 7 == 1) ? "Pon" : (n % 7 == 2) ? "Uto" : (n % 7 == 3) ? "Sre" : (n % 7 == 4) ? "Cet" : (n % 7 == 5) ? "Pet" : "Sub";


for (i = 0; i < 7; i++) {
    console.log(sedmiDan1(i));
}
