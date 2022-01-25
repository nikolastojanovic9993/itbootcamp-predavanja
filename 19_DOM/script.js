console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");
console.log(cont);
console.log(typeof cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

let contNiz = Array.from(cont);
contNiz.forEach(elem => {
    console.log(elem);
});

let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

p1 = document.querySelector("#p1");
console.log(p1);

cont = document.querySelector(".container");
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(elem => {
    console.log(elem);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name='link']");
console.log(linkovi);

/////////////////////////VEZBANJE////////////
//2. Zadatak
//Dohvatiti prvi div tag sa klasom „error“.
let error = document.querySelector(".error");
console.log(error);

//3. Zadatak
//Dohvatiti poslednji red u tabeli.
let red = document.querySelectorAll("table tr:last-child");
red.forEach(elem => {
    console.log(elem);
});

//4. Zadatak
//Dohvatiti sve linkove na stranici.
let linkovi1 = document.querySelectorAll("a");
linkovi1.forEach(elem => {
    console.log(elem);
});

//5. Zadatak
//Dohvatiti sve slike na stranici
let slike = document.querySelectorAll("img");
slike.forEach(elem => {
    console.log(elem);
});

slike = document.images;
console.log(slike);

slike = document.getElementsByTagName('img');
console.log(slike);

slike = document.querySelectorAll('img[src]');
console.log(slike);


///////////////////////////////////Drugi dan/////////////////////////
//////////////////////Menjanje sadrzaja elemenata (8. strana)///////////////

p1.innerHTML += "Promenjen <span>tekst</span> paragrafa";

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(link => {
    // HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank";

    //CSS stilovi
    // link.style.color = "green";
    // link.style.textDecoration = "none";

    link.style = "color: green; text-decoration: none";

    // Preko metode
    link.setAttribute('name', 'link2'); //isto kao i link.name = "link2";
    //link.setAttribute - ne mozes da dodas vrednost +=
    //link.name += - mozes da dodajes vrednost
    link.setAttribute("style", "color: green; text-decoration: none")
});
//ne mozes sviLinkovi.href = "https//..." jer je ovo node lista, moras svakome posebno

///////////////////////////////VEzbanje////////////////////////
//1.Selektovati sve paragrafe i u svakom odnjih pridodati tekst "VAZNO!!!"
paragrafi.forEach(p => {
    p.innerHTML += "VAZNO!!!"
});

//2.Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine sa tekstom "Greska!".
error = document.querySelectorAll("div.error");
console.log(error);
error.forEach(d => {
    d.innerHTML += "<h1>Greska</h1>";
})

//3.Neka je n broj paragrafa u datom dokumentu. U svakom i-tom paragrafu dodati broj i na kvadrat, za svako i = 1, 2, ..., n.
console.log(paragrafi)
let sviparagrafi = document.querySelectorAll("p");
// for (i = 0; i < sviparagrafi.length; i++) {

//     sviparagrafi[i].innerHTML += (i + 1) ** 2;
// }
sviparagrafi.forEach((el, index) => {
    el.innerHTML += (index + 1) ** 2;
})

//4.Svim slikama dodati alternativni tekst
let slike1 = document.querySelectorAll("img");
slike1.forEach(s => {
    s.alt += "Alternativni tekst";
})

//5.Svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom

//6.Svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju
sviparagrafi.forEach((p, i) => {
    if (i % 2 == 0) {
        p.style.backgroundColor = "green";
    }
    else {
        p.style.backgroundColor = "red";
    }
})

//7. Svim linkovimna na stranici postaviti padding na 5px, font size na 8px i textdecoration na none.
let svilinkovi = document.querySelectorAll("a");
svilinkovi.forEach(l => {
    // l.setAttribute("style", "padding: 5px; fontSize: 8px; textDecoration: none");
    l.style.padding = "5px";
    l.style.fontSize = "18px";
    l.style.textDecoration = "none";
});
svilinkovi.forEach((l, i) => {
    if (i % 2 == 0) {
        l.style.backgroundColor = "green";
        l.style.color = "purple";
        // l.setAttribute("style", "background-color: green; color: purple")
    }
    else {
        l.style.backgroundColor = "blue";
        l.style.color = "white"
    }
})

//8. Svim slikama na stranici koje su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju
slike1.forEach(s => {
    console.log(s.src);
    if (s.src.indexOf('.png') > -1 || s.src.indexOf('.PNG') > -1) {
        s.style.border = "red 2px solid";
    };
    //indexOf vraca dal se .png pojavljuje
});

//9. Svakom linku na stranici promeniti target svojstvo
svilinkovi.forEach(link => {
    if (link.target === "_blank") {
        link.target = "_top";
    }
    else {
        link.target = "_blank";
    }
}
);

//10. Zadatak ja
// let imena = ["Nikola", "Marko", "Nemanja", "Stefan"];
// imena.forEach(ime => {
//     for (let i = 0; i < ime.length; i++) {
//         if (ime[0] == "S") {
//             document.body.innerHTML += `<a href='#' target ='_blank'>${ime}</a>`
//         }
//         else {
//             document.body.innerHTML += `<a href='#' target ='_top'>${ime}</a>`
//         }
//     }
// })

//10. Zadatak Stefan
let imena = ["Stefan", "Marija", "Nikola", "Bogdan", "Vladan"];
imena.forEach(ime => {
    // if (ime[0] == "S") {
        if(ime.startsWith("S")) {
        document.body.innerHTML += `<a href="#" target = "_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="#">${ime}</a>`;
    }
});


// Drugi deo
let listaString = "<ul>";
imena.forEach((ime, i) => {
    if (i % 2 == 0) {
        listaString += `<li style = "color: red">${ime}</li>`
    }
    else {
        listaString += `<li style = "color: blue">${ime}</li>`
    }
});
listaString += "</ul>";
document.body.innerHTML += listaString;


//Treci deo


//MENJANJE KLASE ELEMNTIMA 14.Slajd
let sviParagrafi = document.querySelectorAll("p");
console.log(sviParagrafi);
sviParagrafi.forEach((p, i)=> {
    if (i % 2 == 0) {
        p.classList.add('error');
    }
    else {
        p.classList.add('success');
    }
});

sviParagrafi.forEach((p, i) => {
    if (i % 3 == 0) {
        p.style.fontSize ="15px";
    }
    else if (i % 3 == 1) {
        p.style.fontSize ="20px";
    }
    else if (i % 3 == 2) {
        p.style.fontSize = "25px"
    }
});

sviParagrafi.forEach(p => {
    if(p.textContent.includes('success')) {
        p.classList.add('error');
    }
    else if(p.textContent.includes('success')) {
        p.classList.add('success');
    }
})

sviParagrafi.forEach(p => {
    p.classList.toggle('error');
});

// sviParagrafi.forEach((p, i) => {
//     if (i % 2 == 0) {
//         p.classList.add('error');
//     }
//     else if (i % 2 == 1) {
//         p.classList.add('success');
//     }
//     if (i % 3 == 0) {
//         p.style.fontSize ="15px";
//     }
//     else if (i % 3 == 1) {
//         p.style.fontSize ="20px";
//     }
//     else if (i % 3 == 2) {
//         p.style.fontSize = "25px"
//     }
//     if(p.textContent.includes('success')) {
//         p.classList.add('error');
//     }
//     else if(p.textContent.includes('success')) {
//         p.classList.add('success');
//     }
//     p.classList.toggle('error');
// })