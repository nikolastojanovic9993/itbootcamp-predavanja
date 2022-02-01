import Chatroom from "./chat.js";

let chatroom1 = new Chatroom("homeworks", "nikola");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1._username = "nikola993"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "general"; //Testiram seter za room
console.log(chatroom1.room);
chatroom1.room = "js";
// chatroom1.addChat("hello!");

let chatroom2 = new Chatroom("general", "Milena");
// chatroom2.addChat("Posaljite CV")
//     .then(() => {
//         console.log("Uspesno dodat čet");
//     })
//     .catch(err => {
//         console.log(err);
//     })

chatroom2.getChats(d => {
    console.log(d);
});
let chatroom3 = new Chatroom("general", "Marko");
chatroom3.addChat("Zavrsio domaci")
    .then(() => {
        console.log("Uspesno dodat čet");
    })
    .catch(err => {
        console.log(err);
    })

let


