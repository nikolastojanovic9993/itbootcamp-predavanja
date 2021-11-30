console.log("IF - naredba grananja");

if(true) {
    console.log("Uslov je ispunjen");
}

console.log("Neki kod...");

// Operatori poredjenja: ==, !=, <, >, <=, >=
let a = 7;
let b = 7;
// a = b - dodela vrednosti a je 7
if(a == b) {
    console.log("a i b su jednake vrednosi");
}

a = 10;
b = 14;
if(a != b) {
    console.log("a i b nisu jednake vrednosti");
}

a = 4;
b = 4;
if(a < b) {
    console.log("a je strogo manje od b");
}

if(a <= b) {
    console.log("a je manje ili jednako b");
}

//////////////////////////////////////////

// == proverava samo jednakost po vrednosti (nije bitan tip)

a = 5;
b = "5";
if(a == b) {
    console.log("a i b su jednake vrednosti");
}

// === proverava jednakost po tipu i po vrednosti (bitan je tip)
a = "5";
b = "5";

if(a === b) {
    console.log("a i b su jednaki po vrednosti i po tipu")
}

// !== da li su dve promenljive razlicite bilo po tipu bilo po vrednosti
a = 7;
b = "7";
if(a !== b) {
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti")
}


// != da li su razliciti SAMO po vrednosti
a = 7;
b = "8";
if(a != b) {

}

////////////////////////////////////////

let x = 3;
let y = 4;
let z = 5;
if(x+y == z+2) {
    console.log("x+y je jednako sa z+2");
}

