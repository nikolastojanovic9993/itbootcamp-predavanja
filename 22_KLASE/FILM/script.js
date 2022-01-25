import { Film } from "./filmovi.js";

let f1 = new Film("Film1", "Reziser1", 1888, [8.2, 9.3, 7.9]);
let f2 = new Film("Film2", "Reziser2", 1788, [8, 9, 7, 6]);
let f3 = new Film("Film3", "Reziser3", 1993, [7, 6, 7, 7, 8, 7]);

f1.stampaj();
f2.stampaj();
f3.stampaj();
console.log(f2.godinaIzdanja);

//Dodavanje ocene u Film1
f1.dodajOcenu(10);
f1.stampaj();

// Prikaz svih filmova u tabelici
let tabelica =
    `<table border ="1">
    <tr>
        <th>Naziv filma</th>
        <th>Reziser</th>
        <th>Godina izdanja</th>
        <th>Ocene</th>
        <th>Prosecna</th>
    </tr>
`;

let filmovi = [f1, f2, f3];
filmovi.forEach(element => {
    tabelica +=
        `
    <tr>
        <td>${element.naslov}</td>
        <td>${element.reziser}</td>
        <td>${element.godinaIzdanja}</td>
        <td>${element.ocene}</td>
        <td>${element.prosek()}</td>
    </tr>
    `;
});

tabelica += `</table>`;
document.body.innerHTML = tabelica;


console.log(f1.prosek());
console.log(f2.prosek());

//Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

function vekFilmova(niz, vek) {
    niz.forEach(f => {
        if (f.godinaIzdanja >= ((vek - 1) * 100) + 1 && f.godinaIzdanja <= vek * 100) {
            console.log(f.naslov);
        }
    });
}

vekFilmova(filmovi, 18);


//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

function prosecnaOcena(niz) {
    let zbir = 0;
    let br = 0;
    let prosek = 0;
    niz.forEach(f => {
        for (let i = 0; i < f.ocene.length; i++) {
            zbir += f.ocene[i];
            br++;
        }
    });
    prosek = zbir / br;
    console.log(br);
    console.log(zbir);
    return prosek;
}
console.log(prosecnaOcena(filmovi));


//Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
function najboljeOcenjeni(niz) {

    let prosecne = [];
    niz.forEach(f => {
        let zbir = 0;
        let br = 0;
        let prosek = 0;

        for (let i = 0; i < f.ocene.length; i++) {
            zbir += f.ocene[i];
            br++;

        }
        prosek = zbir / br;
        prosecne.push(prosek);
    });
    console.log(prosecne);
    
        let max = prosecne[0];
        let maxElem = niz[0];
        for (let i = 0; i < prosecne.length; i++) {
            if (max < prosecne[i]) {
                max = prosecne[i];
                maxElem = arr[i]
            }
        }
        return maxElem
}

// let najboljeOcenjeni = arr => {
//     let najbolji = arr[0].prosek()
//     for (let i =0; i< arr.length; i++){
//         if (najbolji < arr[i].prosek()){
//             najbolji = arr[i].prosek()
//         }
//     }
//     return najbolji
// }
console.log(najboljeOcenjeni(filmovi));

//Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
/*
globalni prosek = 7.0
film1avg = 7.5        (film1avg - globalniProsek = 0.5)
film2 avg = 8.9       (film2avg - globalniProsek = 8.9 - 7.0 = 1.9)
film3 avg = 6.9       (film2avg - globalniProsek = 6.9 - 7.0 = -0.1)
*/

let osrednjiFilm = arr => {
    let globalniProsek = prosecnaOcena(arr);
    let filmNajbliziProseku = arr[0]; //pretpostavka da je prvi film najblizi proseku
    let najmanjaRazlikaOdProseka = Math.abs(globalniProsek - filmNajbliziProseku.prosek());
    arr.forEach(f => {
        let prosecnaOcenaFilma = f.prosek();
        if (Math.abs(globalniProsek - prosecnaOcenaFilma) < najmanjaRazlikaOdProseka) {
            najmanjaRazlikaOdProseka = Math.abs(globalniProsek - prosecnaOcenaFilma);
            filmNajbliziProseku = f;
        }
    });
    return filmNajbliziProseku;
}

