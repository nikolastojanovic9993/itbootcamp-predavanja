export class Pacijent {
    constructor (i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime (i) {
        this._ime = i;
    }
    get ime () {
        return this._ime;
    }

    set visina (v) {
        if (v > 2.50) {
            this._visina = 2.50;
        }
        
        else if (v < 0) {
            this._visina = 0;
        }
        else {
            this._visina = v;
        }
    }
    get visina () {
        return this._visina;
    }

    set tezina (t) {
        if (t > 550) {
            this._tezina = 550;
        }
        else if (t < 0) {
            this._tezina = 0;
        }
        else {
            this._tezina = t;
        }
    }
    get tezina () {
        return this._tezina;
    }

    stampaj () {
        // console.log(`${this.ime} ${this.visina}cm ${this.tezina}kg`); ovako sam ja
        console.log(this);
    }
    stampajListu() {
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina} </li>
            <li>Tezina: ${this.tezina} </li>
        </ul>`;
        return htmlLista;
    }

    bmi () {
        let bmi = this.tezina / ((this.visina)*(this.visina));
        return bmi;
    }

    kritican () {
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}