let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);

let numbers = [6, -7, 0, 5.5, -3.14];
console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars);

//cars[0] = undefined; - ovo jr nacin da se ukloni element iz niza

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//VEzbanje ja
// //2. Zadatak
// //Odrediti zbir elemenata celobrojnog niza.
// let niz = [2, 5, 12, 6];
// let zbir = 0;
// for (i = 0; i < niz.length; i++) {
//     zbir = zbir + niz[i];
// }
// console.log(zbir);

// //3. Zadatak
// //Odrediti proizvod elemenata celobrojnog niza
// let p = 1;
// for (i = 0; i < niz.length; i++) {
//     p = p * niz[i];
// }
// console.log(p);

// //4. Zadatak
// //Odrediti srednju vrednost elemenata celobrojnog niza
// // let suma = 0;
// // for (i = 0; i < niz.length; i++) {
// //     suma = suma + niz[i];
// // }
// // s = suma / niz.length;
// s = zbir / niz.length;
// console.log(s);

//2. Zadatak Stefan
let niz1 = [1, 8, 11, 5, 2];
let niz2 = [6, -9, 0, 0, 3];
let niz3 = [1, 4];

let sumaElemenata = niz => {
    let suma1 = 0;
    for (i = 0; i < niz.length; i++) {
        suma1 = suma1 + niz[i];
    }
    return suma1;
}

console.log("Suma elementara prvog niza je: " + sumaElemenata(niz1));
console.log("Suma elementara drugog niza je: " + sumaElemenata(niz2));
console.log("Suma elementara treceg niza je: " + sumaElemenata(niz3));

//3. Zadatak Stefan
let proizvodElemenata = niz => {
    let proizvod = 1;
    for (i = 0; i < niz.length; i++) {
        proizvod = proizvod * niz[i];
        //prozivod *= niz[i];
    }
    return proizvod;
}
console.log(proizvodElemenata(niz2));
console.log(proizvodElemenata(niz3));

//4. Zadatak Stefan
//Odrediti srednju vrednost elemenata celobrojnog niza
let arSr = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        broj++
    }
    return (broj != 0) ? suma / broj : 0; //da bi izbego deljenje nulom koje nije dozvoljeno
}

let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}

let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr3(niz1));
console.log(arSr3(niz2));
console.log(arSr3(niz3));
console.log(arSr3([]));

//4`. Odrediti srednju vrednost parnih elemenata niza

let arSrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            broj++;
        }
    }
    return (broj == 0) ? 0 : suma / broj;
}
console.log(arSrParnih(niz1));
console.log(arSr([1, 2, [1, 2, 3]])); // ne radi, ne ulazi u drugi niz


// //5. Zadatak ja
// //Odrediti maksimalnu vrednost u celobrojnom nizu.
// let maks = niz => {
//     let maks = 0;
//     for (i = 0; i < niz.length; i++) {
//         if (niz[i] > maks) {
//             maks = niz[i];
//         }
//         else {
//             maks = maks;
//         }

//     }
//     return maks;
// }
// console.log(maks(niz1));
// console.log(maks(niz2));
// console.log(maks(niz3));

// //6. Zadatak ja
// //Odrediti minimalnu vrednost u celobrojnom nizu
// let min = niz => {
//     let min = maks(niz);
//     for (i = 0; i < niz.length; i++) {
//         if (niz[i] < min) {
//             min = niz[i];
//         }
//         else {
//             min = min;
//         }
//     }
//     return min;
// }

// console.log(min(niz1));
// console.log(min(niz2));
// console.log(min(niz3));

// //7. Zadatak ja
// //Odrediti indeks maksimalnog elementa celobrojnog niza
// let imaks = niz => {
//     let maks = 0;
//     for (i = 0; i < niz.length; i++) {
//         if (niz[i] > maks) {
//             maks = niz[i];
//             maks1 = `${i}`;
//         }
//         else {
//             maks = maks;
//             maks1 = `${i}`;
//         }

//     }
//     return maks1;
// }

// console.log(imaks(niz1));

//5. Zadatak Stefan
//Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVrednost = niz => {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maxVrednost(niz1));
/*
Ulaz: niz = [1, 8, 11, 5, 2]

max = 1

i  | niz [i] |  max
--------------------
1  |    8    |   8
2  |   11    |  11
3  |    5    |  11
4  |    2    |  11

*/

// 6. Zadatak Stefan
// Odrediti minimalnu vrednost u celobrojnom nizu

