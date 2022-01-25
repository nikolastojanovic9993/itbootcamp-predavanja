/*import { generateList, generateItem as generateListItem } from "./modules/list.js";

import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";

let list = generateList(document.body);
generateListItem(list, "slike/slika2.JPG");
generateListItem(list, "slike/slika3.JPG");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "slike/slika2.JPG");
generateTableItem(tr, "slike/slika3.JPG");
*/

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js" 
import * as Div from "./modules/div.js"

console.log(List);

let list = List.generateList(document.body);
List.generateItem(list, "slike/slika2.JPG");
List.generateItem(list, "slike/slika3.JPG");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "slike/slika2.JPG");
Table.generateItem(tr, "slike/slika3.JPG");

let div = Div.generateDiv(document.body);
Div.generateImgDiv(div, "slike/slika2.JPG");
Div.generateImgDiv(div, "slike/slika3.JPG");