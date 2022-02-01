let ul = document.querySelector("ul");
let form = document.querySelector("form");

/* Ovako smo inicijalno ispisivali podatke na stranici ali nije real time, kad uneses novi task u bazu, ne pojavljuje se na stranici
db.collection('tasks')
    .orderBy('StartDate', 'desc')
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                let li = document.createElement('li');
                li.innerHTML = `${obj.Title} (${obj.StartDate.toDate()}) [${obj.Description}]`;
                ul.appendChild(li);
                if (obj.Priority === true) {
                    li.style.color = "red";
                }
            });
        }
    })
    .catch(err => {
        console.log(`Greska: ${err}`);
    });
    */

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let title = this.title.value; //moze this jer je anonimna funkcija
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked; //ovde se misli na checkbox u html
    let description = this.description.value;
    // console.log(title + " " + start_date + " " + due_date + " " + priority + " " + description);

    let start_date_object = new Date(start_date);
    let due_date_object = new Date(due_date);

    let start_date_timestamp = firebase.firestore.Timestamp.fromDate(start_date_object);
    let due_date_timestamp = firebase.firestore.Timestamp.fromDate(due_date_object);

    let object = {
        Title: title,
        Start_data: start_date_timestamp,
        Due_date: due_date_timestamp,
        Priority: priority,
        Description: description
    };
    db.collection('tasks')
        .add(object)
        .then(() => {
            console.log('Uspesno dodat novi zadatak!');
        })
        .catch(err => {
            console.log(`Greska prilikom dodavanja zadatka: ${err}`);
        });
});


db.collection('tasks')
    .onSnapshot(snapshot => {   //ovo se aktivira svaki put kad dodje do promene u bazi, pravi snapshot

        let changes = snapshot.docChanges();
        // console.log(changes); // changes je array
        changes.forEach(change => {
            let type = change.type;
            let doc = change.doc;
            let id = doc.id;
            if (type == "added") {
                let obj = doc.data();
                // console.log(obj);
                let li = document.createElement('li');
                li.id = id;
                li.innerHTML = `${obj.Title} (${obj.Start_data.toDate()}) [${obj.Description}]`;
                ul.appendChild(li);
                if (obj.Priority === true) {
                    li.style.color = "red";
                }
                let button = document.createElement('button');
                button.innerHTML  = "Delete task";
                li.appendChild(button);

            }
            else if (type == "removed") {
                let li = document.getElementById(id);
                li.remove();
            }
        });

    });


    ul.addEventListener('click', function(event) {
        // console.log(event.target.tagName);//ispisuje na koji tag je kliknuto unutar ul-a (UL, LI, BUTTON)
        if(event.target.tagName === "BUTTON") {
            let ok = confirm('Da li zelite da obrisete zadatak?');
            if (ok = true){
            let li = event.target.parentElement;//znaci ako je klinuto na dugme ovde dohvatas roditelja tj li
            let id = li.id;
            db.collection('tasks')
            .doc(id)
            .delete()
            .then(() => {
                alert("Uspesno obrisan zadatak");
            })
            .catch(err => {
                alert(`Greska prilikom brisanja: ${err}`);
            })
        }
    }
    });
