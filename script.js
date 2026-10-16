        
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

        






        