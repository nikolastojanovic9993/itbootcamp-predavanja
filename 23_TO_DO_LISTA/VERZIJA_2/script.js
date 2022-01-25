// let dugme = document.getElementById("dugme");
let input = document.getElementById("input");
let lista = document.getElementById("lista");

input.addEventListener("keyup", e => {
    e.preventDefault();
    // console.log(e.key, e.keyCode); //kljuc za ENTER je 13

    if (e.keyCode == 13) {
        let inputValue = input.value; // Uzimam vrednosti iz input polja
        inputValue = inputValue.trim();
    if (inputValue == "" || inputValue == null) {
        alert("Morate uneti tekst zadatka");
    }
    else {
        
            let NoviLi = document.createElement("li"); // Kreiram novi <li>
            NoviLi.textContent += inputValue; // Upisujem u <li> teskt

            let radio = document.querySelector("input[name = radio]:checked");
            // console.log(radio.id, radio.value);
            if (radio.value == "pocetak") {
                //Dodavanje na pocetak
                NoviLi.classList.add('listItem');
                lista.prepend(NoviLi);

            }
            else {
                //Dodavanje na kraj
                NoviLi.classList.add('listItem');// Dodajem klasu
            lista.appendChild(NoviLi); // Dodajemo <li> cvor na kraj <ul>
            }


             //Dodajem <li> listi
            input.value = ""; // Praznim input polje po kliku nakon dodavanja
        
    }
    }

    
});

lista.addEventListener("click", (e) => {
    // console.log("Kliknuto na UL");
    //console.log(e.target); // Vraca ceo tag na koji je kliknuto i njegovu decu
    // console.log(e.target.tagName);// Vraca samo ime (LI, UL) tag na koji je kliknuto
    if (e.target.tagName == "LI") {
        // console.log("Kliknuto na LI");
        e.target.remove();
    }
});

// TRIM
let tekst = "     Neki     tekst   ";
console.log(tekst);
console.log(tekst.trim()); //.trim() funkcija sklanja praznine sa pocekta i kraja stringa

tekst = "   ";
console.log(tekst);
console.log(tekst.trim());