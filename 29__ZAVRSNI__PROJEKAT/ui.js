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

    //Metod 
    templateLI(data) {
        //Izvuci podatke iz prosledjenog dokumenta(data) i zapisati ih u formatu
        //username: poruka
        //time_stamp

        let htmlLi =
            `<li> ${data.username}: ${data.message} 
        <br> 
        ${data.created_at}
        </li>`
        this.element.innerHTML += htmlLi;
    }
}