        
        // Smooth scroll pour tous les liens de navigation
        document.querySelectorAll('a.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Smooth scroll pour le bouton "Nos Rendez-vous"
        document.querySelectorAll('a.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Le menu hamburger et ses fonctions
        const hamburger = document.getElementById("hamburger");
        const menu_cache = document.getElementById("menu_cache");
        const close_menu = document.getElementById("close_menu");
        const overlay = document.getElementById("overlay");

        function active_menu_cache(){
            menu_cache.classList.add("active");
            overlay.classList.add("active");
            hamburger.classList.add("desactive")
        }
        function desactive_menu_cache(){
            menu_cache.classList.remove("active");
            overlay.classList.remove("active");
            hamburger.classList.remove("desactive")
        }

        hamburger.addEventListener("click", active_menu_cache);
        close_menu.addEventListener("click", desactive_menu_cache);
        overlay.addEventListener("click", desactive_menu_cache);

        // hover de navigation
        const nav_hover = document.querySelectorAll(".nav_cache_a");

        nav_hover.forEach(lien => {
            lien.addEventListener("mouseenter", () => {
                lien.classList.add("active");
            });
            lien.addEventListener("mouseleave", () => {
                lien.classList.remove("active");
            });
        });

        // Bouton pour l'installation de l'appli web
        let deferredPrompt = null;

        // On écoute l'événement SANS appeler preventDefault()
        // → le mini-bar de Chrome s'affiche normalement
        window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;

        const btn = document.getElementById('installer_apk');
        if (btn) {
            btn.style.display = 'block'; // ou 'inline-block'
        }
        });

        // Clic sur ton bouton → lance aussi l'installation
        document.getElementById('installer_apk')?.addEventListener('click', async () => {
        if (!deferredPrompt) {
            alert("L'installation n'est pas disponible pour le moment.");
            return;
        }

        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('Application installée');
        } else {
            console.log('Installation refusée');
        }

        deferredPrompt = null;

        const btn = document.getElementById('installer_apk');
        if (btn) btn.style.display = 'none';
        });

        // Cache le bouton si l'appli est déjà installée
        window.addEventListener('appinstalled', () => {
        const btn = document.getElementById('installer_apk');
        if (btn) btn.style.display = 'none';
        deferredPrompt = null;
        });


        // Bouton de fermeture du div d'installation
        const close_div_installer = document.getElementById("close_div_installer");
        const div_installer_appli = document.getElementById("div_installer_appli");
        close_div_installer.addEventListener("click", () => {
            div_installer_appli.style.display = "none";
        })

        // Affichage du chapitre de la bible à lire
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

const div_lire_bible = document.getElementById("div_lire_bible");
div_lire_bible.textContent += lire();
        

        