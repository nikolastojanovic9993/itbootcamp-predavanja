console.log("5. Domaci");

console.log(`1. Zadatak`);
let p = 1600;
let m = 2000;
let k = 600;
let cenaDzempera = ( p + m - k ) / 2;
console.log(`Cena jednog dzempera je ${cenaDzempera} dinara.`);
let kusurPera = p - cenaDzempera;
let kusurMika = m - cenaDzempera;
console.log(`Pera treba da dobije ${kusurPera} dinara kusura.`); 
console.log(`Mika treba da dobije ${kusurMika} dinara kusura.`);

console.log(`2. Zadatak`);
let n = 23;
let a = 3;
let procitano2dana = a + 2; 
let ostaloPoglavlja = n - a - procitano2dana;
console.log(`Citaocu je preostalo da procita ${ostaloPoglavlja} poglavlja.`);

console.log(`3. Zadatak`);
let u = 4200;
let kcal = u / 4.1868
if(kcal < 2000) {
    console.log(`Potrebno je povecati dnevni unos`);
}
else {
    console.log(`Nije potrebno povecati dnevni unos.`);
}