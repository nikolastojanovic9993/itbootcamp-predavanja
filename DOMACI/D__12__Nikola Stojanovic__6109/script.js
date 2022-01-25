import { Knjiga } from "./knjiga.js"

let knjiga1 = new Knjiga("Travnička hronika", "Ivo Andrićaaaaaaaaaaaaaaaaaaaaa", 1970, 515, 1000);
let knjiga2 = new Knjiga("Anđeli i demoni", "Den Braunaaaaaaaaaaaaaaaaaaaaaaaaaa", 2005, 900, 15000);
let knjiga3 = new Knjiga("Moć sadašnjeg trenutka", "Ekart Tol", 2015, 220, 600);
let knjiga4 = new Knjiga("Stranac", "Albert Kami", 1965, 801, 50000);
let knjiga5 = new Knjiga("Sto godina samoće", "G. G. Markes", 1972, 250, 950);

let knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];


let imeDugacko = arr => { //Napravio sam funkciju da ne bih zvao metodu za svaku knjigu posebno
    arr.forEach(k => {
        if (k.dugackoIme() == true) {
            console.log(`${k.autor} ima dugačko ime`);
        }
    });
}
imeDugacko(knjige);

let skupaIObimna = arr => {
    arr.forEach(k => {
        if (k.obimna() == true && k.skupa() == true) {
            console.log(`${k.naslov} je i skupa i obimna knjiga`);
        }
    });
}
skupaIObimna(knjige);

let ukupnaCena = arr => {
    let zbir = 0;
    arr.forEach(k => {
        zbir += k.cena;
    });
    return zbir;
}
console.log(ukupnaCena(knjige));

let prosecnaCena = arr => {
    let zbir = ukupnaCena(arr);
    let br = 0;
    arr.forEach(k => {
        br++;
    });
    return zbir / br;
}
console.log(prosecnaCena(knjige));

let prosecnaStranica = arr => {
    let zbir = ukupnaCena(arr);
    let zbirS = 0;
    arr.forEach(k => {
        zbirS += k.brojStrana;
    });
    return zbir / zbirS;
}
console.log(prosecnaStranica(knjige));
