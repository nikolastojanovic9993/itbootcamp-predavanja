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
}