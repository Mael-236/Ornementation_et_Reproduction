// Slider functionality
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function initializeSlider(){
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
// Gallery functionality
function setupImageGallery() {
    const imageItems = document.querySelectorAll('.image-item');
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenImg = document.getElementById('fullscreenImage');
    const closeBtn = document.getElementById('closeButton');

    imageItems.forEach(item => {
        const img = item.querySelector('.gallery');
        const zoomBtn = item.querySelector('.zoom-btn');

        // Fonction pour ouvrir l'image en plein écran
        function openFullscreen() {
            fullscreenImg.src = img.src;
            fullscreenImg.alt = img.alt;
            overlay.style.display = 'flex';
            setTimeout(() => {
                overlay.classList.add('show');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        // Desktop: effet au hover
        if (window.matchMedia('(hover: hover)').matches) {
            // Sur desktop, le bouton zoom déclenche l'ouverture
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openFullscreen();
            });
            
            // Mobile: effet au click
            item.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Sinon, retirer active des autres et l'ajouter à celui-ci
                imageItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                item.classList.add('active');
                
            });

            // Le bouton zoom ouvre directement
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openFullscreen();
            });
        }
    });

    // Fermeture du fullscreen
    function closeFullscreen() {
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeFullscreen);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeFullscreen();
        }
    });

    // Fermeture avec Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            closeFullscreen();
        }
    });

    // Fermer les éléments actifs en cliquant ailleurs (mobile)
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.image-item')) {
            imageItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    setupImageGallery();
});