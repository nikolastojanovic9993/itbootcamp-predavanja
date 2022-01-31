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

}

let chatroom1 = new Chatroom("js", "nikola");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1._username = "nikola993"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "general"; //Testiram seter za room
console.log(chatroom1.room);

