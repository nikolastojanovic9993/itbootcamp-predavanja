class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
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

    //Kreiranje asinhronog metoda addChat za dodavanje nove poruke
    async addChat(msg) {


        //db.collection('chats')

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


}

export default Chatroom;


