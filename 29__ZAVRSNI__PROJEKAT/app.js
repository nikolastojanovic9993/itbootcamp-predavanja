import Chatroom from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let lista = document.querySelector('ul');
let btnMsg = document.getElementById("btnMsg");
let inputMsg = document.getElementById("inputMsg");
let btnUser = document.getElementById("btnUser");
let inputUser = document.getElementById("inputUser");
let divRooms = document.getElementById("buttons");
let userNotification = document.getElementById("userNotification");
let btnColor = document.getElementById('btnColor');
let sectionIspis = document.getElementById('sectionIspis');
let ulIspis = document.getElementById('ispis');
let inputColor = document.getElementById('inputColor');
let btnDate = document.getElementById('btnDate');
let inputDate1 = document.getElementById('inputDate1');
let inputDate2 = document.getElementById('inputDate2');
let general = document.getElementById('general');
let js = document.getElementById('js');
let homeworks = document.getElementById('homeworks');
let tests = document.getElementById('tests');

let sectionScroll = elem => {
    elem.scrollTop = elem.scrollHeight;
};
sectionScroll(sectionIspis);


//Ukoliko se aplikacija učitava po prvi put, za podrazumevano korisničko ime postaviti anonymus, u suprotnom korisničko ime iz lokalne memorije
let username = "anonymus";
if (localStorage.username) {
    username = localStorage.username;
}

// Objekti klasa / Instance klasa
let chatroom = new Chatroom("general", username);
let chatUI = new ChatUI(lista);

//Ispis dokumenata iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

//Ova forma treba da služi za filter poruka prema unetom početnom i krajnjem datumu. 
btnDate.addEventListener("click", e => {
    e.preventDefault();
    ulIspis.innerHTML = "";
    console.log('Opalio');
    let inputDate1Value = inputDate1.value;
    let inputDate2Value = inputDate2.value;
    chatroom.getChats(d => {
        chatUI.filterDate(d, inputDate1Value, inputDate2Value);
    });
    
})
  
//Kada se klikne na dugme Send/Pošalji realizovati da se pošalje poruka koja je napisana u input polju
btnMsg.addEventListener("click", (e) => {
    e.preventDefault();
    let inputMsgValue = inputMsg.value;
    inputMsg.value = '';
    if (inputMsgValue.length < 1) {
        alert("Message must contain at least 1 character");
    }
    else {
        chatroom.addChat(inputMsgValue)
        .then(() => {
            
        })
        .catch(err => {
            console.log(err);
        });
    }

});

//Kada se klikne na dugme Update realizovati da se promeni korisničko ime korisnika koji šalje poruku
btnUser.addEventListener("click", e => {
    e.preventDefault();
    let inputUserValue = inputUser.value;
    chatroom.username = inputUserValue;
    
    inputUser.value = "";
    chatroom.usernameUpdate(inputUserValue);
    userNotification.innerHTML = `Promenili ste korisičko ime u: ${inputUserValue}`;
    setTimeout(() => {
        userNotification.remove();
    location.reload();
}, 3000);
});

//Realizovati da se klikom na dugme #general, #js, #homeworks i #tests izvši promena sobe (da se u centralnom delu stranice prikazuju poruke koje su kreirane u toj sobi)
general.classList.add('active');
chatroom.room = "general";

if (localStorage.room) {
    chatroom.updateRoom(localStorage.room);
    chatroom.getChats(d => {
        chatUI.templateLI(d);
    });
    
}


if(chatroom.room == "js") {
    console.log('js');
    js.classList.toggle('active');
    general.classList.toggle('active');
}
else if(chatroom.room == "homeworks") {
    console.log('homeworks');
    homeworks.classList.toggle('active');
    general.classList.toggle('active');
}
else if(chatroom.room == "tests") {
    console.log('tests');
    tests.classList.toggle('active');
    general.classList.toggle('active');
}
divRooms.addEventListener("click", e => {
    if (e.target.tagName == "BUTTON") {
        chatroom.room = "general";
        //Izbrisati sve poruke sa ekrana
        chatUI.clear();
        localStorage.setItem("room", e.target.id);
        // Pozvati promenu sobe
        // chatroom.updateRoom(e.target.id);
        chatroom.updateRoom(localStorage.room);

        // Prikaz poruka
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
    }
    location.reload();
    });

//Kada korisnik klikne na sličicu kante, poruka treba da bude izbrisana sa ekrana i to:
//Ukoliko “ulogovani korisnik” briše svoju poruku onda se poruka briše i sa ekrana i iz baze podataka
//Ukoliko korisnik briše tuđu poruku, poruka treba samo privremeno da bude izbrisana sa ekrana (to znači da kada refrešujemo stranicu poruka će se opet pojaviti)
ulIspis.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.tagName == "IMG") {
       
    if(localStorage.username === e.target.parentNode.firstChild.innerHTML.trim()){
       if(confirm("Are you sure?")) {
        chatroom.deleteMsg(e.target.parentElement.id);
        e.target.parentElement.remove();
    }
}
else {
    e.target.parentElement.remove();
}
    
    }
})

sectionIspis.style.backgroundColor = localStorage.bgColor;
btnColor.addEventListener("click", e => {
    e.preventDefault();
    sectionIspis.style.backgroundColor = localStorage.bgColor;

    setTimeout(() => {
        sectionIspis.style.backgroundColor=inputColor.value;
    }, 500);
    
    localStorage.setItem("bgColor", inputColor.value);
})