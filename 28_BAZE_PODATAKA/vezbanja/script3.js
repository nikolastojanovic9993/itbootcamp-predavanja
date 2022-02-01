// 1) Pristupanje konkretnom dokumentu u kolekciji
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1)
db.collection('customers')
    .doc('customer1')
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log(`Postoji dokument ${doc.id}`);
            let obj = doc.data();
            console.log(obj);
        }
        else {
            console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
        }
        // Polja: doc.id (string), doc.exists (boolean)
        // Metoda: doc.data() - konvertuje dokument u JS objekat
    })
    .catch((err) => {
        console.log(`Nemoguce dohvatiti dokument: ${err}`);
    });

// 2)
db.collection('customers')
    .get()
    .then(snapshot => { //snapshot jer je kao slika trenutnog stanja kolekcije, jer se ona stalno menja
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                console.log(doc.id, doc.data());
            })
        }
        else {
            console.log(`Nema dokumenata u kolekciji`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    })


// 1) Dohvatanje dokumenata u odredjenom redosledu, (sortiranje)
// 2) Dohvatanje odredjenog broja dokumenata iz kolekcije (ogranicen prikaz)
// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)


//1)
db.collection('customers')
    .orderBy("Age", "desc") //("age", "desc") - sortira ih padajuce descending, "asc" - ascending, rastuci i on je default ako ne navedes drugi parametar
    .orderBy("Name")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
            })
        }
        else {
            console.log(`Nema dokumenta u kolekciji`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });




// 2)
db.collection('customers')
    .orderBy("Name")
    .orderBy("Age", "desc")
    .orderBy("Salary", "desc")
    // .limit(2)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
            })
        }
        else {
            console.log(`Nema dokumenta u kolekciji`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });



// 3)
db.collection('customers')
    .where("Age", "<=", 29) //dodajemo kriterijum
    // .orderBy("Age", "desc") //moras prvi orderBy sa istim kriterijumom koji je za where
    // .orderBy("Name")
    // .where("Salary", "==", 450) //ako imas dva where-a, moras opet da pravis index za to, kao i za dva orderBy-a i ne mozes da koristis znake nejednakosti u vise where-a
    // .orderBy("Age", "desc")
    // .orderBy("Salary", "desc")
    .limit(2)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
            })
        }
        else {
            console.log(`Nema dokumenta u kolekciji`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


/////////////////////////////////////////////////
