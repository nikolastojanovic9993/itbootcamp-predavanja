// Vezbanje slajd 20

//dodavanje filmova
// db.collection('movies')
//     .doc('movie2')
//     .set({
//         Director: {
//             First_name: "Darko",
//             Last_name: "Cvetanovic"
//         },
//         Genres: ["horor", "comedy"],
//         Name: "Movie2",
//         Rating: 9.56,
//         Release_year: 2006
//     })
//     .then(() => {
//         console.log('Film "Movie2" uspesno dodat');
//     })
//     .catch(err => {
//         console.log('Greska prilikom dodavanja filma');
//     });

let dodavanjeFilmova = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].Genres.length; j++) {
            db.collection('movies')
                .doc(`movie${i + 2}`)
                .set({
                    Director: {
                        First_name: `${arr[i].Director.First_name}`,
                        Last_name: `${arr[i].Director.Last_name}`
                    },
                    Genres: [arr[i].Genres[j]],
                    Name: `Movie${i + 1}`,
                    Rating: arr[i].Rating,
                    Realase_year: arr[i].Release_year
                })
                .then(() => {
                    console.log(`Film Movie${i + 1} uspesno dodat`);
                })
                .catch(err => {
                    console.log(`Greska prilikom dodavanja filma Movie${i + 1}`);
                })
        }
    }
}

let movies = [
    {
        Director: {
            First_name: "Darko",
            Last_name: "Cvetanovic"
        },
        Genres: ["horor", "comedy"],
        Name: "Movie2",
        Rating: 9.56,
        Release_year: 2006
    },

    {
        Director: {
            First_name: "Uros",
            Last_name: "Jovanovic"
        },
        Genres: ["horor", "comedy", "romantic"],
        Name: "Movie3",
        Rating: 8.70,
        Release_year: 2012
    }
];
dodavanjeFilmova(movies);


// db.collection('movies')
//     .doc('movie3')
//     .set({
//         Director: {
//             First_name: "Uros",
//             Last_name: "Jovanovic"
//         },
//         Genres: ["horor", "comedy", "romantic"],
//         Name: "Movie3",
//         Rating: 8.70,
//         Release_year: 2012
//     })
//     .then(() => {
//         console.log('Film "Movie3" uspesno dodat');
//     })
//     .catch(err => {
//         console.log('Greska prilikom dodavanja filma');
//     });

//menjanje podataka o nekim filmovima u bazi
// db.collection('movies')
//     .doc('movie1')
//     .update({
//         Rating: 9.99
//     })
//     .then(() => {
//         console.log('Uspesna izmena podataka za Film1');
//     })
//     .catch(err => {
//         console.log('Greska prilikom izmene podataka za Film1');
//     });


//dodavanje zanra nekom filmu
// let movie = db.doc('movies/movie2');
// movie.update({
//     Genres: firebase.firestore.FieldValue.arrayUnion("romantic")
// })
//     .then(() => {
//         console.log('Uspesno dodavanje zanra koji je element niza filmu2');
//     })
//     .catch(err => {
//         console.log("Neuspesno dodavanje zanra filmu2");
//     });


//brisanje zanra nekom filmu
// db.collection('movies')
//     .doc('movie3')
//     .update({
//         Genres: firebase.firestore.FieldValue.arrayRemove('romantic')
//     })
//     .then(() => {
//         console.log('Uspesno brisanje zanra filmu3');
//     })
//     .catch(err => {
//         console.log('Neuspesno brisanje zanra filmu3');
//     })


//menjanje imena ili prezimena nekom reziseru
// db.collection('movies')
//     .doc('movie1')
//     .update({
//         "Director.First_name": "Dusan"
//     })
//     .then(() => {
//         console.log('Uspesna promena imena rezisera Filma1 u Dusan');
//     })
//     .catch(err => {
//         console.log('Neuspesna promena imena rezisera Filma1');
//     })

// db.collection('movies')
//     .doc('movie2')
//     .update({
//         "Director.Last_name": "Cvetkovic"
//     })
//     .then(() => {
//         console.log('Uspesna promena prezimena rezisera Filma2 u Cvetkovic');
//     })
//     .catch(err => {
//         console.log('Neuspesna promena prezimena rezisera Filma2');
//     })