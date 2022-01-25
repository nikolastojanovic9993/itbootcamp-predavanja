function generateImage(src) {
    let slika = document.createElement("img")
    let att = document.createAttribute("src");
    att.value = src;
    slika.setAttributeNode(att);
    slika.style.width = "200px";
    return slika;
    
}

export default generateImage;