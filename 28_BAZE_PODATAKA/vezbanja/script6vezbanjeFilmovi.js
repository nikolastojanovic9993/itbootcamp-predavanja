//Iz kolekcije movies, pročitati sve filmove:
//Koje je režirao Uros Jovanovic
db.collection('movies')
    .where("Director.First_name", "==", "Uros")
    .where("Director.Last_name", "==", "Jovanovic")
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


//Čija je ocena između 5 i 10
db.collection('movies')
    .where("Rating", ">=", 5)
    .where("Rating", "<=", 8)
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


//Kojima je žanr komedija, tragedija ili drama
db.collection('movies')
    .where("Genres", "array-contains-any", ["romantic", "horor"])
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


//Koji su izašli u 21. veku
// let date = new Date(2000, 0, 1);
// let dateTimestamp = firebase.firestore.Timestamp.fromDate(date);
db.collection('movies')
    .where("Realase_year", "<", 2000)
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


//Prikazati sve informacije o najbolje rangiranom filmu.
db.collection('movies')
    .orderBy("Rating", "desc")
    .limit(1)
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



//Prikazati sve informacije o najslabije rangiranoj drami
db.collection('movies')
    .where("Genres", "array-contains", "drama")
    .orderBy("Rating")
    .limit(1)


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