/*
function ispisKonzola(niz) {
    let res = "";
    for (let i = 0; i < niz.length; i++) {
        res += niz[i] + " ";
    }
    console.log(res);
}


function ispisHTML(niz) {
    let res = "";
    for (let i = 0; i < niz.length; i++) {
        res += niz[i] + " ";
    }
    document.body.innerHTML += `<div>${res}</div>`
}
*/

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`
}

function ispisNiza(niz, cb) {
    let res = "";
    for (let i = 0; i < niz.length; i++) {
        res += niz[i] + " ";
    }
    cb(res);
}

let brojevi = [1, 6, -4, 9];
// ispisKonzola(brojevi);
// ispisHTML (brojevi);
ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);

// Isti zadatak, samo se pozivaju anonimne funkcije

ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

//Isti zadatak, samo se pozivaju arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`
});

//Zadatak ja
//a) odredi broj maksimalnih elemenata u celobrojnom nizu
//b) odredi broj minimalnih elemenata u celobrojnom nizu
// function brNajmanjih(niz) {
//     let br = 0;
//     let min = niz[0];
//     if (niz[i] < min) {
//         min = niz[i];
//     }
// }
// for (let i = 0; i < niz.length; i++) {
//     if (niz[i] == min) {
//         br++;
//     }
// }
// console.log(br);


// function brNajvecih(niz) {
//     let brn = 0;
// let max = niz[0];
//     if (niz[i] > max) {
//         max = niz[i];
//     }
// }
// for (let i = 0; i < niz.length; i++) {
//     if (niz[i] == max) {
//         brn++
//     }
// }
// console.log(brn);


// function final(niz, brNajvecih)

// for (let i = 1; i < niz.length; i++)
//     cb(niz)


// final(brojevi, brNajmanjih);



//Isti zadatak Stefan

function maxEl (niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++){
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

function minEl (niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++){
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}




function brojSvojstvoNiz (niz, svojstvo) {
    let s = svojstvo (niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj++;
        }
    }
    return broj;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvojstvoNiz (temperature, maxEl));
console.log(brojSvojstvoNiz (temperature, minEl));
