// Banner Section Logic
document.addEventListener("DOMContentLoaded", () => {
    const bannerImages = document.querySelectorAll(".banner img");
    const bannerTitle = document.querySelector(".banner-title");
    let currentIndex = 0;

    function showBannerImage(index) {
        // Remove the 'active' class from all images
        bannerImages.forEach((img, i) => {
            if (i === index) {
                img.classList.add("active");
            } else {
                img.classList.remove("active");
            }
        });
    }

    function startBannerSlideshow() {
        showBannerImage(currentIndex);
        currentIndex = (currentIndex + 1) % bannerImages.length;
    }

    // Initialize and start the slideshow
    showBannerImage(currentIndex);
    setInterval(() => {
        startBannerSlideshow();
    }, 3000); // Switch image every 3 seconds
});


// Slideshow Scrolling Logic
document.addEventListener("DOMContentLoaded", () => {
    const slideshow = document.querySelector(".slideshow");
    const slideshowTrack = document.querySelector(".slideshow-track");
    let scrollPosition = 0;
    let animationFrame;

    // Clone all images to create a seamless loop
    const children = Array.from(slideshowTrack.children);
    children.forEach((child) => {
        const clone = child.cloneNode(true);
        slideshowTrack.appendChild(clone);
    });

    // Function to move the slideshow
    function moveSlideshow() {
        scrollPosition += 1; // Adjust for scrolling speed
        if (scrollPosition >= slideshowTrack.scrollWidth / 2) {
            scrollPosition = 0; // Reset position after half the track is scrolled
        }
        slideshowTrack.style.transform = `translateX(${-scrollPosition}px)`;
        animationFrame = requestAnimationFrame(moveSlideshow);
    }

    // Observer to pause/resume slideshow
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animationFrame = requestAnimationFrame(moveSlideshow);
                } else {
                    cancelAnimationFrame(animationFrame);
                }
            });
        },
        { threshold: 0.1 } // Adjust threshold for visibility triggering
    );

    observer.observe(slideshow); // Observe the slideshow element
});

// Video Play/Pause Based on Scroll Visibility
document.addEventListener("DOMContentLoaded", function () {
    const videoSection = document.querySelector(".video-tour");
    const projectVideo = document.getElementById("project-video");

    if (!videoSection || !projectVideo) {
        console.warn("Video section or video element not found.");
        return;
    }

    window.addEventListener("scroll", function () {
        const sectionTop = videoSection.getBoundingClientRect().top;
        const sectionBottom = videoSection.getBoundingClientRect().bottom;

        if (sectionTop < window.innerHeight && sectionBottom > 0) {
            projectVideo.play();
        } else {
            projectVideo.pause();
        }
    });
});

// Logo Redirection Logic
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById('logo');

    if (!logo) {
        console.warn("Logo element not found.");
        return;
    }

    logo.addEventListener('click', function () {
        window.location.href = '/'; // Replace with the actual home URL
    });
});
