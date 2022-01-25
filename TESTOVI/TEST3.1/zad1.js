//Napisati program koji ispisuje sve recepte čiji naziv sadrži slovo “s”, a broj sastojaka je strogo veći od 2.
let recepti = [
    { naziv: "kolac", sastojci: ["jaja", "brasno", "mleko", "secer"] },
    { naziv: "kajgana", sastojci: ["jaja", "so"] },
    { naziv: "pire", sastojci: ["krompir", "mleko", "maslac", "so"] },
    { naziv: "espreso", sastojci: ["kafa", "mleko", "aa"] },
    { naziv: "kacamak", sastojci: ["palenta", "so", "mast"] }
];
let zad1 = arr => {
    let naziv = false;
    arr.forEach(r => {
        for (let i = 0; i < r.naziv.lenght; i++) {
            if (r.naziv[i] == "s") {
                naziv = true;
            }
        }
        if (naziv = true && r.sastojci.lenght > 2) {
            console.log(r.naziv);
        }
    })
};
zad1(recepti);