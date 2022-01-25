// 1. Zadatak
//Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function mnozi(n, m) {
    let p = 1;
    for (i = n; i <= m; i++) {
        p = p * i;
    }
    console.log(p);
}
mnozi(3, 6);

// 2. Zadatak
//Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function sredina(n, m) {
    let zbir = 0;
    let br = 0;
    for (i = n; i <= m; i++) {
        zbir = zbir + i;
        br++;
    }
    let sredina = zbir / br;
    return sredina;
}
console.log(sredina(3, 7));

// 3. Zadatak
//Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
function sredina1(n, m) {
    let zbir = 0;
    let br = 0;
    for (i = n; i <= m; i++) {
        if (i % 10 == 3) {
            zbir = zbir + i;
            br++
        }
    }
    let sredina1 = zbir / br;
    return sredina1;
}
console.log(sredina1(3, 33));

// 4. Zadatak
//Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function font(n) {
    document.body.innerHTML += `<p style="font-size:${n}px;">Tekst paragrafa</p>`
}
font(15);
font(30);
font(60);