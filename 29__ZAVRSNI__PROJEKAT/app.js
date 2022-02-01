import Chatroom from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom1 = new Chatroom("homeworks", "nikola");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1._username = "nikola993"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "general"; //Testiram seter za room
console.log(chatroom1.room);
chatroom1.room = "js";
// chatroom1.addChat("hello!");

let chatroom2 = new Chatroom("general", "Milena");
// chatroom2.addChat("Motivaciono pismo")
//     .then(() => {
//         console.log("Uspesno dodat čet");
//     })
//     .catch(err => {
//         console.log(err);
//     })

//Ispis dokumenta iz db u konzoli
chatroom2.getChats(d => {
    console.log(d);
});
console.log(chatroom2.room);
// let chatroom3 = new Chatroom("general", "Marko");
// chatroom3.addChat("Zavrsio domaci")
//     .then(() => {
//         console.log("Uspesno dodat čet");
//     })
//     .catch(err => {
//         console.log(err);
//     })
// chatroom1.addChat("Caoo")
//     .then(() => {
//         console.log("Uspesno dodat čet");
//     })
//     .catch(err => {
//         console.log(err);
//     })

let lista = document.querySelector('ul');
let chatUI1 = new ChatUI(lista);


//Ispis dokumenata iz db na stranici
chatroom2.getChats(d => {
    chatUI1.templateLI(d);
});