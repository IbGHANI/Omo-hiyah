

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



document.addEventListener('DOMContentLoaded', function () {


    ScrollReveal().reveal('.logoP, .logoT, .showMenu, .headings' , { 
        duration: 1000,
        delay: 270,
        easing: 'ease-in-out',
        origin: 'top',
        distance: '60px',
        opacity: 0,
        scale: 0.8
    });


    ScrollReveal().reveal('.header-nav, .contact, .container, .content, .readmore, .box, .boxs, .text  ' , { 
        duration: 1000,
        delay: 250,
        easing: 'ease-in-out',
        origin: 'bottom',
        distance: '60px',
        opacity: 0,
        scale: 0.8
    });

    ScrollReveal().reveal('.pic, .slide-container1, .toTeach, .media' , { 
        duration: 1000,
        delay: 250,
        easing: 'ease-in-out',
        origin: 'left',
        distance: '60px',
        opacity: 0,
        scale: 0.8
    });

    ScrollReveal().reveal('.gallery-item' , { 
        duration: 1000,
        delay: 250,
        easing: 'ease-in-out',
        origin: 'right',
        distance: '60px',
        opacity: 0,
        scale: 0.8
    });

});