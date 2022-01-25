let a = [1, 9, -6, 5, 1];
let b = [4, 8, 10, 7];
/*
function ispis (elem) {
    console.log(`Element niza je: ${elem}`);
}

a.forEach(ispis);
*/

a.forEach(elem => {
    console.log(`Element: ${elem}`);
});

//Odrediti zbir elemenata celobrojnog niza
let zbir = (niz) => {
    let s = 0;
    niz.forEach(el => {
        s += el;
    });
    return s;
};

let zbirParnih = (niz) => {
    let s = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            s += el;
        }
    });
    return s;
};

let zbirElParniIndex = (niz) => {
    let s = 0;
    niz.forEach((el, index) => {
        if (index % 2 == 0) {
            s += el;
        }
    });
    return s;
};

console.log(zbir(a));
console.log(zbir(b));
console.log(zbirParnih(a));
console.log(zbirParnih(b));
console.log(zbirElParniIndex(a));
console.log(zbirElParniIndex(b));

//3. Zadatak ja
//Odrediti proizvod elemenata celobrojnog niza.
let proizvod = niz => {
    let p = 1;
    niz.forEach (el => {
        p *= el;
    });
    return p;
}
console.log(proizvod(a));
console.log(proizvod(b));

//4. Zadatak
//Odrediti srednju vrednost elemenata celobrojnog niza.
let srVr = niz => {
    let suma = 0;
    // let br = 0;
    niz.forEach (el => {
        suma += el;
        // br++;
    });
    // let sr = suma / br;
    return (niz.lenght != 0) ? suma / niz.length : 0;
}
console.log(srVr(a));
console.log(srVr(b));

//5. Zadatak
//Odrediti maksimalnu vrednost u celobrojnom nizu.
let max = niz => {
    let maks = niz[0];
    niz.forEach (el => {
        if (el > maks) {
            maks = el;
        }
    });
    return maks;
}
console.log(max(a));
console.log(max(b));

//6. Zadatak
//Odrediti minimalnu vrednost u celobrojnom nizu
let min = niz => {
    let min = niz[0];
    niz.forEach (el => {
        if (el < min) {
            min = el;
        }
    });
    return min;
}
console.log(min(a));
console.log(min(b));

//7. Zadatak
//Odrediti indeks maksimalnog elementa celobrojnog niza.
let maxi = (niz, cb) => {
    let maks = max(niz);
    let i = 0;
    niz.forEach ((el, index) => {
        if (el == maks) {
           i = index;
        }
    });
    return i;
    }
console.log(maxi(a));
console.log(maxi(b));

//7. Zadatak Stefan
let indexMax = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            imax = i;
        }
    });
    return imax;
}
console.log(indexMax(a));


//7 zadatak stefan opet krace
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

let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if(el == s) {
            index = i;
        }
    });
    return index;
}

console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));
console.log(indexSvojstvo(b, maxEl));
console.log(indexSvojstvo(b, minEl));
