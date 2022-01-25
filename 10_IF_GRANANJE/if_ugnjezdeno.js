console.log(`Ugnjezdeno grananje`);
// 19. Zadatak

let b1 = 10;
let b2 = 2;
let b3 = 14;

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Broj ${b1} je najveci`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je srednji`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b3} je srednji`);
            console.log(`Broj ${b2} je najmanji`);
        }
    }
    else {
        console.log(`Broj ${b1} je srednji`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je najveci`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b2} je najmanji`);
            console.log(`Broj ${b3} je najveci`);
        }
    }
}

//// OVo sam ja na dole
if (b2 > b1) {
    if (b2 > b3) {
        console.log(`Broj ${b2} je najveci`);
        if (b1 > b3) {
            console.log(`Broj ${b1} je srednji`);
            console.log(`Broj ${b3} je najmanji`);
        }
        else {
            console.log(`Broj ${b1} je najmanji`);
            console.log(`Broj ${b3} je srednji`);
        }
    }
    else {
        console.log(`Broj ${b2} je srednji`);
        console.log(`Broj ${b1} je najmanji`);
        console.log(`Broj ${b3} je najveci`);
    }

}

// 20. Zadatak 
// Ucitati dva cela broja i ispitati da li je veci od njih paran
let a = 17;
let b = 16;
if (a > b) {
    if (a % 2 == 0) {
        console.log(`Veci broj ${a} je paran`);
    }
    else {
        console.log(`Veci broj ${a} je neparan`);
    }
}
else {
    if (b % 2 == 0) {
        console.log(`Veci broj ${b} je paran`);
    }
    else {
        console.log(`Veci broj ${b} je neparan`);
    }
}
