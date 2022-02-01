// db - objekat "baze", njega vucemo iz html fajla
console.log(db);

// pristupanje kolekciji
let customers = db.collection('customers');
console.log(customers);

// pristupanje dokumentu
// 1. preko kolekcije 
let doc1 = customers.doc('customer1');
console.log(doc1);

// 2. direktno
let doc2 = db.collection('tasks').doc('taks1');
console.log(doc2);

/*
Za pristup dokumentu:
let doc = db.collection('ime kolekcije').doc('ime dokumenta')

Kod dokumenata imamo sledece operacije:
    CRUD (Create, Read, Update, Delete)
    Create: doc.set(...)
    Read  : doc.get(...)
    Update: doc.update(...)
    Delete: doc.delete(...)

Sve ove 4 operacije kao rezultat vracaju Promise
Sto znaci: Nakon njih lancamo .then() i .catch()
*/

let obj = {
    name: "Vesna",
    age: 22,
    addresses: ["Nis", "Leskovac"],
    salary: 470.00
};

//oba db.collection su asinhroni pozivi i svaki vraca promise. Kad prvi vrati, ispisi poruku pa onda salji sledeci
db.collection('customers').doc('customer5').set(obj)
    .then(() => {
        console.log("Dodat novi dokument u kolekciju 'customers'");
        return db.collection('customers').doc('customer5').set(
            { height: 180 },
            { merge: true }
        );
    })
    .then(() => {
        console.log("Spojen dokument 'customer5' u kolekciju 'customers'");
    })
    .catch((err) => {
        console.log("Greska prilikom dodavanja novog dokumenta: " + err);
    });

//Ako ne navedes id dokumenta, on ga sam generise
//Ako navedes id postojeceg dokumenta, on samo prelepi podatke, prvi izbrise i samo drugi zalepi



//Dodavanje novog dokumenta
let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");

let obj2 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz IT Bootcamp-a"
}

db.collection('tasks')
    .doc('task5')
    .set(obj2)
    .then(() => {
        console.log(`Uspesno dodat task`);
    })
    .catch(err => {
        console.log(`Nespesno dodat task: ${err}`);
    });

//kod set metode nemas povratu poruku za .then kad je uspesno



//Update postojeceg
db.collection('tasks')
    .doc('task5')
    .update({
        priority: true
    })
    .then(() => {
        console.log("Uspesno promenjeno polje u dokumentu");
    })
    .catch(err => {
        console.log("Greska prilikom menjanja dokumenta:" + err);
    });




//Delete
db.collection('customers')
    .doc('customer3')
    .delete()
    .then(() => {
        console.log("Uspesno izbrisan dokument");
    })
    .catch(err => {
        console.log(`Greska prilikom brisanja: ${err}`);
    });

console.log("Test poruka");


//Drugi nacin za dodavanje dokumenta

db.collection('tasks')
    .add({
        Title: "Vezba za projekat",
        Description: "Vezbanje JS",
        Start_data: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
        Due_date: null,
        Priority: true
    })
    .then(() => {
        console.log("Uspesno dodat zadatak u kolekciju tasks");
    })
    .catch(err => {
        console.log(`Desila se greska: ${err}`);
    });

/*
db.collection('...').add() <=> db.collection('...').doc().set()
- oba dodaju dokument sa radnom generisanim ID-em

db.collection('...').doc(id).set()
- dodaje novi dokument sa zadatim id-em
*/