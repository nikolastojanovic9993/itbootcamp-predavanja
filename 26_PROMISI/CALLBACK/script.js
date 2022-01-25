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
    if(err) { //if (string) uvek vraca TRUE, znaci ako postoji greska onda radi ovo
        console.log(err);
    }
    else {
        console.log(data);
    }
});

console.log("KRAJ");


