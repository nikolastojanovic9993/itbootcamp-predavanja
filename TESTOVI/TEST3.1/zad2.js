let visine = [
    { ime: "Pera", visina: 189, pol: "M" },
    { ime: "Laza", visina: 192, pol: "M" },
    { ime: "Milka", visina: 164, pol: "Z" },
    { ime: "Mika", visina: 176, pol: "M" },
    { ime: "Sonja", visina: 178, pol: "Z" },
    { ime: "Milica", visina: 166, pol: "Z" }
];
//Napisati funkciju koja ispituje da li je prosečna visina mušakaraca veća od prosečne visine žena
let zad2 = arr => {
    let sumaM = 0;
    let sumaZ = 0;
    let brM = 0;
    let brZ = 0;
    let prM = 0;
    let prZ = 0;
    arr.forEach(o => {
        if (o.pol == "M") {
            sumaM += o.visina;
            brM++;
        }
        else if (o.pol == "Z") {
            sumaZ += o.visina;
            brZ++;
        }


    })
    prM = sumaM / brM;
    prZ = sumaZ / brZ;
    if (prM > prZ) {
        return true;
    }
    else {
        return false;
    }
}
console.log(zad2(visine));