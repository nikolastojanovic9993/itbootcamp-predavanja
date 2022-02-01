export class ChatUI {
    constructor(e) {
        this.element = e;
    }

    //Seter i geter za polje element
    set element(e) {
        this._element = e;
    }
    get element() {
        return this._element;
    }


    dateFormat(date) {
        let godina = date.getFullYear();
        let mesec = date.getMonth() + 1;

        let dan = date.getDate();

        let sati = date.getHours();

        let minuti = date.getMinutes();

        //Dodavanje 0 ispred jednocifrenih vrednosti
        mesec = String(mesec).padStart(2, "0");
        dan = String(dan).padStart(2, "0");
        sati = String(sati).padStart(2, "0");
        minuti = String(minuti).padStart(2, "0");

        let datum = `${dan}.${mesec}.${godina}.-${sati}:${minuti}`;
        return datum;
    }


    //Metod 
    templateLI(data) {
        //Izvuci podatke iz prosledjenog dokumenta(data) i zapisati ih u formatu
        //username: poruka
        //time_stamp

        let htmlLi =
            `<li> ${data.username}: ${data.message} 
        <br> 
        ${this.dateFormat(data.created_at.toDate())}
        </li>`
        this.element.innerHTML += htmlLi;
    }


}