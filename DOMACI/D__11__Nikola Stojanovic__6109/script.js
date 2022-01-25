let knjiga1 = {
    naziv: "Travnička hronika",
    autor: "Ivo Andrić",
    putanja: "https://www.delfi.rs/_img/artikli/2017/04/travnicka_hronika_vv.jpg",
    polje: true,
};

let knjiga2 = {
    naziv: "Anđeli i demoni",
    autor: "Den Braun",
    putanja: "https://www.delfi.rs/_img/artikli/2020/04/andjeli_i_demoni-bros_vv.jpg",
    polje: true,
};

let knjiga3 = {
    naziv: "Moć sadašnjeg trenutka",
    autor: "Ekart Tol",
    putanja: "https://www.delfi.rs/_img/artikli/knjige/26/v/delfi_moc_sadasnjeg_trenutka_tol_ekart.jpg",
    polje: false,
};

let knjiga4 = {
    naziv: "Stranac",
    autor: "Albert Kami",
    putanja: "https://www.knjizare-vulkan.rs/files/watermark/files/thumbs/files/images/slike_proizvoda/thumbs_1200/thumbs_w/320228_1200_1200px_w.jpg",
    polje: true,
};

let knjiga5 = {
    naziv: "Sto godina samoće",
    autor: "G. G. Markes",
    putanja: "https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/228689_w.jpg",
    polje: false,
};

let knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];


let tabela = document.createElement("table");
document.body.appendChild(tabela);

for (let i = 0; i < knjige.length; i++) {
    let naziv = knjige[i].naziv;
    let autor = knjige[i].autor;
    let putanja = knjige[i].putanja;
    let slika = document.createElement("img")
    let att = document.createAttribute("src");
    att.value = putanja;
    slika.setAttributeNode(att);

    let tr = document.createElement("tr");
    let poljeSlika = document.createElement("td");
    let poljeTekst = document.createElement("td");

    let pAutor = document.createElement("p");
    let pKnjiga = document.createElement("p");

    pAutor.appendChild(document.createTextNode(autor));
    pKnjiga.appendChild(document.createTextNode(naziv));

    poljeTekst.appendChild(pAutor);
    poljeTekst.appendChild(pKnjiga);

    poljeSlika.appendChild(slika);


    tr.appendChild(poljeSlika);
    tr.appendChild(poljeTekst);

    tabela.appendChild(tr);

    if (knjige[i].polje == true) {
        pAutor.classList.add('procitana');
        pKnjiga.classList.add('procitana');
    }
    else {
        pAutor.classList.add('Nprocitana');
        pKnjiga.classList.add('Nprocitana');
    };
    if (i % 2 != 0) {
        poljeSlika.classList.add('prva');
        poljeTekst.classList.add('prva');
    }
    else {
        poljeSlika.classList.add('druga');
        poljeTekst.classList.add('druga');
    }
};