class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub = false; // Odredili smo da false bude kao signal da je stranica prvi put ucitana
    }

    //Seter i geter za polje room
    set room(r) {
        this._room = r;
    }

    get room() {
        return this._room;
    }


    //Seter i geter za polje username
    set username(u) {
        this._username = u;
    }

    get username() {
        return this._username;
    }

    //Update room
    updateRoom(ur) {
        this.room = ur;
        //if(this.unsub =! false) isto je if(this.unsub =! true) isto je if(this.unsub) )
        if(this.unsub != false) { //unsub vise nije false nego je u getChats postalo funkcija
            this.unsub(); // unsub je sada funkcija i pozivam je sa ()

        }
        
    }

    //Kreiranje usernameUpdate metoda
    usernameUpdate(u) {
        let u1 = u.trim();
        if (u1.length < 2 || u1.length > 10) {
            alert("Username must contain 2 characters at least!")
        }
        else {
            this._username = u1;
            localStorage.setItem("username", u1);

        }
        
    }
    //Kreiranje asinhronog metoda addChat za dodavanje nove poruke
    async addChat(msg) {


        //db.collection('chats') == this.chats

        //Kreiranje dokumenta/objekta kojeg prosledjujem bazi podataka
        let docChat = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        };

        //Da sacuvam dokument u db
        let response = await this.chats.add(docChat);
        return response; //Vracam Promise i mogu za njega da kazem .then i .catch

    }

    //Metod koji prati promene u bazi i vraca poruke
    getChats(callback) {
         this.unsub = this.chats
        .where("room", "==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {

                    //Kada se desila promena u bazi ispisati "Promena u bazi"
                    // console.log(change.type);
                    // if (change.type == "added") {
                    //     console.log("Promena u bazi");
                    // }

                    // Ispisati dokumente koji su dodati u bazu
                    if (change.type == "added") {

                        //console.log(change.doc.data())
                        callback(change.doc);//prosledjivanje dokumenta na ispis (ispis realizujemo kada realizujemo callback)

                    }
                });
            });
    }
    deleteMsg (id) {
        this.chats
        .doc(id)
        .delete()
        .then(()=>{
            
        })
        .catch(err => {
            console.log(err);
        }); 
    }
}



export default Chatroom;


