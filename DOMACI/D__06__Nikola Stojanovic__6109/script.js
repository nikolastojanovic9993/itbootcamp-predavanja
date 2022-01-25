// 1. Zadatak
let n = 8;
let m = 36;
let i = n;
let proizvodParnih = 1;
while (i <= m) {
    if (i % 7 == 0 && i % 3 != 0) {
        proizvodParnih = proizvodParnih * i;
        i++;
    }
    else {
        i++;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa 7 a nisu sa 3 je ${proizvodParnih}.`);


// 2. Zadatak
n = 4;
m = 25;
i = n;
let zbir = 0;
while (i <= m) {
    if (i % 3 == 0 && i % 7 != 0) {
        zbir = zbir + i;
        i++;
    }
    else {
        i++;
    }
}
console.log(`Zbir brojeva od ${n} do ${m} koji su deljivi sa 3 a nisu sa 7 je ${zbir}.`);