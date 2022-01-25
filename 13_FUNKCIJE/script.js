console.log("Funkcije");

function zdravo() {
    console.log("Zdravo svete!!!");
}

zdravo();
zdravo();
console.log("Hello!");
zdravo();


function stampaj(tekst) {
    console.log(tekst);
}

stampaj("Jelena");
stampaj("Stefan");
stampaj(`Nikola`);
let ime = "Sofija";
stampaj(ime);

//tekst - parametar (kad definises fuknciju); Jelena, Stefan, Nikola - argument (kada se poziva funkcija), mada se cesto poistovecuju

////////////////////////////////////////////

function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}
korisnik("Stefan", "Stanimirovic");
korisnik("Jelena", "Matejic");

////////////////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina.`);
}

korisnikGodine(`Jelena`, `Matejic`, 27);
korisnikGodine(`Pera`, `Peric`, 17);

////////////////////////////////////////////

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir); // Ispisuje vrednost
}

zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

///////////////////////////////////////////

function vratiZbirDvaBroja(a, b) {
    let zbir = a + b; //mozes opet da ides 'let zbir' zato sto je to lokalno, vazi samo u tom scope-u (viticastim zagradama)
    return zbir; //mozes da navedes samo jednu promenljivu koju hoces da vratis i ne mozes da ides dva puta return; kad se izvrsi return funcija se prekida, nista ispod njega nece da se izvrsi
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); // rez1 = 10
let rez2 = vratiZbirDvaBroja(5, 7); // rez2 = 12
let rez3 = vratiZbirDvaBroja(rez1, rez2); // rez3 = 22;
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

/////////////////////////////////////////////

function voda(temperatura) {
    console.log(`Uneli ste temperaturu od ${temperatura} stapeni C`);
    if (temperatura <= 0) {
        console.log(`Voda je u čvrstom agregatnom stanju`);
    }
    else if (temperatura >= 100) {
        console.log(`Voda je u gasovitom agregatnom stanju`);
    }
    else {
        console.log(`Voda je u tečnom agregatnom stanju`);
    }
}

voda(3);
voda(100);

///////////////////////////////////



// Vezbanje JA
// Zadatak 2.
//Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function zbir(a, b) {
    let zbir = a + b;
    console.log(`Zbir brojeva ${a} i ${b} je ${zbir}`);
}
zbir(3, 5);
//Trebalo bi izmeniti samo znak racunske operacije da bi se dobila razlika, proizvod ili kolicnik dva broja


// Zadatak 3.
//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan
function neparan(n) {
    if (n % 2 == 0) {
        console.log(`Netačno`);
    }
    else {
        console.log(`Tačno`);
    }
}
neparan(3);


//Zadatak 4.
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja
function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
rez = maks2(3, 5);
console.log(rez);

function maks4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    }
    else {
        return d;
    }
}
rez = maks4(8, 2, 3, 4);
console.log(rez);


//Vezbanje JELENA
// 2.Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
// function racunaj(br1, br2, operacija) {
//     if (operacija == "+") {
//         let rezultat = br1 + br2;
//         console.log(rezultat);
//     }
//     else if (operacija == "-") {
//         let rezultat = br1 - br2;
//         console.log(rezultat);
//     }
//     else if (operacija == "*") {
//         let rezultat = br1 * br2;
//         console.log(rezultat);
//     }
//     else if (operacija == "/") {
//         if (br2 == 0) {
//             console.log(`Deljenje nulom nije dozvoljeno`);
//         }
//         else {
//             let rezultat = br1 / br2;
//             console.log(rezultat);
//         }
//     }
//     else {
//         console.log("Pogrešan unos");
//     }
// }
// racunaj(5, 4, "+");
// racunaj(5, 4, "-");
// racunaj(5, 4, "/");
// racunaj(5, 4, "*");
// racunaj(5, 4, "%");
// racunaj(5, 0, "/");




// Drugi nacin rezultat je drugacije definisan
function racunaj(br1, br2, operacija) {
    let rezultat = "";
    if (operacija == "+") {
        rezultat = br1 + br2;
    }
    else if (operacija = "-") {
        rezultat = br1 - br2;
    }
    else if (operacija = "*") {
        rezultat = br1 * br2;
    }
    else if (operacija = "/") {
        if (br2 == 0) {
            rezultat = "Deljenje nulom nije dozvoljeno"
        }
        else {
            rezultat = br1 / br2;
        }
    }
    else {
        rezultat = "Pogresan unos."
    }
    console.log(rezultat);
}
racunaj(5, 4, "/");
racunaj(5, 4, "%");
racunaj(5, 0, "/");

//Ovde nesto ne radi :)

//let vazi samo u tom scopeu a var vazi globalno, svuda se vidi
// ako ne stavi ni let ni var ispred promenljive, ona se racuna kao da je var

