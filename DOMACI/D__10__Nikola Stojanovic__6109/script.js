
let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    // vrednostiTemperature: [-9, -8, -8, -6, -3, -1],
    // vrednostiTemperature: [26, 27, 48],
    vrednostiTemperature: [10, 12, 18, 11, 5, 0, -3, -12],
    // vrednostiTemperature: [26, 28, 30],


    // Zadatak 1
    //Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropski: function () {
        let br = 0;
        this.vrednostiTemperature.forEach(el => {
            if (el < 24) {
                br++;
            }
        });
        if (br == 0) {
            return true;
        }
        else {
            return false
        }

    },

    // Zadatak 2
    // Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljan: function () {
        let rez = false;
        for (let i = 0; i < this.vrednostiTemperature.length - 1; i++) {
                if ((Math.abs(this.vrednostiTemperature[i] - this.vrednostiTemperature[i + 1])) > 8) {
                    rez = true;
                }


        }
        return rez;
        
    },

    // Zadatak 3
    // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajen: function () {
        let rez = false;
        this.vrednostiTemperature.forEach(t => {
            if (t < -5 && this.kisa == true) {
                rez = true;
            }
            if (t > 25 && this.oblacno == true) {
                rez = true;
            }
            if (this.kisa == true && this.oblacno == true && this.sunce == true) {
                rez = true;
            }
        }
        );
        return rez;
    }
}

console.log(dan.tropski());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
