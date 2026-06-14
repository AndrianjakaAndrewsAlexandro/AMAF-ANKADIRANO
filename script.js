
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
        }
        function desactive_menu_cache(){
            menu_cache.classList.remove("active");
            overlay.classList.remove("active");
        }

        hamburger.addEventListener("click", active_menu_cache);
        close_menu.addEventListener("click", desactive_menu_cache);
        overlay.addEventListener("click", desactive_menu_cache);