//Primer 1 za scope
if (true) {
    let test = "zdravo";
    if (true) {
        console.log(test); // ovde vidi test
    }
}
//console.log(test); // ne vidi ga jer se test vidi samo u okviru ovog gore if-a, tj njegovog scopea


// 3. Zadatak
//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
function neparan(n) {
    if (n % 2 != 0) {
        return true; // neparan broj
    }
    else {
        return false; // paran broj
    }
}
let nep = neparan(13);
console.log(nep);

//drugi nacin
function neparan1(n) {
    let rez = true;
    if (n % 2 == 0) {
        rez = false;
    }
    return rez;
}
let nep1 = neparan1(6);
console.log(nep1);

//treci nacin
function neparan2(n) {
    return n % 2 != 0;
}
let nep2 = neparan2(163);
console.log(nep2);


//Zadatak 4. JAAAA
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja
function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else if (b > a) {
        return b;
    }
    else {
        return "Brojevi su jednaki."
    }
}
rez = maks2(3, 5);
console.log(rez);

function maks4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    }
    else if (d > a && d > b && d > c) {
        return d;
    }
    else {
        return "Pogresan unos."
    }
}
rez = maks4(8, 2, 3, 4);
console.log(rez);

//Jelenin predlog
function maks4_Jelena(a, b, c, d) {
    let max1 = maks2(a, b); // Vrati mi koji je veci broj izmedju a i b
    let max2 = maks2(c, d) // Vrati mi koji je veci broj izmedju c i d
    let max = maks2(max1, max2);
    return max;
}
let maks4broja = maks4_Jelena(5, 7, 2, 9);
console.log(maks4broja);


//Aleksandrov predlog
function maks4_aleksandar(a, b, c, d) {
    let max = maks2(maks2(a, b), maks2(c, d));
    return max;
    //Ili zadatak resiti u jednoj liniji kao
    //return maks2(maks2(a, b), maks2(c,d));
}
let maks4brojaa = maks4_aleksandar(5, 17, 2, 9)
console.log(maks4brojaa);


//5. Zadatak
//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike
function slika(putanja) {
    document.body.innerHTML += `<img src=${putanja}>`
}
slika("slike/slika3.JPG");
slika("slike/slika2.JPG");

//6. Zadatak
//Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boja(boja) {
    document.body.innerHTML += `<p style="color: ${boja};">Ovo je tekst paragrafa</p>`
}
boja("red");
boja("blue");

//7. Zadatak
//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
    if (n == 0) {
        console.log(`Nedelja`);
    }
    else if (n == 1) {
        console.log(`Ponedeljak`);
    }
    else if (n == 2) {
        console.log(`Utorak`);
    }
    else if (n == 3) {
        console.log(`Sreda`);
    }
    else if (n == 4) {
        console.log(`Cetvrtak`);
    }
    else if (n == 5) {
        console.log(`Petak`);
    }
    else if (n == 6) {
        console.log(`Subota`);
    }
    else if (n % 7 == 0) {
        console.log(`Nedelja`);
    }
    else if (n % 7 == 1) {
        console.log(`Ponedeljak`);
    }
}
sedmiDan(8);

//8. Zadatak
//Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n, m) {
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            br++; // br+=1; br = br + 1;
        }
    }
    console.log(`Broj brojeva deljivih sa 3 u intervalu od ${n} do ${m} je ${br}`);
}
deljivSaTri(10, 30);


//Zadatak 14.
//Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
function petPuta(recenica) {
    for (let i = 1; i <= 5; i++) {
        document.body.innerHTML += `<p style="font-size:${i * 10}px;">${recenica}</p>`
    }
}
petPuta("Neki paragraf");

//Zadatak 15.
//Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća)
function plata(n, a, d) {
    let suma = a;
    for (i = 1; i <= n; i++) {
        if (i >= 2) {
            suma = suma + a + d;
        }
    }
    return suma;

}
let p = plata(3, 50000, 5000)
console.log(p);

// Jelena
let n = 3;
let a = 5000;
let d = 200;
//1. mesec - 5000
//2. mesec - 5000+200
//3. mesec - 5000+200
let ukupno = a * n + d * (n - 1); //Plate + povisice
let ukupno1 = n * (a + d) - d; //Plate sa povisicima - 1. mesec kada nemam povisicu
let ukupno2 = a + (n - 1) * (a + d) //plata za prvi mesec + plata za preostalih n-1 meseci


//16. |Zadatak
//Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

function vreme(t, p, n) {
    let cekaj = n + p - t;
    if (p > t || t >= p + n) {
        console.log(`Burke samo pici`);
    }
    else {
        console.log(`Burke treba da krene kroz ${cekaj} sec da ne bi cekao most`);
    }
}
vreme(17, 16, 16);
