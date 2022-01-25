let blog1 = {
    title: "Osnovni HTML tagovi!",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};

let blog5 = {
    title: "IF naredba grananja",
    likes: 250,
    dislikes: 160
};


let user1 = {
    username: "JelenaMatejic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    //5. Zadatak 2. nacin
    myLikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    },
    myDislikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.dislikes;
        });
        return suma;
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    //5. Zadatak 2. nacin
    myLikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    },
    myDislikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.dislikes;
        });
        return suma;
    }
};
console.log(user2.myDislikes());

// Ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// Naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);



///1. Zadatak
//U objektu user, napraviti metod koji ispisuje sve blogove korisnika
// Niz korisnika
let users = [user1, user2];

// Ko su autori blogova?
users.forEach(u => {
    console.log(u.username);
});
console.log(users[0].username); // moze i tako

// Ispisati sve naslove blogova koje su napisali autori iz niza users
users.forEach(u => {
    // U je jedan user iz niza
    let blogsU = u.blogs; // Svi blogovi tekuceg korisnika U
    blogsU.forEach(b => {
        console.log(b.title);
    });
});
///////////////////////VEZBANJE/////////////////


//2. Zadatak
console.log("Ispisati imena onih autora koji imaju ispod 30 godina");
users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

//3. Zadatak
console.log("Ispisati naslove onih blogova koji imaju više od 50 lajkova");
users.forEach(u => {
    let blogsU = u.blogs; //niz blogova tekuceg korisnika U
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});

//4. Zadatak
console.log("Ispisati sve naslove blogova autora čiji je username ’StefanStanimirovic’");
users.forEach(u => {
    if (u.username == "StefanStanimirovic") {
        let blogU = u.blogs;
        blogU.forEach(e => {
            console.log(e.title);
        });
    }
});

// Drugi nacin
users.forEach(u => {
    let blogU = u.blogs;
    if (u.username === "StefanStanimirovic") {
        blogU.forEach(e => {
            console.log(e.title);
        });
    }
});

//5. Zadatak
console.log("Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali");
// 1. Nacin
users.forEach(u => {
    let sumaLajkovaU = 0; //suma lajkova jednog usera
    // Krecem se od bloga do bloga korisnika u
    u.blogs.forEach(b => {
        sumaLajkovaU += b.likes;
    });
    if (sumaLajkovaU > 200) {
        console.log(u.username);
    }
});

// 2. Nacin (gore sam vec napravio metode u userima)
users.forEach(u => {
    if (u.myLikes() > 200) {
        console.log(u.username);
    }
});

// 6.
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena");
// Jelena likes: 30 50 70 (avg likes (30+50+70)/3 = 50)
// Stefan likes: 150 250 (avg likes Stefan (150+250)/2 = 200)
//GLOBALNI prosek: (30+ 50 + 70 + 150 + 250) / 5 = 550 / 5 = 110
// NIJE ISTO sto i (Jelenin prosek lajkova + Sefanov prosek lajkova) / 2  = (50 + 200)/2 = 125

let globalAvgLikes = arr => {
    let globalSum = 0; // Suma svih lajkova svih korisnika
    let globalBr = 0; // Broj blogova svih korisnika
    arr.forEach(u => {
        globalSum += u.myLikes(); // Dodaj koliko je pojedinacni korinik imao ukupno lajkova za sve svoje blogove
        globalBr += u.blogs.length; // Dodaj koliko je pojedinacni korisnik imao blogova
    });
    return globalSum / globalBr;
}
console.log(`Globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalAvg) {
                console.log(b.title);
            }
        });
    });
}
console.log(`Ispis naslova blogova sa natprosecnim brojem lajkova`);
blogoviSaNatprosecnoLajkova(users);


//7. Zadatak
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena");

let globalAvgDislikes = arr => {
    let globalDSum = 0;
    let globalDBr = 0;
    arr.forEach(u => {
        globalDSum += u.myDislikes();
        globalDBr += u.blogs.length;
    });
    return globalDSum / globalDBr;
}
console.log(`Globalni prosek dislajkova je:${globalAvgDislikes(users)}`);

let blogoviSaNatprosecnoLajkovaIDis = arr => {
    let globalLikes = globalAvgLikes(arr);
    let globalDislikes = globalAvgDislikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalLikes && b.dislikes < globalDislikes) {
                console.log(b.title);
            }
        });
    });
}
blogoviSaNatprosecnoLajkovaIDis(users);


/////////////////////////////////////////////VEZBANJE JAAAA//////////////////////////////////////
//Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)
let dan1 = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [10, 12, 18, 11, 5, 0, 26]
};

let dan2 = {
    datum: "2021/12/24",
    kisa: false,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [-9, -8, -8, -6, -3, -1, 3, 2]

};

let dan3 = {
    datum: "2021/12/25",
    kisa: true,
    sunce: false,
    oblacno: false,
    vrednostiTemperature: [0, 2, 5, 14, 17, 15, 11, 8, 6, 4, 1]
};

let dan4 = {
    datum: "2021/12/26",
    kisa: true,
    sunce: true,
    oblacno: false,
    vrednostiTemperature: [0, 2, 5, 14, 17, 15, 11, 8, 6, 4, 0]
};

let dan5 = {
    datum: "2021/12/27",
    kisa: false,
    sunce: false,
    oblacno: false,
    vrednostiTemperature: [0, 2, 5, 14, 17, 15, 11, 8, 6, 4, 0]
};

let dan = [dan1, dan2, dan3, dan4, dan5];
// 

//Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
//Ispisati prvi od njih
//Ispisati poslednji od njih
let najviseT = arr => {
    // let maks = arr[0].vrednostiTemperature.length;
    // console.log(maks);
    // for (i = 0; i < arr.length; i++) {
    //     if (arr[i].vrednostiTemperature.length > maks) {
    //         maks = arr[i].vrednostiTemperature.length;
    //     }
    //     console.log(maks);
    //     for (i = 0; i < arr.length; i++) {
    //         if (arr[i].vrednostiTemperature.length == maks) {
    //             console.log(arr[i].datum);
    //         }
    //     }
    // }
    let maks = arr[0].vrednostiTemperature.length;
    let arr1 = [];
    arr.forEach(d => {
        if (d.vrednostiTemperature.length > maks) {
            maks = d.vrednostiTemperature.length;
        }
    }
    );
    for (i = 0; i < arr.length; i++) {
        if (arr[i].vrednostiTemperature.length == maks) {
            arr1.push(i);
        }
    }
    console.log(arr[Math.min(...arr1)].datum);
    console.log(arr[Math.max(...arr1)].datum);

}
najviseT(dan);

//Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana
let brojac = arr => {
    let brkisnih = 0;
    let brsuncanih = 0;
    let broblacnih = 0;
    arr.forEach(d => {
        if (d.kisa == true) {
            brkisnih++;
        }
        if (d.oblacno == true) {
            broblacnih++;
        }
        if (d.sunce == true) {
            brsuncanih++;
        }
    });
    console.log(`Broj kisnih dana je ${brkisnih}`);
    console.log(`Broj oblacnih dana je ${broblacnih}`);
    console.log(`Broj suncanih dana je ${brsuncanih}`);
}
brojac(dan);

//Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom
let natprosecna = arr => {
    let suma = 0;
    let broj = 0;
    let dani = [];
    arr.forEach(d => {
        broj += d.vrednostiTemperature.length;
        d.vrednostiTemperature.forEach(t => {
            suma += t;
        });
    });
    arr.forEach(d => {
        for (let i = 0; i < d.vrednostiTemperature.length; i++) {
            if (d.vrednostiTemperature[i] > suma / broj) {
                dani += d.datum + " ";
                return;
            }
        }
    })
    return dani;
    console.log(suma);
    console.log(broj);
    console.log(suma / broj);
};


console.log(natprosecna(dan));

///////////////////////////////////////////////////////////////////////////

//Objekat Student sadrži njegovo ime (string), prezime (string), godinu studija (ceo broj između 1 i 5), kao i niz ocena do sada položenih ispita (niz celih brojeva, gde je svaki od brojeva u intervalu od 6 do 10).
//Kreirati niz od barem 4 studenta. Napisati sledeće arrow funkcije:
let student1 = {
    ime: "Nikola",
    prezime: "Stojanovic",
    godina: 4,
    ocene: [9, 8, 9, 10, 6, 10, 9, 10, 10, 7],
    prosjek: function () {
        let suma = 0;
        let br = 0;
        this.ocene.forEach(o => {
            suma += o;
            br++;
        })
        return suma / br;
    },
};

let student2 = {
    ime: "Marko",
    prezime: "Cvetkovic",
    godina: 3,
    ocene: [6, 6, 7, 7, 6, 6, 6, 6],
    prosjek: function () {
        let suma = 0;
        let br = 0;
        this.ocene.forEach(o => {
            suma += o;
            br++;
        })
        return suma / br;
    },
};

let student3 = {
    ime: "Darko",
    prezime: "Cvetkovic",
    godina: 5,
    ocene: [10, 10, 9, 10, 10, 10, 9],
    prosjek: function () {
        let suma = 0;
        let br = 0;
        this.ocene.forEach(o => {
            suma += o;
            br++;
        })
        return suma / br;
    },
};

let student4 = {
    ime: "Uros",
    prezime: "Jovanovic",
    godina: 2,
    ocene: [10, 10, 10, 10, 10, 10, 10],
    prosjek: function () {
        let suma = 0;
        let br = 0;
        this.ocene.forEach(o => {
            suma += o;
            br++;
        })
        return suma / br;
    },
};

let student5 = {
    ime: "Nemanja",
    prezime: "Nikolic",
    godina: 5,
    ocene: [9, 8, 7, 10, 10, 8, 9, 7, 8, 9, 6, 10, 10, 7, 9],
    prosjek: function () {
        let suma = 0;
        let br = 0;
        this.ocene.forEach(o => {
            suma += o;
            br++;
        })
        return suma / br;
    },
};

let student = [student1, student2, student3, student4, student5];

//Funkciji se prosleđuje niz studenata i string koji sadrži jedan karakter, a štampa imena i prezimena svih studenata čije prezime počinje na zadato slovo
let pocinje = (arr, string) => {
    arr.forEach(s => {
        if (s.ime[0] == string) {
            console.log(s.ime);
            console.log(s.prezime);
        }

    });
};
pocinje(student, "N");

//Funkciji se prosleđuje niz studenata i dva stringa, a štampa imena i prezimena svih studenata čije ime sadrži prvi string, a prezime sadrži drugi string
let pocinje2 = (arr, string1, string2) => {
    arr.forEach(s => {
        let ime = false;
        let prezime = false;
        for (let i = 0; i < s.ime.length; i++) {
            if (s.ime[i] == string1) {
                ime = true;
            }
        }
        for (let i = 0; i < s.prezime.length; i++) {
            if (s.prezime[i] == string2) {
                prezime = true;
            }
        }
        if (ime == true && prezime == true) {
            console.log(s.ime, s.prezime);
        }
    })
};
pocinje2(student, "r", "n");

//Funkciji se prosleđuje niz studenata i ceo broj između 1 i 5 koji predstavlja godinu studija, a vraća broj studenata koji se nalaze na prosleđenoj godini studija.
let godina = (arr, a) => {
    let br = 0;
    arr.forEach(s => {
        if (s.godina == a) {
            br++;
        }
    });
    return br;
}
console.log(godina(student, 5));

//Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
let maksProsek = arr => {
    let maks = 0;
    let zbir = 0;
    let br = 0;
    let oceneS = [];
    let rez = 0;
    arr.forEach(s => {
        let zbir = 0;
        br = 0;
        for (let i = 0; i < s.ocene.length; i++) {
            zbir += s.ocene[i];
            br++;

        }
        rez = zbir / br;

        oceneS.push(rez);
    });
    let maks1 = arr.forEach(s1 => {
        let maks1 = 0;
        let maks = oceneS[0];
        console.log(maks);
        for (let i = 0; i < oceneS.length; i++) {

            if (oceneS[i] > maks) {
                maks = oceneS[i];
            }
        }
        // console.log(maks);
        for (let i = 0; i < oceneS.length; i++) {
            if (oceneS[i] == maks) {
                maks1 = i;
            }
        }
        // console.log(maks1);
        return maks1

    })
    console.log(oceneS);
    // console.log(maksProsek(student));
    


    // console.log(maks);
    // console.log(zbir);
    // console.log(oceneS);

    // console.log(oceneS);
    // for (let i = 0; i < oceneS.length; i++)
    // let maks = 0;
    // arr.forEach(s => {
    //     if (s.prosjek() > maks) {
    //         maks = s.prosjek();
    //     }
        
    // });
    // return maks;
};
    console.log(maksProsek(student));

let maksProsek1 = arr => {
    arr.forEach(s1 => {
        if (s1.prosjek() == maksProsek(arr)) {
            console.log(s1.ime, s1.prezime);
        }
    })


}
maksProsek1(student);
console.log("//////////////////////////////////////////////");

//Student je prosečan ako nema nijednu šesticu i nijednu desetku. Funkciji se prosleđuje niz studenata, a ona ispisuje sve prosečne studente.
let prosecan = arr => {
    arr.forEach(s => {
        let br = 0;
        for (let i = 0; i < s.ocene.length; i++) {
            if (s.ocene[i] == 7 || s.ocene[i] == 8 || s.ocene[i] == 9) {
                // console.log(s.ocene[1]);
                br++;
            }
        }

        if (s.ocene.length == br) {
            console.log(s.ime, s.prezime);
        }
        // s.ocene.forEach(o => {
        //     if (o.ocene != 6 && o.ocene != 10) {
        //         console.log(s.ime);
        //         return;
        //     }
    });
}

prosecan(student);
console.log("/////////////////////////////////////////////////////");

//Student je “ekstra” ako je polagao ispite samo sa devetkama i desetkama, i pri tome je broj desetki barem duplo veći od broja devetki. Funkciji se prosleđuje niz studenata, a ona ispisuje sve ekstra studente.
let ekstra = arr => {
    arr.forEach(s => {
        let br = 0;
        let br1 = 0;
        for (let i = 0; i < s.ocene.length; i++) {
            if (s.ocene[i] == 9) {
                br++;
            }
            if (s.ocene[i] == 10) {
                br1++;
            }
            if (br1 + br == s.ocene.length && br1 > 2 * br) {
                console.log(s.ime, s.prezime);
            }
        }
    });
}
ekstra(student);
console.log("///////////////////////////////////////////////////////////");

//Student “kida” ako je polagao ispite samo samo sa devetkama i desetkama, a broj devetki je manji od godine studije na kojoj se student nalazi. Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji kidaju.
let kida = arr => {
    // arr.forEach(s => {
    //     let br = 0;
    //     let br1 = 0;
    //     for (let i = 0; i < s.ocene.length; i++) {
    //         if (s.ocene[i] == 9) {
    //             br++;
    //         }
    //         if (s.ocene[i] == 10) {
    //             br1++;
    //         }
    //         if (br1 + br == s.ocene.length && br < s.godina) {
    //             console.log(s.ime, s.prezime);
    //         }
    //     }
    // });
    arr.forEach(s => {
        let br = 0;
        let br1 = 0;
        s.ocene.forEach(o => {
            if (o.ocene == 9) {
                br++;
            }
            if (o.ocene == 10) {
                br1++;
            }
            console.log(br1);
            console.log(o.ocene);
            if (br1 + br == s.ocene.length && br < s.godina) {
                console.log(s.ime,s.prezime);
            }
        });
    });
}
kida(student);
console.log("/////////////////////////////////////////////////////////////");

//Student “razbija” ako je sve ispite položio sa ocenom deset. Pri tome, broj desetki ne sme biti manji od broja 5 * (godina_studija - 1). (Dakle, ne može student na trećoj godini da razbija ako je položio jedan ispit, kao što nijedan student prve godine još ne može da razbija, jer još nije položio sve ispite iz tekuće godine). Funkciji se prosleđuje niz studenata, a ona ispisuje sve studente koji razbijaju.
let razbija = arr => {
    arr.forEach(s => {
        let br = 0;
        for (let i = 0; i < s.ocene.length; i++) {
            if (s.ocene[i] == 10) {
                br++;
            }
            if (br == s.ocene.length && br > 5 * (s.godina - 1)) {
                console.log(s.ime, s.prezime);
            }
        }
    })
}
razbija(student);
console.log("//////////////////////////////////////////////////////");

//Student je “aljkav” ako nijedan ispit nije položio sa ocenom većom od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve aljkave studente.
let aljkav = arr => {
    arr.forEach(s => {
        let br = 0;
        for (let i = 0; i < s.ocene.length; i++) {
            if (s.ocene[i] == 6 || s.ocene[i] == 7) {
                br++;
            }
        }
        if (br == s.ocene.length) {
            console.log(s.ime, s.prezime);
        }
    })
}
aljkav(student);
console.log("////////////////////////////////////////////////");

//Student se “bruka” ako nije student prve godine, a broj položenih ispita je manji od broja 3 * (godina_studija - 1), i pri tome nijedna ocena nije veća od 7. Funkciji se prosleđuje niz studenata, a ona prebrojava sve studente koji se brukaju.
let bruka = arr => {
    arr.forEach(s => {
        if (s.godina != 1 && s.ocene.length < 3 * (s.godina - 1)) {
            console.log(s.ime, s.prezime);
        }
    })
}
bruka(student);

