export class Film {
    constructor(n, r, g, o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }

    //NASLOV
    set naslov(n) {
        let n1 = n.trim();
        if (n1.length > 0) {
            this._naslov = n1;
        }
        else {
            this._naslov = "Film";
        }
    }

    get naslov() {
        return this._naslov;
    }


    //REZISER
    set reziser(r) {
        let r1 = r.trim();
        if (r1.length > 0) {
            this._reziser = r1;
        }
        else {
            this._reziser = "Reziser"
        }
    }

    get reziser() {
        return this._reziser;
    }


    //GODINA IZDANJA
    set godinaIzdanja(g) {
        if (g < 1800) {
            this._godinaIzdanja = 1800;
        }
        else {
            this._godinaIzdanja = g;
        }
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }


    //OCENE
    set ocene(o) {
        this._ocene = o;
    }

    get ocene() {
        return this._ocene;
    }


    // DODAVANJE JEDNE OCENE
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena);
    }
    //OSTALE METODE
    stampaj() {
        console.log(this);
    }

    //21. Slajd Napraviti metod prosek koji vraća prosečnu ocenu PROSEK
    prosek() {
        let zbir = 0;
        let br = 0;
        let prosek;
        this._ocene.forEach(o => {
            zbir += o;
            br++;
        });
        prosek = zbir / br;
        return prosek;

    }
}

