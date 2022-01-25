let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        resolve("Nesto resolve"); // Sve ok proslo onda je resolve
        // reject("Nesto reject"); // Nesto nije ok proslo
    });
    //console.log(obj);
    return obj; // Vraca Promise objekat
}


// Ako je Promise vratio reslove, realizuje se .then() grana
//Ako je Promise vratio reject, realizuje se .catch() grana
getSomething().then(data => {
    console.log(`Aktivirana je .then grana ${data}`);//data dobija vrednost one poruke koja se prosledjuje u resolve
}).catch(err => {
    console.log(`Aktivirana je .catch grana ${err}`);//err dobija vrednost one poruke koja se prosledjuje u reject
})