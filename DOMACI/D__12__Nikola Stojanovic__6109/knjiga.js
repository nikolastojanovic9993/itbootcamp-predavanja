export class Knjiga {
    constructor (n, a, g, b, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = g;
        this.brojStrana = b;
        this.cena = c;
    }

    //NASLOV
    set naslov(n) {
        let n1 = n.trim();
        if (n1.length > 0) {
            this._naslov = n1;
        }
        else {
            this._naslov = "Knjiga";
        }
    }
    get naslov() {
        return this._naslov;
    }

    //AUTOR
    set autor(a) {
        let a1 = a.trim();
        if (a1.length > 0) {
            this._autor = a1;
        }
        else {
            this._autor = "Autor"
        }
    }
    get autor() {
        return this._autor;
    }

    //GODIZDANJA
    set godIzdanja(g) {
        if (g < 1000) {
            this._godIzdanja = 1000;
        }
        else {
            this._godIzdanja = g;
        }
    }
    get godIzdanja() {
        return this._godIzdanja;
    }

    //BROJ STRANA
    set brojStrana(b) {
        if (b < 0) {
            this._brojStrana = 0;
        }
        else {
            this._brojStrana = b;
        }
    }
    get brojStrana() {
        return this._brojStrana;
    }

    //CENA
    set cena(c) {
        if (c < 0) {
            this._cena = 0;
        }
        else {
            this._cena = c;
        }
    }
    get cena() {
        return this._cena;
    }


    //STAMPAJ
    stampaj() {
        document.body.innerHTML += `${this}`
    }

    //OBIMNA
    obimna() {
        if (this._brojStrana > 600) {
            return true;
        }
        else {
            return false;
        }
    }

    //SKUPA
    skupa() {
        if (this._cena > 8000) {
            return true;
        }
        else {
            return false;
        }
    }

    //DUGACKO IME
    dugackoIme() {
        if (this._autor.length > 18) {
            return true;
        }
        else {
            return false;
        }
    }
}