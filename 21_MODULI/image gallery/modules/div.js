import generateImage from "./general.js";

function generateDiv (parent) {
let div = document.createElement("div");
div.style.overflow = "hidden";
parent.appendChild(div);
return div;
}

function generateImgDiv (parent, src) {
let img = generateImage(src);
let div = document.createElement("div");
div.style.float = "right";
div.appendChild(img);
parent.appendChild(div);
return div;
}

export {generateDiv, generateImgDiv};
