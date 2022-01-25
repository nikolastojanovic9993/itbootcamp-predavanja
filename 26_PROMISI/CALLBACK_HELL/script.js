let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            //Sve OK
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if (request.readyState == 4) {
            //Nesto nije OK
            // console.log("Ne mogu da dohvatim podatke");
            callback(undefined, "Ne mogu da dohvatim podatke");
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Slanje zahteva
    request.send();
}

getTodos('../JSON/todos.json', (data, err) => {
    console.log("Callback okinuta");
    if (err) { //if (string) uvek vraca TRUE, znaci ako postoji greska onda radi ovo
        console.log(err); // Ispisuj ako je doslo do greske u todos.json
    }
    else {
        console.log(data);// Ispisuje podatke iz todos.json fajla

        //Nakon sto su se ispisali pdoaci iz todos.json, pozivamo sledeci falj fruits.json
        getTodos('../JSON/fruits.json', (data, err) => {
            if(err) {
                console.log(err); // Ispisuj ako je doslo do greske u fruits.json fajlu
            }
            else {
                console.log(data); // Ispisuje podatke iz fuits.json fajla

                //Nakon sto je ucitao prehodni fajls fruits.json, pozivamo sledeci fajl vegetables.json
                getTodos('../JSON/vegetables.json', (data, err) => {
                    if(err) {
                        console.log(err); // Ispisuje ako je doslo do greske u vegetables.json
                    }
                    else {
                        console.log(data);// Ispisuje podatke iz vegetables.json
                    }
                });
            }
        });
    }
});

console.log("KRAJ");


