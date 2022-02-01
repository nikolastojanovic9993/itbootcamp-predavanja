// Vezbanje 28. slajd

//Iz kolekcije customers, pročitati sve klijente sortirane po imenu
console.log("//////////////////Vezbanje////////////");
db.collection('customers')
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

//Iz kolekcije customers, pročitati sve klijente koji:
//Imaju adresu u Nišu
db.collection('customers')
    .where("Addresses", "array-contains", "Nis")
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

//Imaju platu veću ili jednaku od 500
db.collection('customers')
    .where("Salary", ">=", 500)
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


//Imaju platu između 300 i 800
db.collection('customers')
    .where("Salary", ">=", 300)
    .where("Salary", "<=", 800)
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });


//Imaju platu manju od 900, i imaju 30 godina
db.collection('customers')
    .where("Salary", "<", 900)
    .where("Age", "==", 30)
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });



//Imaju adresu u Nišu ili Beogradu
db.collection('customers')
    .where("Addresses", "array-contains-any", ["Nis", "Beograd"])
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });



//Imaju 22, 25 ili 28 godina
//Ovako sam ja al sigurno ne valja ;)
let age1 = [22, 25, 28];
db.collection('customers')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                if (age1.includes(obj.Age)) {
                    console.log(obj.Name + " " + obj.Age + " " + obj.Salary);
                }


            })

        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });

//a ovako Stefan

db.collection('customers')
    .where("Age", "in", [22, 25, 28])
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
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${err}`);
    });