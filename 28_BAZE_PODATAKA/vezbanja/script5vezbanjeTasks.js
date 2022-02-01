//Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
db.collection('tasks')
    .orderBy("Title")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj);
            })
        }
        else {
            console.log(`Nema zadataka sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


//Su prioritetni,
db.collection('tasks')
    .where("Priority", "==", true)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj);
            })
        }
        else {
            console.log(`Nema zadataka sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });



//Treba da se izvrše u tekućoj godini
//ja pokusao, ne valja
db.collection('tasks')
    .where("DueDate.getFullYear()", "==", 2022)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj);
            })
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

//Treba da se izvrše u tekućoj godini Stefan
let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1); //(2022, januar, 1.)
let date2 = new Date(year + 1, 0, 1); //(2023, januar, 1.)
let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);


db.collection('tasks')
    .where("DueDate", ">=", date1Timestamp)
    .where("DueDate", "<", date2Timestamp)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj);
            })
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


//Su završeni
now = new Date();
date1Timestamp = firebase.firestore.Timestamp.fromDate(now);
db.collection('tasks')
    .where("DueDate", "<=", date1Timestamp)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj);
            })
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


//Tek treba da počnu
now = new Date();
date1Timestamp = firebase.firestore.Timestamp.fromDate(now);
db.collection('tasks')
    .where("StartDate", ">", date1Timestamp)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj);
            })
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });