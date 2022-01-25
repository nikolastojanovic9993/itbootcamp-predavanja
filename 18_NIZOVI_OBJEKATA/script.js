console.log("Nizovi objekata");

let blog1 = {
    title: "Osnovni HTML tagovi!",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let arrBlogs = [blog1, blog2, blog3];

// ispis objekata iz niza pomocu foreach petlje
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

//ispis objekata iz niza pomocu for petlje
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

// promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// console.log(blog3.title);
// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs[2].title); //blog 3 isto


///////////////////////////////VEZBANJE//////////////////////////////

// 1. Zadatak
//Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
let sumLikes = arr => {
    let sum = 0;

    //1. nacin
    // arr.forEach( b => {
    //     sum += b.likes;
    // });

    //2. nacin
    for (let i = 0; i < arr.length; i++) {
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i];
        sum += arr[i].likes;
    }
    return sum;
}
console.log(`Ukupan broj lajkova: ${sumLikes(arrBlogs)}`);

// Lajkovi iz 1. i 3. bloga
let sum13 = arrBlogs[0]["likes"] + arrBlogs[2].likes; // ista su ova dva nacina pozivanja
console.log(sum13);

//2. Zadatak - sami
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let avgLikes = arr => {
let sum = 0;
let br = 0;
arr.forEach(elem => {
    sum += elem.likes;
    br++;
});
let avg = sum / br;
return avg;
};
console.log(avgLikes(arrBlogs));


//3. Zadatak Jelena
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let moreLikes = nizic => {
    nizic.forEach(elem => {
        if (elem.likes > elem.dislikes) {
            console.log(elem.title);
        }
    });
}
console.log("Blogovi sa vise lajkova nego dislajkova");
moreLikes(arrBlogs);

// 4. Zadatak ja
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duplo = arr => {
    arr.forEach(elem => {
        if (elem.likes >= (elem.dislikes * 2)) {
            console.log(elem.title);
        }
    });
}
duplo(arrBlogs);

// 5. Zadatak ja
//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let kraj = arr => {
    for (i = 0; i < arr.length; i++) {
        let element = arr[i];
        let element1 = arr[i].title;
        for (j = 0; j < element1.length; j++) {
            if (element1[element1.length - 1] == "!") {
                console.log(element.title);
            }
            }
            }
        }
    

kraj(arrBlogs);

let kraj1 = arr => {
    arr.forEach(el => {
        if ("!" ==el.title[el.title.length - 1]) {
            console.log(el.title);
        }
    })
}
kraj1(arrBlogs);