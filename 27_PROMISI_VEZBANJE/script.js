let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");
let tabela = document.querySelector("#tabela");
tabela.style.border = '1px solid black';

//Pravis HTTP request
function getItem(resourse, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            //sve ok
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState == 4) {
            //desila se neka greska
            reject("could not fetch data");
        }
    });
    request.open('GET', resourse);
    request.send();
}



function submitForm1(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItem("json/stock.json", (data) => {
        data.forEach(item => {
            if (item.stock <= 0) {
                ids.push(item.id);
            }
        });
        getItem("json/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            console.log(`Ukupna tezina proizvoda koji treba da se naruce je: ${totalWeight}`);

            if (totalWeight > capacity) {
                let par = document.createElement('p');
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
                par.style.color = 'red';
                par.style.fontSize = '24px';
                par.style.fontWeight = 'bold';
                divOrder.appendChild(par);
            }
            else {
                getItem("json/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if (ids.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let par = document.createElement('p');
                    par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice} RSD`;
                    par.style.color = 'green';
                    par.style.fontSize = '24px';
                    par.style.fontWeight = 'bold';
                    divOrder.appendChild(par);
                }, (msg) => { console.log(msg); });
            }
        }, (msg) => { console.log(msg); });

    }, (msg) => { console.log(msg); });

}

/*
1.ideja: getItems() da se pozove jedan za drugim
getItems("json/stock.json");
getItems("json/weights.json");
getItems("json/prices.json");
NETACNA IDEJA, jer je svaki getItem asinhron poziv sto znaci da ne mora weights.json da se dohvati pre stock.json, slicno i za prices.json (tj ne znas dal ce da se ucitavaju jedan za drugim, tim redosledom koji tebi odgovara, moras da ih uslovis)

2. ideja:
Uslovljavas resolve-om jer unutar njega zoves sledeci, pa unutar njegovor resolva zoves sledeci.
TJ redosled asinhronih poziva se odvija preko callback funkcija
TACNA IDEJA, ali neprakticna jer se upada u callback hell

3. ideja: REdosled asinhronih poziva odvija se preko Promis-a
*/

//3 ideja
function getItemReturnPromise(resourse) {
    // resolve i reject prebacuejs u parametre za promis objekat
    return new Promise((resolve, reject) => {
        //posto je arrow funkcija, ne mozes da koristis this. dole, moras request.
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (request.readyState == 4 && request.status == 200) {
                //sve ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState == 4) {
                //desila se neka greska
                reject("could not fetch data");
            }
        });
        request.open('GET', resourse);
        request.send();
    });

}

function submitForm2(event) {
    event.preventDefault();
    let capacity = inputOrder.value;
    let ids = [];
    getItemReturnPromise("json/stock.json")
        .then((data) => {
            data.forEach(item => {
                if (item.stock <= 0) {
                    ids.push(item.id);
                }
            });
            return getItemReturnPromise("json/weights.json")
        })
        .then((data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            if (totalWeight > capacity) {
                let par = document.createElement('p');
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
                par.style.color = 'red';
                par.style.fontSize = '24px';
                par.style.fontWeight = 'bold';
                divOrder.appendChild(par);
            }
            else {
                return getItemReturnPromise("json/prices.json");
            }
        })
        .then((data) => {
            if (data !== undefined) { //uslov stavljas za slucaj da nije uslo u else granu iznad, onda nema data
                let trN = document.createElement('tr');
                tabela.appendChild(trN);
                let tdN1 = document.createElement('th');
                let tdN2 = document.createElement('th');
                trN.appendChild(tdN1);
                trN.appendChild(tdN2);
                tdN1.appendChild(document.createTextNode("Naziv artikla"));
                tdN2.appendChild(document.createTextNode("Cena artikla"));
                tdN1.style.border = '1px solid black';
                tdN2.style.border = '1px solid black';
                tdN1.style.color = 'green';
                tdN2.style.color = 'green';
                let totalPrice = 0;
                data.forEach(item => {

                    if (ids.includes(item.id)) {
                        let tr = document.createElement('tr');
                        tabela.appendChild(tr);

                        let td1 = document.createElement('td');
                        tr.appendChild(td1);
                        let td2 = document.createElement('td');
                        tr.appendChild(td2);
                        td1.style.border = '1px solid black';
                        td2.style.border = '1px solid black';
                        td1.appendChild(document.createTextNode(`${item.item}`));
                        td2.appendChild(document.createTextNode(`${item.price}`));
                        totalPrice += item.price;
                    }
                });
                let trU = document.createElement('tr');
                tabela.appendChild(trU);
                let tdU1 = document.createElement('td');
                trU.appendChild(tdU1);
                tdU1.appendChild(document.createTextNode("UKUPNO:"));
                let tdU2 = document.createElement('td');
                trU.appendChild(tdU2);
                tdU2.appendChild(document.createTextNode(`${totalPrice}`));
                tdU1.style.border = '1px solid black';
                tdU2.style.border = '1px solid black';
                tdU1.style.color = 'red';
                tdU2.style.color = 'red';

                // let par = document.createElement('p');
                // par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice} RSD`;
                // par.style.color = 'green';
                // par.style.fontSize = '24px';
                // par.style.fontWeight = 'bold';
                // divOrder.appendChild(par);
            }
        })
        .catch((msg) => {
            console.log(msg);
        });
}




//Zadatak 2
let divFilter = document.querySelector('#filter');
let formFilter = document.querySelector('#filter form');
let inputFilter = document.querySelector('#naziv');
let min = document.querySelector('#cenaMin');
let max = document.querySelector('#cenaMax');
let tabela1 = document.createElement('table');
tabela1.style.border = "1px solid black"
divFilter.appendChild(tabela1);


function submitForm3(event) {
    event.preventDefault();

    let ids = [];
    let ids1 = [];
    getItemReturnPromise("json/stock.json")
        .then((data) => {
            data.forEach(item => {
                if (item.stock > 0) {
                    ids.push(item.item);
                    ids1.push(item.stock);
                }
            });
            return getItemReturnPromise("json/prices.json")
        })
        .then((data) => {
            let inputFilterValue = inputFilter.value;
            let MinValue = min.value;
            let MaxValue = max.value;
            let lista = document.createElement('ul');
            divFilter.appendChild(lista);
            let tr1 = document.createElement('tr');
            tabela1.appendChild(tr1);
            let th11 = document.createElement('th');
            let th12 = document.createElement('th');
            let th13 = document.createElement('th');
            th11.appendChild(document.createTextNode('Naziv artikla'));
            th12.appendChild(document.createTextNode('Stanje u magacinu'));
            th13.appendChild(document.createTextNode('Cena artikla'));
            tr1.appendChild(th11);
            tr1.appendChild(th12);
            tr1.appendChild(th13);
            data.forEach((item, i) => {
                if (MinValue < item.price && MaxValue > item.price && ids.includes(item.item) && item.item.includes(inputFilterValue)) {
                    let stock = ids1[i];
                    let tr2 = document.createElement('tr');
                    tabela1.appendChild(tr2);
                    let th22 = document.createElement('td');
                    let th23 = document.createElement('td');
                    let th21 = document.createElement('td');
                    th21.appendChild(document.createTextNode(`${item.item}`));
                    th22.appendChild(document.createTextNode(`${stock}`));
                    th23.appendChild(document.createTextNode(`${item.price}`));
                    tr2.appendChild(th21);
                    tr2.appendChild(th22);
                    tr2.appendChild(th23);

                }

            })
        })
        .catch((msg) => {
            console.log(msg);
        });

}

// //Prisluskujes formu
// // formOrder.addEventListener('submit', submitForm1);
formOrder.addEventListener('submit', submitForm2);
formFilter.addEventListener('submit', submitForm3);


//2. Zadatak Stefan - Drugi nacin


// let divFilter = document.querySelector('#filter');
// let formFilter = document.querySelector('#filter form');
// let inputNaziv = document.querySelector('#naziv');
// let inputCenaMin = document.querySelector('#cenaMin');
// let inputCenaMax = document.querySelector('#cenaMax');

// async function clickGetItems () {
//     let naziv = inputNaziv.value;
//     let cenaMin = inputCenaMin.value;
//     let cenaMax = inputCenaMax.value;

//     let data1 = await getItemReturnPromise('json/stock.json'); //cekaj dok se ne vrati rezultat promisa, mora da ima kljucnu rec async
//     let artikliNaStanju = [];
//     data1.forEach(item => {
//         if(item.stock > 0) {
//             artikliNaStanju.push(item.id);
//         }
//     });

//     let data2 = await getItemReturnPromise('json/prices.json');
//     let tabela = document.createElement('table');
//     data2.forEach(item => {
//         if(artikliNaStanju.includes(item.id) && item.item.includes(naziv) && item.price >= cenaMin && item.price <= cenaMax) {
//             let tr = document.createElement('tr');
//             let td1 = document.createElement('td');
//             let td2 = document.createElement('td');
//             td1.innerHTML = item.item;
//             td2.innerHTML = item.price;
//             tr.appendChild(td1);
//             tr.appendChild(td2);
//             tabela.appendChild(tr);


//         }
//     });
//     return tabela; //vraca zapravo promise
// }


// function akcija (event) {
//     event.preventDefault();
//     clickGetItems()
//     .then(data => {
//         // console.log(data);
//         divFilter.appendChild(data);  //tj tabela
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// formFilter.addEventListener('submit', akcija);