let minVrednost = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}


// let niz1 = [1, 8, 11, 5, 2];
// let niz2 = [6, -9, 0, 0, 3];
// let niz3 = [1, 4];
//7. Zadatak ja
//Odrediti indeks maksimalnog elementa celobrojnog niza
let maxVrednosti = niz => {
    let max = niz[0];
    let maxi = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
            maxi = i;
        }
    }
    return maxi;
}
console.log(maxVrednosti(niz1));
console.log(maxVrednosti(niz2));
console.log(maxVrednosti(niz3));

//8. Zadatak ja
//Odrediti indeks minimalnog elementa celobrojnog niza
let minVrednosti = niz => {
    let min = niz[0];
    let mini = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
            mini = i;
        }
    }
    return mini;
}
console.log(minVrednosti(niz1));
console.log(minVrednosti(niz2));
console.log(minVrednosti(niz3));

//9. Zadatak ja
//Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let br = niz => {
    let br = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] > arSr(niz)) {
            br++;
        }
    }
    return br;

}
console.log(arSr3(niz1));
console.log(br(niz1));
console.log(arSr(niz2));
console.log(br(niz2));
console.log(arSr(niz3));
console.log(br(niz3));

//10. Zadatak
//Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirP = niz => {
    let zbir = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirP(niz1));
console.log(zbirP(niz2));

//11. Zadatak
//Odrediti broj parnih elemenata u celobrojnom nizu.
let parni = niz => {
    let br = 0;
    for (i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            br++
        }
    }
    return br;
}
console.log(parni(niz1));
console.log(parni(niz2));
console.log(parni(niz3));

//12. Zadatak
//Odrediti broj parnih elemenata sa neparnim indeksom.
let parne = niz => {
    let brp = 0;
    let brn = 0;
    for (i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            if (niz[i] % 2 == 0) {
                brp++;
            }
        }
    }
    return brp;
}
console.log(parne(niz1));
console.log(parne(niz2));

//             0  1   2  3  4
// let niz1 = [1, 8, 11, 5, 2];
// let niz2 = [6, -9, 0, 0, 3];
// let niz3 = [1, 4];

//7. Zadatak ja
//Odrediti broj maksimalnih elemenata celobrojnog niza
let brmax = niz => {
    let maxi = niz[0];
    let br = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > maxi) {
            maxi = niz[i];
        }

    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == maxi) {
            br++;
        }
    }
    return br;
}
let niz4 = [1, 2, 3, 4, 5, 5];
console.log(brmax(niz4));

//16. Zadatak ja
//Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
// let kupovina = ["hleb", "jaja", "cokolada", "brasno"];
// let spisak = niz => {
//     document.body.innerHTML += `<ul>`
//     for (let i = 0; i < niz.length; i++) {
//        document.body.innerHTML += `<li>${niz[i]}</li>`
// }
//     document.body.innerHTML += `</ul>`
// }
// spisak(kupovina);

//17. Zadatak
//Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
// let timovi = ["Zdravlje", "Radnicki", "Crvena Zvezda", "Partizan"];
// let imena = niz => {
//     document.body.innerHTML += `<table>`
//     for (let i = 0; i < niz.length; i++) {
//         document.body.innerHTML += `<tr>${niz[i]}`
//     }
//     document.body.innerHTML += `</table>`
// }
// imena(timovi);

//16. Zadatak Stefan
let lista = ["hleb", "mleko", "sir", "secer", "brasno"];

let ispisLista = niz => {
    let rezultat = "";
    rezultat += "<ul>"
    for (let i = 0; i < niz.length; i++) {
        rezultat += `<li>${niz[i]}</li>`;
    }
    rezultat += "</ul>";
    return rezultat; // string koji sadrzi HTML kod sa kodom liste
}

// document.body.innerHTML += ispisLista(lista);
document.getElementById('d1').innerHTML += ispisLista(lista);

//17. Zadatak ja po stefanovom
let timovi = ["Zdravlje", "Radnicki", "Crvena Zvezda", "Partizan", "Kjdkf"];
let ispisTimovi = niz => {
    let rezultat = `<table style="border: 1px solid black;">`;
    for (let i = 0; i < niz.length; i++) {
        rezultat += `<tr><td style="border: 1px solid black;">${niz[i]}</td></tr>`;
    }
    rezultat += "</table>"
    return rezultat;
}
document.getElementById(`d2`).innerHTML += ispisTimovi(timovi);

