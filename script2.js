//alert("Allez");

// Recuperer le paragraphe dans html
//const para_bible = document.getElementById("bible_paragraphe");
//para_bible.style.display = "none";

// Importation
const {lire} = require("./bible");
const fs = require("fs");

// Exporter le chapitre su jour
console.log(lire());

// Construcrion du lien du texte de bible
const lien = "./Bible/" + `${lire()}.txt`;
console.log(lien);
        
// Extraction du texte du chapitre à lire
const toko_content = fs.readFileSync(lien, "utf-8");
console.log(typeof toko_content);

