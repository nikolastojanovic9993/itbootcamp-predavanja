// Zadatak 1.
//Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.
let niz1 = [-3, 4, 18, -5, -29, 10];
let f1 = niz => {
    let suma = 0;
    for (i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(f1(niz1));


//Zadatak 2.
//Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.
let f2 = niz => {
    for (i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            if (niz[i] % 2 != 0) {
                if (niz[i] < 0) {
                    niz[i] = niz[i] + 2 * Math.abs(niz[i]);
                }
                else if (niz[i] > 0) {
                    niz[i] = niz[i] - 2 * niz[i];
                }
            }
        }
    }
    console.log(niz);

}
f2(niz1);


//Zadatak 3.
//Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.
let f3 = niz => {
    let br = 0;
    for (i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            br++;
        }
    }
    return br;
}
console.log(f3(niz1));