// PRIMERI CALLBACK FUNKCIJA

let myFunc = callback => {
    callback();
}

// Realizacija callback funkcije vrsi se prilikom poziva roditeljske funkcije
myFunc(() => {
    console.log("Callback okinuta");
});

////////////////////////////

let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
}


// 1.
// Realizacija funkcije se prosledjuje kao parametar
sum((x, y) => {
    console.log(x + y);
});

// 2.
// Kreiramo posebnu funkciju za realizaciju i onda je prosledimo kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); //kada zoves callback ne stavljas zagrade (printSum());

///////////////////////////////

// Ne moras da ga nazivas callback, naziv je nebitan, bitno je sta prosledjujes prilikom poziva
let my = f => {
    f("Jelena");
}

my(x => {
    console.log(`Hello ${x}`);
});

////////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
    cb(7, 3);
}

racunaj("Oduzimanje", (x, y) => {
    console.log(x - y);
});

racunaj("Mnozenje", (x, y) => {
    console.log(x * y);
});

//////////////////////////////

let racunaj2 = (str, cb) => {
    let a = 11;
    let b = 15;
    console.log(str, cb(a, b));
    console.log(str, `brojeva ${a} i ${b} je`, cb(a, b));
}

racunaj2("Deljenje", (a, b) => {
    let res = a / b;
    return res;
});

//////////////////////////////
// Moze i ovako ali nije praksa

let racunaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
}

racunaj3 ("Deljenje", 15, 17, (a, b) => {
    let res = a / b;
    return res;
})