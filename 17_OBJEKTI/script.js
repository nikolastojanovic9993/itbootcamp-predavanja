console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

console.log(blog1);
console.log(typeof blog1);

// ispis propertija na dva nacina
console.log(blog1.title);
console.log(blog1['title']);

// izmene propertija na dva nacina
blog1.title = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Jelena Matejic";
console.log(blog1);

///////////////////////////////////////////

let user = {
    username: "JM",
    age: 27,
    blogs: ["IF naredba grananja", "WHILE petlja", "FOR petlja"],
    login: function () {
        console.log("Ulogovani ste");
    },
    logout: function () {
        console.log("Izlogovani ste");
    },
    logBlogs: function () {
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user);
console.log(user.blogs);

let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`
}

for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`
}

// Poziv metoda
user.login();
user.login();
user.logout();

// Poziv metoda koji u sebi sadrzi poziv nekog propertija
// this
user.logBlogs();
console.log(this);

//Vezbanje JA
/*Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana).
Napisati metode koje:
Određuje i vraća prosečnu temperaturu izmerenu tog dana.
Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom. */

let zadatak1 = {
    datum: "2021/12/23",
    kisa: [true, false],
    sunce: [true, false],
    oblacno: [true, false],
    vrednostiTemperature: [-9, -8, -8, -6, -3, -1, ],
    prosecna: function () {
        let suma = 0;
        let rez = 0;
        this.vrednostiTemperature.forEach(el => {
            suma += el;
        });

        rez = suma / this.vrednostiTemperature.length;
        return rez;
    },

    natprosecna: function () {
        let br = 0;
        let p = this.prosecna();
        this.vrednostiTemperature.forEach(el => {
            if (el > p) {
                br++;
            }
        });
        return br;
    },

    maks: function () {
        let br = 0;
        let max = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(el => {

            if (el >= max) {
                max = el;
            }
        });
        return max;
    },
    maks1: function () {
        let br = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el == zadatak1.maks()) {
                br++;
            }
        });

        return br;

    },
    dvaParametra: function (br1, br2) {
        let br = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el > br1 && el < br2) {
                br++;
            }
        });
        return br;
    },
    iznadProseka: function () {
        let prosek = this.prosecna();
        let br1 = 0;
        let br2 = 0;
        rez = "";
        this.vrednostiTemperature.forEach(el => {
            if (el > prosek) {
                br1++;
            }
            else {
                br2++;
            }
        });
        if (br1 > br2) {
            rez = true;
        }
        else {
            rez = false;
        }
        return rez;
    },
    //6.
    ledeni: function () {
        let br = 0;
        let rez = "";
        this.vrednostiTemperature.forEach(el => {
            if (el < 0) {
                br++;
            }
        });
        console.log(br);
        console.log(this.vrednostiTemperature.length);
        if (br == this.vrednostiTemperature.lenght) {
            rez = true;
        }
        else {
            rez = false;
        }
        console.log(rez);
        return rez;
        
    },
    //vrednostiTemperature: [-9, -8, -8, -6, -3, -1],
    //6.Jelena
    //Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function () {
        for(let i = 0; i <this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > 0) {
                return false;
            }
        }
        return true;
    }
};
console.log(zadatak1.prosecna());
console.log(zadatak1.natprosecna());
console.log(zadatak1.maks());
console.log(zadatak1.maks1());
console.log(zadatak1.dvaParametra(-9, -1));
console.log(zadatak1.iznadProseka());
console.log(zadatak1.ledeni());
console.log(zadatak1.leden());