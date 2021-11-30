//1. zadatak

let a = 5;
let b = 7;
if(a > b) {
    console.log(`Broj ${a} je veci ili jednak od broja ${b}`);
}
else {
    console.log(`Broj ${a} je manji ili jednak od broja ${b}`);
}

//2. zadatak

let t = 6;
if(t > 0) {
    console.log(`Temperatura je u plusu`);
}
else {
    console.log(`Temperatura je u minusu`);
}

//4. zadatak

let datum = new Date ();
let sati =  datum.getHours();
if(sati > 12) {
    console.log(`Trenutno je popodne`);
}
else {
    console.log(`Trenutno je jutro`);
}

//5. zadatak

let godina = datum.getFullYear();
let godinarodjenja = 1993;
if(datum - godinarodjenja < 18) {
    console.log(`Osoba je maloletna`);
}
else {
    console.log(`Osoba je punoletna`);
}

//6. zadatak

let x = 5;
let y = 7;
let z = 9;
if(z > y > x) {
    console.log(`Broj ${z} je najveci`);
}

//JELENA
//2. Zadatak
let temp = 10;
if(temp >= 0) {
    document.body.innerHTML = `<p style="color: red;">Temperatura od ${temp} stepeni je u plusu </p>`;
}
else {
    document.body.innerHTML = `<p style="color: blue;">Temperatura od ${temp} stepeni je u minusu </p>`;
}