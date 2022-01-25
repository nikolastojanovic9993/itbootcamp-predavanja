// 1. Zadatak
//Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).
let dan = 2;
switch (dan) {
    case 1:
        console.log(`Ponedeljak`);
        break;
    case 2:
        console.log(`Utorak`);
        break;
    case 3:
        console.log(`Sreda`);
        break;
    case 4:
        console.log(`Cetvrtak`);
        break;
    case 5:
        console.log(`Petak`);
        break;
    case 6:
        console.log(`Subota`);
        break;
    case 7:
        console.log(`Nedelja`);
}

// 2. Zadatak
// Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).
let ocena = 3;
switch (ocena) {
    case 1:
        console.log(`Nedovoljan`);
        break;
    case 2:
        console.log(`Dovoljan`);
        break;
    case 3:
        console.log(`Dobar`);
        break;
    case 4:
        console.log(`Vrlo dobar`);
        break;
    case 5:
        console.log(`Odličan`);
}

// 3. Zadatak
//Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.
let br = 4;
switch (br) {
    case 0:
        console.log(`Unet je broj 0.`);
        break;
    case 2:
        console.log(`Unet je broj 2.`);
        break;
    case 4:
        console.log(`Unet je broj 4.`);
        break;
    case 6:
        console.log(`Unet je broj 6.`);
        break;
    case 8:
        console.log(`Unet je broj 8.`);
        break;
    default:
        console.log(`Unos je pogrešan.`);
}

//4. Zadatak
//Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.
let br1 = 4;
let br2 = 2;
let rez = 0;
let rez1 = 0;
let calc = "s";
switch (calc) {
    case "m":
        rez = br1 * br2;
        console.log(`Rezultat je ${rez}`);
        break;
    case "d":
        rez1 = br1 / br2;
        console.log(`Rezultat je ${rez1}`);
        break;
    case "s":
        rez = br1 + br2;
        console.log(`Rezultat je ${rez}`);
        break;
    case "o":
        rez = br1 - br2;
        console.log(`Rezultat je ${rez}`);
        break;
}

//5. Zadatak
//Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.
let datum = new Date();
let dan1 = datum.getDay();
switch (dan1) {
    case 0:
        console.log(`Danas je vikend`);
        break;
    case 1:
        console.log(`Ostalo je 5 dana do vikenda`);
        break;
    case 2:
        console.log(`Ostalo je 4 dana do vikenda`);
        break;
    case 3:
        console.log(`Ostalo je 3 dana do vikenda`);
        break;
    case 4:
        console.log(`Ostalo je 2 dana do vikenda`);
        break;
    case 5:
        console.log(`Ostao je 1 dan do vikenda`);
        break;
    case 6:
        console.log(`Danas je vikend`);
}

//6. Zadatak
//Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let mesec = datum.getMonth();
switch (mesec) {
    case 0:
        console.log(`Januar`);
        break;
    case 1:
        console.log(`Februar`);
        break;
    case 2:
        console.log(`Mart`);
        break;
    case 3:
        console.log(`April`);
        break;
    case 4:
        console.log(`Maj`);
        break;
    case 5:
        console.log(`Jun`);
        break;
    case 6:
        console.log(`Jul`);
        break;
    case 7:
        console.log(`Avgust`);
        break;
    case 8:
        console.log(`Septembar`);
        break;
    case 9:
        console.log(`Oktobar`);
        break;
    case 10:
        console.log(`Novembar`);
        break;
    case 11:
        console.log(`Decembar`);
}

//7. Zadatak
//Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.
switch (mesec) {
    case 0:
        console.log(`Januar ima 31 dan`);
        break;
    case 1:
        let godina = datum.getFullYear();
        if (godina % 4 == 0 && godina % 100 != 0) {
            console.log(`Godina ${godina} je prestupna i februar ima 29 dana`);
        }
        else if (godina % 400 == 0) {
            console.log(`Godina ${godina} je prestupna i februar ima 29 dana`);
        }
        else {
            console.log(`Godina ${godina} nije prestupna i februar ima 28 dana`);
        }
        break;
    case 2:
        console.log(`Mart ima 31 dan`);
        break;
    case 3:
        console.log(`April ima 30 dana`);
        break;
    case 4:
        console.log(`Maj ima 31 dan`);
        break;
    case 5:
        console.log(`Jun ima 30 dana`);
        break;
    case 6:
        console.log(`Jul ima 31 dan`);
        break;
    case 7:
        console.log(`Avgust ima 31 dan`);
        break;
    case 8:
        console.log(`Septembar ima 30 dana`);
        break;
    case 9:
        console.log(`Oktobar ima 31 dan`);
        break;
    case 10:
        console.log(`Novembar ima 30 dana`);
        break;
    case 11:
        console.log(`Decembar ima 31 dan`);
}

// 8. Zadatak
//Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.
document.body.innerHTML += `<p>Tekst paragrafa</p>`
let boja = "red";
switch (boja) {
    case "red":
        document.body.innerHTML += `<p style="color: red">Tekst paragrafa</p>`;
        break;
    case "green":
        document.body.innerHTML += `<p style="color: green">Tekst paragrafa</p>`;
        break;
    case "blue":
        document.body.innerHTML += `<p style="color: blue">Tekst paragrafa</p>`;
        break;
    default:
        document.body.innerHTML += `<p style="color: yellow">Tekst paragrafa</p>`
}
