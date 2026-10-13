// Ce programme permet de connaitre le livre et chapitre à lire aujourd'hui

// la fonction de ce code
function lire(){
    liste1 = ["Genesisy", "Eksodosy", "Levitikosy", "Nomery", "Deotornomia", "Josoa", "Mpitsara", "Rota", 
    "Samoela I", "Samoela II", "Mpanjaka I", "Mpanjaka II", "Tantara I", "Tantara II", "Ezra", "Nehemia", 
    "Estera", "Joba", "Salamo", "Ohabolana", "Mpitoriteny", "Tonon-kiran'i Solomona", "Isaia", "Jeremia", 
    "Fitomaniana", "Ezekiela", "Daniela", "Hosea", "Joela", "Amosa", "Obadia", "Jona", "Mika", "Nahoma", 
    "Habakoka", "Zefania", "Hagay", "Zakaria", "Malakia", "Matio", "Marka", "Lioka", "Jaona", "Asan'Apostoly", 
    "Romanina", "I Koritianina", "I Koritianina", "Galatianina", "Efesianina", "Filipianina", "Kolosianina", 
    "I Tesalonianina", "II Tesalonianina", "I Timoty", "II Timoty", "Titosy", "Filemona", "Hebreo", "Jakoba", 
    "I Petera", "II Petera", "I Jaona", "II Jaona", "III Jaona", "Joda", "Apokalipsy"

    ];
    liste2 = [50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 
        5, 48, 12, 14, 4, 9, 1, 4, 7, 3, 3, 3, 2, 14, 3, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 
        4, 3, 1, 15, 5, 5, 3, 5, 1, 1, 1, 22
    ];

    date_ms = Date.now();
    date_s = date_ms / 1000;
    date_min = date_s / 60;
    date_h = date_min / 60;
    date_j = parseInt(date_h / 24); // Nombre de jour écoulé depuis 1970

    date_init = 20672; // Date initial pour chaque livre

    livre_init = 18; // l'index du livre
    chap_init = 21; // le chapitre initail d'un livre

    chap = date_j - date_init; // Chapitre à lire aujourd'hui


    if (chap > liste2[livre_init]){
        compteur = chap - chap_init; 
        date_init += compteur;
        chap_init = 0;
        livre_init += 1
    }

    if (livre_init > 66){
        livre_init = 0;
    }

    let a_lire = liste1[livre_init] + " " + chap;

    return a_lire
}

//console.log(lire());

module.exports ={
    lire
}



