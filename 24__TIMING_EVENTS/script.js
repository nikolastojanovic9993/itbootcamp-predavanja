console.log("1");
console.log("2");


/*
for(let i = 1; i < 10000; i++) {
    console.log(i);
}
BLOKIRAJUCI KOD (dok se ne izvrsi ne ide dalje)
*/

//Arrow funkcija
setTimeout(() => {
    console.log("3");
}, 1000 * 4);

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let div = document.getElementById("result");

let ispis = document.getElementById("ispis");
let ispisB = document.getElementById("ispisB");
let ispisBValue = ispisB.value;


let timer = null;
let clock = null;
let brojac = null;

btn1.addEventListener("click", function () {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if (timer === null) {//da ne mogla vise njih da idu paralelno
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null;//da bi resetovao i mogao opet da kliknes
        }, 2000);
    }
});


btn2.addEventListener("click", function () {
    clearTimeout(timer);
    timer = null;
});


//Primer digitalni sat

btn3.addEventListener("click", function () {
    if (clock === null) {
        clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000 / 10);
    }
});

btn4.addEventListener("click", function () {
    clearInterval(clock);
    clock = null;
    // ispis.innerHTML = "";
});

// document.getElementById("ispisB").value = "aa"
btn5.addEventListener("click", function () {
    if (brojac === null) {
        let i = 1;
        brojac = setInterval(() => {
            // document.getElementById("ispisB").value = i;
            ispisB.value = i;
            ispisBValue = i;
            i++;
            console.log(ispisBValue);
        }, 1000)
    }
});

btn6.addEventListener("click", function () {
    clearInterval(brojac);
    brojac = null;
})











//Cao Julijicee

// //Anonimna funkcija
// setTimeout(function() {
//     console.log(this); // this = objekat koji poziva metodu (window u ovom slucaju)
// }, 1000 * 2);

// //Arrow funkcija
// setTimeout(() => {
//     console.log(this); // this = window (uvek je samo window), funkcija se ne vezuje za objekat koji poziva metodu, samo za window i zato ih ne koristimo za metode kod objekata
// }, 1000 / 2);


//Imenovana funckija
// function ispis () {
//     console.log("3");
// }
// setTimeout(ispis, 1000 * 2);




