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
    templateLI(doc) {
        let id = doc.id;
        let data = doc.data();
        

        //Izvuci podatke iz prosledjenog dokumenta(data) i zapisati ih u formatu
        //username: poruka
        //time_stamp
        let danas = new Date();
        let danasg = danas.getFullYear();
        let danasm = danas.getMonth() + 1;
        let danasd = danas.getDate();


        let porukag = data.created_at.toDate().getFullYear();
        let porukam = data.created_at.toDate().getMonth() + 1;
        let porukad = data.created_at.toDate().getDate();
        let porukas = data.created_at.toDate().getHours();
        let porukamin = data.created_at.toDate().getMinutes();
       
            if (data.username == localStorage.username) {
                if (porukag == danasg && porukam == danasm && porukad == danasd) {
                let htmlLi =
                    `<li id="${id}" class="right"><span> ${data.username}</span>:${data.message} 
                <br> 
                ${String(porukas).padStart(2, "0")}: ${String(porukamin).padStart(2, "0")}
                <img src="slike/bin.png">
                </li>`
                this.element.innerHTML += htmlLi;
                this.element.class

            }
            else {
                let htmlLi =
                    `<li id="${id}" class="right"><span>${data.username}</span>:${data.message} 
                <br> 
                ${this.dateFormat(data.created_at.toDate())}
                <img src="slike/bin.png">
                </li>`
                this.element.innerHTML += htmlLi;
        
            }
        }
        else if (porukag == danasg && porukam == danasm && porukad == danasd) {
            let htmlLi =
                `<li id="${id}"><span> ${data.username}</span>:${data.message} 
            <br> 
            ${String(porukas).padStart(2, "0")}: ${String(porukamin).padStart(2, "0")}
            <img src="slike/bin.png">
            </li>`
            this.element.innerHTML += htmlLi;
            this.element.class

        }
            else {
                let htmlLi =
                    `<li id="${id}"><span>${data.username}</span>:${data.message} 
                <br> 
                ${this.dateFormat(data.created_at.toDate())}
                <img src="slike/bin.png">
                </li>`
                this.element.innerHTML += htmlLi;
        
            }
        

    }


    clear() {
        this.element.innerHTML = "";
    }

    filterDate(doc, date1, date2) {
        let data = doc.data();
        let datum1 = new Date(date1);
        let datum2 = new Date(date2);
    
        console.log(data.created_at.toDate().getTime());
        if (data.created_at.toDate().getTime() > datum1 && data.created_at.toDate().getTime() < datum2) {
            this.templateLI(doc);
        }
    }

}