        $(document).ready(function(){
            $(".my-car").slick({
                autoplay: true,
                autoplaySpeed: 3000,   /* Increased to 3s for better viewing */
                speed: 500,           /* Transition takes 1 second */
                dots: false,
                arrows: false,
                infinite: true,
                fade: true,            /* <--- THE KEY FIX: Fades instead of slides */
                cssEase: 'linear',     /* Makes the fade silky smooth */
                pauseOnHover: false
            })
        });
        
        function togglePinkMode() {
            // Toggle the class on the body
            document.body.classList.toggle("pink-mode");
        }

        /* ___Toggle Menu Script___ */
        function toggleMenu() {
            const menu = document.getElementById("navMenu");
            const icon = document.querySelector(".hamburger i");
            menu.classList.toggle("open");
            
            if(menu.classList.contains("open")){
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }