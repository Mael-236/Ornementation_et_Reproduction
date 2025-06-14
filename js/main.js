// Combined slider and gallery functionality
            const slides = document.querySelectorAll(".slide");
            let slideIndex = 0;
            let intervalId = null;

            document.addEventListener("DOMContentLoaded", function() {
                initializeSlider();
                setupImageGallery();
            });

            // SLIDER FUNCTIONALITY
            function initializeSlider(){
                if(slides.length > 0) {
                    slides[slideIndex].classList.add("displaySlide");
                    // intervalId = setInterval(nextSlide, 5000); // Uncomment for auto-slide
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
                clearInterval(intervalId);
                slideIndex--;
                showSlide(slideIndex);
            }

            function nextSlide(){
                slideIndex++;
                showSlide(slideIndex);
            }

// Mobile: click to show button, then click button to open
            item.addEventListener('click', (e) => {
                e.preventDefault();

// If already active, open fullscreen
                if (item.classList.contains('active')) {
                    if (e.target === zoomBtn) {
                        openFullscreen();
                        return;
                    }
                }

// Remove active from others and add to this one
                imageItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                item.classList.add('active');
            });

            const container = document.querySelector('.ba_container');
                document.querySelector('.ba_slider').addEventListener('input', (e) => {
                container.style.setProperty('--position', `${e.target.value}%`);
            })