osrednjiFilm(filmovi).stampaj();
console.log(f1.prosek());
console.log(f2.prosek());
console.log(f3.prosek());




//Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu

//prvo mora da se napravi da najboljeOcenjeni vraca ceo objekat
let najFilm = arr => {
    let najbolji = arr[0].prosek();
    let naj = arr[0];
    for (let i =0; i< arr.length; i++){
        if (najbolji < arr[i].prosek()){
            najbolji = arr[i].prosek()
            naj = arr[i];
        }
    }
    return naj;
}

let najmanjaOcenaNajboljeg = arr => {
    let najboljiFilm = najFilm(arr);
    let oceneNajboljegFilma = najboljiFilm.ocene; //vraca niz ocena najbolje ocenjenog filma
    let najslabijaOcena = oceneNajboljegFilma[0];
    oceneNajboljegFilma.forEach(o => {
        if (o < najslabijaOcena) {
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena);
}
najmanjaOcenaNajboljeg(filmovi);



//Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = arr => {
    let min = arr[0].ocene[0];
    arr.forEach(f => {
        for (let i = 0; i < f.ocene.length; i++) {
            if (f.ocene[i] < min) {
                min = f.ocene[i];
            }
        }
        
    })
    return min;
}
console.log(najmanjaOcena(filmovi));





//Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

let fo1 = [8.2, 9.3, 7.9, 10];
let fo2 = [8, 9, 7, 6];
let fo3 = [7, 6, 7, 7, 8, 7];
// f = [8.2, 9.3, 7.9, 10, 8, 9, 7, 6, 7, 6, 7, 7, 8, 7];
let f = [];
// f = f.concat(fo1);
// f = f.concat(fo2);
// f = f.concat(fo3);
f = f.concat(fo1, fo2, fo3); //konkatenacija, dodavanje
console.log(f)
console.log(typeof f); // tip je objekat kada radimo concat

f = [];
f.push(fo1);
console.log(f); //tip je array

let sveOcene = arr => {
    let arrSveOcene = [];
    arr.forEach(f => {
        arrSveOcene = arrSveOcene.concat(f.ocene);
        //arrSveOcene.push(f.ocene); //- moze i tako
    });
    return arrSveOcene;
}
console.log(sveOcene(filmovi));

//Niz koji prosledjujemo je niz svih ocena
let najcescaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; // Sigurno se jednom pojavio
    for(let i = 0; i < arr.length; i++) {
        let tekuci = arr[i]; // zvezdica
        let tekuciBrPojavljivanja = 0;
        for(let j = 0; j < arr.length; j++) {
            if(tekuci == arr[j]) {
                // naišli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }
        if(pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    return pretpostavkaElem;
}
let sve = sveOcene(filmovi); // niz svih ocena
console.log(najcescaOcena(sve));




// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (o, arr) => {
    let nizFilmova = [];
    arr.forEach(f => {
        if (f.prosek() > o) {
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
}
console.log(iznadOcene(7.4, filmovi));
let niz = iznadOcene(7.4, filmovi);
niz.forEach(f => {
    f.stampaj();
});



//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (o, arr) => {
    let nizFilmova = iznadOcene(o, arr);
    let najnoviji = arr[0].godinaIzdanja;
    let najnovijiFilm = arr[0];
    // arr.forEach(f => {
    //     if (f.prosek() > o) {
    //         nizFilmova.push(f);
    //     }

    // });
    nizFilmova.forEach(f => {
        if (f.godinaIzdanja > najnoviji) {
            najnoviji = f.godinaIzdanja
            najnovijiFilm = f;
        }
    })
    console.log(najnovijiFilm);
    document.body.innerHTML += 
    `${najnovijiFilm.naslov}
    ${najnovijiFilm.reziser}
    ${najnovijiFilm.godinaIzdanja}
    ${najnovijiFilm.ocene}
    `
}
iznadOceneNoviji(7.4, filmovi);