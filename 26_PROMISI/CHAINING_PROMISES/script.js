let getTodos = resource => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Slanje zahteva
    request.send();

    //Vracam objekat Promise
    return Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                //Sve OK
                // console.log(request.responseText);
                //callback(request.responseText, undefined);
                resolve(request.responseText);
            }
            else if (request.readyState == 4) {
                //Nesto nije OK
                // console.log("Ne mogu da dohvatim podatke");
                //callback(undefined, "Ne mogu da dohvatim podatke");
                reject("Ne mogu da dohvatim podatke");
            }
        });
    });

  
}

// 1. Zelim prvo da se ocita todos.json,
// 2. da se ucita fruits.json, 
// 3. da se ucita vegetables.json

getTodos('../JSON/todos.json').then(data => {
    console.log("Promise todos resolved", data);
    return getTodos('../JSON/fruits.json'); //vracam Promise na koji se odnosi naredni then
}).then(data => {
    console.log("Promise fruits resolved",data);
    return getTodos('../JSON/vegetables.json'); //vracam Promise na koji se odnosi naredni then
}).then(data => {
    console.log("Promise vegetables resolved", data);
})
.catch(err => {
    console.log("Promise rejected", err);
})

console.log("KRAJ");


