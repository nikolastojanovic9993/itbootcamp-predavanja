
//Uspostaviti konekciju ka fajlu sportisti.json.
let sportistiF = (resolve, reject) => {
    let sportistiR = new XMLHttpRequest();
    sportistiR.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState == 4) {
            reject("Doslo je do greske!")
        }
    });
    sportistiR.open('GET', 'sportisti.json');
    sportistiR.send();
}


let ispisPorukeKonzola = poruka => {
    console.log(`${poruka}`);
}

//Ispisati prosečnu visinu svih sportista.
let prosecna = niz => {
    let visina = 0;
    let br = 0;
    niz.forEach(s => {
        visina += s.visina;
        br++
    });
    console.log(`Prosecna visina svih sportista je: ${visina / br} cm`);
}
sportistiF(prosecna, ispisPorukeKonzola);


//Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).
let najmanjeT = niz => {
    let min = niz[0].timovi.length;
    let igrac;
    niz.forEach(s => {
       if (s.timovi.length < min) {
            min = s.timovi.length;
            igrac = s.imePrezime;
        }
    })
    console.log(`${igrac} je sportista sa najmanje transfera`);
}
sportistiF(najmanjeT, ispisPorukeKonzola);


//Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.
let lakers = niz => {
    let lakers = [];
    niz.forEach(s => {
        if (s.timovi.includes("Lakers")) {
            lakers.push(s.imePrezime);
        }
    })
    console.log(`Sportisti koji su igrali za "Lakers" su: ${lakers}`);
}
sportistiF(lakers, ispisPorukeKonzola)