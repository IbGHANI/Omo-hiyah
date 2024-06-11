

document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 1;
    const totalSlides = 7;

    function showSlide(n) {
        // Hide all slides
        for (let i = 1; i <= totalSlides; i++) {
            document.querySelector(`.slide-container${i}`).classList.remove("active");
        }
        // Show the specified slide
        document.querySelector(`.slide-container${n}`).classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide % totalSlides) + 1;
        showSlide(currentSlide);
    }

    // Change slide every 5 seconds (adjust as needed)
    setInterval(nextSlide, 2010);
});

