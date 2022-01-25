let visine = [
    {
        ime: "Pera", visina: 189, pol: "M", plate: [5000, 10000, 15000], maks: function () {
            let maks = 0;
            this.plate.forEach(p => {
                if (p > maks) {
                    maks = p
                }
                return maks;
            })
        },
        min: function () {
            let min = this.plate[0];
            if (p < min) {
                min = p;
            }
            return min;
        }
    },
    {
        ime: "Laza", visina: 192, pol: "M", plate: [2000, 10000, 20000], maks: function () {
            let maks = 0;
            this.plate.forEach(p => {
                if (p > maks) {
                    maks = p
                }
                return maks;
            })
        },
        min: function () {
            let min = this.plate[0];
            if (p < min) {
                min = p;
            }
            return min;
        }
    },
    {
        ime: "Milka", visina: 164, pol: "Z", plate: [2500, 15000, 20000], maks: function () {
            let maks = 0;
            this.plate.forEach(p => {
                if (p > maks) {
                    maks = p
                }
                return maks;
            })
        },
        min: function () {
            let min = this.plate[0];
            if (p < min) {
                min = p;
            }
            return min;
        }
    },
    {
        ime: "Mika", visina: 176, pol: "M", plate: [6000, 15000, 25000], maks: function () {
            let maks = 0;
            this.plate.forEach(p => {
                if (p > maks) {
                    maks = p
                }
                return maks;
            })
        },
        min: function () {
            let min = this.plate[0];
            if (p < min) {
                min = p;
            }
            return min;
        }
    },
    {
        ime: "Sonja", visina: 178, pol: "Z", plate: [2000, 6000], maks: function () {
            let maks = 0;
            this.plate.forEach(p => {
                if (p > maks) {
                    maks = p
                }
                return maks;
            })
        },
        min: function () {
            let min = this.plate[0];
            if (p < min) {
                min = p;
            }
            return min;
        }
    },
    {
        ime: "Milica", visina: 166, pol: "Z", plate: [6000, 10000, 15000], maks: function () {
            let maks = 0;
            this.plate.forEach(p => {
                if (p > maks) {
                    maks = p
                }
                return maks;
            })
        },
        min: function () {
            let min = this.plate[0];
            if (p < min) {
                min = p;
            }
            return min;
        }
    },

];

//Izmeniti objekte u prethodnom zadatku tako da svaki objekat sadrži i polje plate koje je niz neto plata koje je svaka osoba zaradila u poslednjih 5 godina.
//Napisati funkciju koja ispisuje podatke o osobi koja ima najveću razliku između svoje minimalne i maksimalne plate.
let plate = arr => {
    let raz = 0;
    arr.forEach(o => {
        if (maks() - min() > raz) {
            raz = maks() - min();
        }
        return raz;
    })
    let plate1 = arr => {
        arr.forEach(o1 => {
            if (maks() - min())
        })
    }
}