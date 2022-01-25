import generateImage from "./general.js";

function generateList (parent) {
    let UL = document.createElement("ul");
    UL.style.listStyleType = "none";
    UL.style.overflow = "hidden"; // zbog float left koji ce da ima li
    parent.appendChild(UL);
    return UL;
}
function generateItem (parent, src) {
   let li = document.createElement("li");
   li.style.float = "left";
   let img = generateImage(src);
   li.appendChild(img);
   parent.appendChild(li);
   return li;
}

export {generateList, generateItem};