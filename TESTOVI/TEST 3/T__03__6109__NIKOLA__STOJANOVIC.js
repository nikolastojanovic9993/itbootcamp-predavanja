let sportista1 = {
    imePrezime: "Nikola Stojanovic",
    visina: 2.03,
    timovi: ["Tim1", "Tim3"]
};

let sportista2 = {
    imePrezime: "Marko Cvetkovic",
    visina: 2.10,
    timovi: ["Tim2", "Tim3", "Tim4"]
};

let sportista3 = {
    imePrezime: "Uros Jovanovic",
    visina: 1.98,
    timovi: ["Tim1", "Tim3", "Tim4"]
};

let sportista4 = {
    imePrezime: "Darko Petrovic",
    visina: 2.11,
    timovi: ["Tim2", "Tim3", "Tim4", "Tim6"]
};

let sportista5 = {
    imePrezime: "Nemanja Nikolic",
    visina: 2.12,
    timovi: ["Tim1", "Tim3", "Tim4", "Tim5"]
};

let sportista = [sportista1, sportista2, sportista3, sportista4, sportista5];

let prosecnaVisina = arr => {
    let suma = 0;
    let br = 0;
    arr.forEach(s => {
        suma += s.visina;
        br++;
    });
    return suma / br;
}
console.log("/////////////////////////////////////////////////////");
console.log("1. Zadatak");
console.log(prosecnaVisina(sportista));
console.log("/////////////////////////////////////////////////////");

let igraliZaTim = (arr, string) => {
    let br = 0;
    arr.forEach(s => {
        for (let i = 0; i < s.timovi.length; i++) {
            if (s.timovi[i] == string) {
                br++;
            }
        }

    });
    return br;
}
console.log("/////////////////////////////////////////////////////");
console.log("2. Zadatak");
console.log(igraliZaTim(sportista, "Tim3"));

let najmanjeTransfera = arr => {
    let min = arr[0].timovi.length;
    let min1 = "";
    arr.forEach(s => {
        if (s.timovi.length < min) {
            min = s.timovi.length;
        }

        if (s.timovi.length == min) {
            min1 = s.imePrezime;
        }
    });
    return min1;
}
console.log("/////////////////////////////////////////////////////");
console.log("3. Zadatak");
console.log(najmanjeTransfera(sportista));

let visiTimPodela = arr => {
    let tima = [];
    let timb = [];
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length/2; i++) {
            tima.push(arr[i]);
        }
        for (let i = arr.length/2; i < arr.length; i++) {
            timb.push(arr[i]);
        }
    }
    if (arr.length % 2 != 0) {
        for (let i = 0; i < Math.round(arr.length/2); i++) {
            tima.push(arr[i]);
        }
        for (let i = Math.round(arr.length/2); i < arr.length; i++) {
            timb.push(arr[i]);
        }
        
    }
    let sumaA = 0;
    let brA = 0;
    let sumaB = 0;
    let brB = 0;
    let pVisinaA = 0;
    let pVisinaB = 0;
    tima.forEach(s => {
        sumaA += s.visina;
        brA++;
    });
    pVisinaA = sumaA / brA;

    timb.forEach(s => {
        sumaB += s.visina;
        brB++;
    });
    pVisinaB = sumaB / brB;
    if (pVisinaA > pVisinaB) {
        console.log("Visi je prvi tim");
    }
    else {
        console.log("Visi je drugi tim");
    }
}
console.log("/////////////////////////////////////////////////////");
console.log("4. Zadatak");
visiTimPodela(sportista);


let trenerVidi = arr => {
    let min = 0;
    let br = 0;
    arr.forEach(s => {
        if (s.visina > min) {
            min = s.visina;
            br++;
        }
    });
    return br;
}

console.log("/////////////////////////////////////////////////////");
console.log("5. Zadatak");
console.log(trenerVidi(sportista));

