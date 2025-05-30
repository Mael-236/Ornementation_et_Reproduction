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

            // GALLERY FUNCTIONALITY
            function setupImageGallery() {
                console.log('Setting up image gallery...');
                
                const imageItems = document.querySelectorAll('.image-item');
                const overlay = document.getElementById('fullscreenOverlay');
                const fullscreenImg = document.getElementById('fullscreenImage');
                const closeBtn = document.getElementById('closeButton');

                console.log('Found image items:', imageItems.length);

                if (!overlay || !fullscreenImg) {
                    console.error('Fullscreen overlay elements not found');
                    return;
                }

                imageItems.forEach((item, index) => {
                    const img = item.querySelector('img');
                    const zoomBtn = item.querySelector('.zoom-btn');
                    
                    console.log(`Item ${index}:`, {
                        img: img,
                        imgSrc: img ? img.src : 'not found',
                        zoomBtn: zoomBtn
                    });

                    if (!img || !zoomBtn) {
                        console.error(`Missing elements in item ${index}`);
                        return;
                    }

                    // Function to open fullscreen
                    function openFullscreen() {
                        console.log('Opening fullscreen for:', img.src);
                        
                        fullscreenImg.src = img.src;
                        fullscreenImg.alt = img.alt || '';
                        
                        overlay.style.display = 'flex';
                        console.log('Overlay display set to flex');
                        
                        setTimeout(() => {
                            overlay.classList.add('show');
                            console.log('Show class added to overlay');
                        }, 10);
                        
                        document.body.style.overflow = 'hidden';
                    }

                    // Desktop: hover effects with click on zoom button
                    if (window.matchMedia('(hover: hover)').matches) {
                        zoomBtn.addEventListener('click', (e) => {
                            console.log('Zoom button clicked (desktop) for item:', index);
                            e.stopPropagation();
                            e.preventDefault();
                            openFullscreen();
                        });
                    }

                    else {
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

                        // Zoom button click on mobile
                        zoomBtn.addEventListener('click', (e) => {
                            console.log('Zoom button clicked (mobile) for item:', index);
                            e.stopPropagation();
                            e.preventDefault();
                            openFullscreen();
                        });
                    }
                });

                // Close functionality
                function closeFullscreen() {
                    console.log('Closing fullscreen');
                    overlay.classList.remove('show');
                    setTimeout(() => {
                        overlay.style.display = 'none';
                    }, 300);
                    document.body.style.overflow = 'auto';
                }

                // Close button
                if (closeBtn) {
                    closeBtn.addEventListener('click', (e) => {
                        console.log('Close button clicked');
                        e.preventDefault();
                        e.stopPropagation();
                        closeFullscreen();
                    });
                }

                // Click outside overlay to close
                overlay.addEventListener('click', function(e) {
                    if (e.target === overlay) {
                        console.log('Overlay background clicked');
                        closeFullscreen();
                    }
                });

                // Close with Escape key
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && overlay.classList.contains('show')) {
                        console.log('Escape key pressed');
                        closeFullscreen();
                    }
                });

                // Close active mobile states when clicking elsewhere
                document.addEventListener('click', function(e) {
                    if (!e.target.closest('.image-item')) {
                        imageItems.forEach(item => {
                            item.classList.remove('active');
                        });
                    }
                });
            }
            const container = document.querySelector('.ba_container');
                document.querySelector('.ba_slider').addEventListener('input', (e) => {
                container.style.setProperty('--position', `${e.target.value}%`);
            })