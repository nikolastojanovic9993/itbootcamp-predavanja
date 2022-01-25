let request = new XMLHttpRequest();
//Ovo smo radili samo da vidimo stadijume readystatechange-a
// request.addEventListener('readystatechange', () => {
//     if(request.readyState == 1) {
//         console.log("Uspostavljena konekcija");
//     }
//     else if (request.readyState == 2) {
//         console.log("Poslat je zahtev serveru");
//     }
//     else if (request.readyState == 3) {
//         console.log("Prihvata se odgovor - u statusu preuzimanja");
//     }
//     else if (request.readyState == 4) {
//         console.log("Odgovor je preuzet: ", request.responseText);
//     }

// });

//Arrow funkcija
// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request.responseText);

//     }
//     else if (request.readyState === 4) {
//         console.log("could not fetch data");
//     }
// });

//Sa anonimnom funkcijom mozes da korists this.
request.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
    else if (this.readyState === 4) {
        console.log("could not fetch data");
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();



//VEzbanje 16. slajd
//Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users

//Ispisati u konzoli one korisnike čiji website ima domen „.com“.
let request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
            let website = data[i].website.includes(".com")
            if (website == true) {
                console.log(data[i]);
            }
        }
    }
    else if (this.readyState === 4) {
        console.log("could not fetch data");
    }
});

request1.open('GET', 'https://jsonplaceholder.typicode.com/users');
request1.send();

//Ispisati korisnike čije ime sadrži reč „Clementin“
let request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
            let ime = data[i].name.includes("Clementin")
            if (ime == true) {
                console.log(data[i]);
            }
        }
    }
    else if (this.readyState === 4) {
        console.log("could not fetch data");
    }
});

request2.open('GET', 'https://jsonplaceholder.typicode.com/users');
request2.send();


//Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
let request3 = new XMLHttpRequest();
request3.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        for (let i = 0; i < data.length; i++) {
            let kompanija1 = data[i].company.name.includes("Group");
            let kompanija2 = data[i].company.name.includes("LLC");

            if (kompanija1 == true || kompanija2 == true) {
                console.log(data[i]);
            }
        }
    }
    else if (this.readyState === 4) {
        console.log("could not fetch data");
    }
});
request3.open('GET', 'https://jsonplaceholder.typicode.com/users');
request3.send();



//Ispisati sve različite gradove u kojima rade ovi korisnici.
let request4 = new XMLHttpRequest();
request4.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        let gradovi = [];
        for (let i = 0; i < data.length; i++) {
            let grad = data[i].address.city;
            if (gradovi.includes("grad") == false) {
            gradovi.push(grad);
            }
        }
        console.log(gradovi);
    }
    else if (this.readyState === 4) {
        console.log("could not fetch data");
    }
});
request4.open('GET', 'https://jsonplaceholder.typicode.com/users');
request4.send();



//Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
let request5 = new XMLHttpRequest();
request5.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        let br = 0;
        for (let i = 0; i < data.length; i++) {
            if (parseFloat(data[i].address.geo.lat) < 0 && parseFloat(data[i].address.geo.lng) < 0) {
                br++;
            }
           
        }
        console.log(br);
    }
    else if (this.readyState === 4) {
        console.log("could not fetch data");
    }
});
request5.open('GET', 'https://jsonplaceholder.typicode.com/users');
request5.send();





let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            // radi nesto kada je sve u redu
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            //radi nesto kada je doslo do greske
            reject("Doslo je do greske!")
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
}

let zad2 = (niz) => {
    niz.forEach(kor => {
        if (kor.website.includes(".com")) {
            console.log(kor.name);
        }
    });
}

let zad5 = (niz) => {
    let gradovi = [];
    niz.forEach(kor => {
        if ( !gradovi.includes(kor.address.city) ) {
            gradovi.push(kor.address.city);
        }
    });
    console.log(gradovi);
}

let ispisPorukeStranica = (poruka) => {
    document.body.innerHTML += `<p class='error'>${poruka}</p>`;
}

let ispisPorukeKonzola = (poruka) => {
    console.log(poruka);
}
getUsers(zad2, ispisPorukeKonzola);
// getUsers(zad3, ispisPorukeStranica);
getUsers(zad5, ispisPorukeStranica);


//Umesto da pises posebno funkciju pa je zoves, odma pises celu funkciju u pozivu
getUsers(
    (niz) => {
        niz.forEach(kor => {
            if (kor.company.name.includes("Group") || kor.company.name.includes("LLC")) {
                console.log(kor.name);
            }
        });
    }, 
    (poruka) => {
        document.body.innerHTML += `<p class='error'>${poruka}</p>`;
    }
    );





    //Vezbanje - slajd 18
//Kreirati fajl sportisti.json, koji sadrži niz objekata, pri čemu svaki objekat sadrži sledeće atribute: imePrezime (string), visina (broj), timovi (niz stringova).
//Uspostaviti konekciju ka fajlu sportisti.json.

    
    let sportisti = (resolve, reject) => {
        let sportisti = new XMLHttpRequest();
        sportisti.addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (this.readyState === 4) {
                reject("Doslo je do greske!")
            }
        });
        sportisti.open('GET', 'sportisti.json');
        sportisti.send();
    }

    //Ispisati prosečnu visinu svih sportista.
    let prosecna = (niz) => {
        let visina = 0;
        let br = 0;
        let prosecna = 0;
        niz.forEach(s => {
            visina += s.visina;
            br++;
            
        });
        prosecna = visina / br;
        console.log(prosecna);
    }

sportisti(prosecna, ispisPorukeKonzola);