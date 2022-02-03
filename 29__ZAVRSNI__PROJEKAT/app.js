import Chatroom from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let lista = document.querySelector('ul');
let btnMsg = document.getElementById("btnMsg");
let inputMsg = document.getElementById("inputMsg");
let btnUser = document.getElementById("btnUser");
let inputUser = document.getElementById("inputUser");

// Objekti klasa / Instance klasa
let chatroom = new Chatroom("general", "Nikola");
let chatUI = new ChatUI(lista);

// Postavljanje vrednosti u Local Storage
// localStorage.setItem("nazivPromenljive", 5);
// localStorage.setItem("nazivPromenljive", 6);
// localStorage.setItem("nazivPromenljive", "Test string");
localStorage.setItem("x", 7);
// localStorage.setItem("y", 10);

// Uzimanje vrednosti iz Local Storage-a
let z = localStorage.x + localStorage.y;
console.log(z);
console.log(localStorage.x);
if(localStorage.x) {
    console.log("X postoji");
}
else {
    console.log("X ne postoji");
}

//Ispis dokumenta iz db u konzoli
chatroom.getChats(d => {
    console.log(d);
});

//Ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

//Kada se klikne na dugme Send/Pošalji realizovati da se pošalje poruka koja je napisana u input polju
btnMsg.addEventListener("click", (e) => {
    e.preventDefault();
    let inputMsgValue = inputMsg.value;
    chatroom.addChat(inputMsgValue)
        .then(() => {
            inputMsg.value = "";
        })
        .catch(err => {
            console.log(err);
        });
});

//Kada se klikne na dugme Update realizovati da se promeni korisničko ime korisnika koji šalje poruku
btnUser.addEventListener("click", e => {
    e.preventDefault();
    let inputUserValue = inputUser.value;
    chatroom.username = inputUserValue;
    inputUser.value = "";
})
