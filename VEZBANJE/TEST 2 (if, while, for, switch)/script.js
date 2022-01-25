// Linijska struktura
//Zadatak 5. Za ucitani dvocifren broj izracunati broj zapisan istim ciframa ali u obrnutom poretku.
let n = 12;
let m = 12 % 10;
let br = m * 10 + Math.floor(n / 10);
console.log(br);


//Zadatak 6. Napisati program koji za uneti brojilac i imenilac ispisuje odgovarajuci broj u mesovitom obliku. Mesoviti oblik se oznacava celim delom i razlomkom gde je brojilac manji od imenioca (npr. 8/3 = 2 cela i 2/3).
n = 12 / 5;
m = Math.round(12 / 5);
br = 12 - m * 5;
console.log(`12 / 5 = ${m} cela i ${br} / 5`);


//Zadatak 7. Bankomat raspolaze novcanicama od 1000din, 500din, 100din i 1din. Odrediti najmanju kolicinu novcanica kojom bankomat moze isplatiti iznos od n dinara podrazumevajuci da bankomat raspolaze dovoljnom kolicinom svake novcanice.
n = 2758;
let n1000 = Math.floor(n / 1000);
n = n - n1000 * 1000;
let n500 = Math.floor(n / 500);
n = n - n500 * 500;
let n100 = Math.floor(n / 100);
n = n - n100 * 100;
let n1 = n;
console.log(`1000 - ${n1000}, 500 - ${n500}, 100 - ${n100}, 1 -${n1}`);


//Zadatak 8. Date su dve tacke u koordinatnom sistemu, zadate svojim koordinatama. Izracunati njihova rastojanja od koordinatnog pocetka.
let x1 = 4;
let y1 = 3;
let x2 = 3;
let y2 = 1;
let d1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
let d2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
console.log(d1, d2);