//18.Zadatak
//Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike = ["slike/slika2.JPG", "slike/slika3.JPG"]
let ispisSlika = niz => {
    let rezultat = "";
for(let i = 0; i < niz.length; i++) {
    rezultat += `<img src=${niz[i]}>`
}
return rezultat;
}
document.getElementById(`d3`).innerHTML += ispisSlika(slike);

//19. Zadatak ja
//Ispisati dužinu svakog elementa u nizu stringova. 
let duzina = niz => {
    let rez = 0;
    for (let i = 0; i < niz.length; i++) {
        rez = niz[i].length;
        console.log(rez);
    }
}
duzina (timovi);

//20. Zadatak ja
//Odrediti element u nizu stringova sa najvećom dužinom
let maksduzina = niz => {
    let maks = 0;
    let maksi = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > maks) {
            maks = niz[i].length;
            maksi = i;
        }
    }
    return niz[maksi];
}
console.log(maksduzina (timovi));

//let timovi = ["Zdravlje", "Radnicki", "Crvena Zvezda", "Partizan"];

//21. Zadatak
//Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
// let brmaks = niz => {
//     let suma = 0;
//     let br = 0;
//     let br1 = 0;
//     for (let i = 0; i < niz.length; i++) {
//         suma += niz[i].length;
//         br++;
//     }
//     let as = suma / br;
//     for (i = 0; i < niz.length; i++) {
//         if (niz[i].length > as) {
//             br1++;
//         }
//     }
//     return br1;
// }

// let niz21 = ["1", "12", "123", "1234"]
// console.log(brmaks(niz21));

// //22. Zadatak
// //Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
// let daliA = niz => {
//     let br = 0;
//     let rez = "";
//     for (let i = 0; i < niz.length; i++) {
//        rez = niz[i].includes("a");
//        if (rez == true) {
//            br++;
//        }
//     }
//     return br;
// }
// console.log (daliA(timovi));

// //23. Zadatak
// //Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’
// let pocA = niz => {
//     let br = 0;
// }


//19. Zadatak stefan
let duzinaEl = niz => {
    for (let i = 0; i <niz.length; i++) {
        console.log (niz[i].length);
    }
}

let imena = ["Stefan", "Kristian", "Bogdan", "Pavle", "Aleksandar"];
duzinaEl(imena);


//20. Zadatak stefan
//ODrediti element u nizu stringova sa najvecom duzinom

let stringMaxDuzine = niz => {
    let maxDuzina = niz[0].length; //pp da je prvi element niza najduzi
    let maxString = 0;
    for (i = 1; i < niz.length; i++) {
        if (niz[i].length > maxDuzina) {
            maxDuzina = niz[i].length;
            maxString = niz[i];

        }
    }
    return maxString;
}
console.log(stringMaxDuzine(imena));

//21. Zadatak Stefan
//Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let prosDuzina = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma = suma + niz[i].length;
        broj++;
    }
    return broj != 0 ? suma / broj : 0;
}

let brojVeciProsDuz = niz => {
    let broj = 0;
    let pd = prosDuzina(niz);
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > pd) {
            broj++;
        }
    }
    console.log(niz);
    console.log(pd);
    return broj;
}
console.log(prosDuzina(imena));
console.log(brojVeciProsDuz (imena));

//22. Zadatak stefan
//Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let brojSadrziA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes("a")) {
            broj++;
        }
    }
    return broj;
}
console.log(brojSadrziA(imena));

// 22`. Odrediti broj pojavljivanja slova 'a' u nizu stringova.
let brojKarakteraA = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        // niz[i] je string
        let element = niz[i];
        //Sada prolazimo kroz sve karaktere stringa element
        for (let j = 0; j < element.length; j++) {
            if (element[j] == "a") //pristipas j-om karakteru stringa
            {
                broj++;
            }
        }
    }
    return broj;
}
console.log(brojKarakteraA(imena));
//let imena = ["Stefan", "Kristian", "Bogdan", "Pavle", "Aleksandar"];

// Zadatak 24
let a = [1, 4, 7, -5];
let b = [6, 6, 0, 9];

let zad24 = (a, b) => {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c[2 * i] = a[i]; // c[0] = a[0], c[2] = a[1];
        c[2 * i + 1] = b[i]; // c[]
    }
    return c;
}
let res = zad24(a,b);
console.log(res);

//2. nacin
let zad241 = (a, b) => {
    let c = [];
    for (let i = 0; i <a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}
let res1 = zad241(a, b);
console.log(res1);

//25. Zadatak
