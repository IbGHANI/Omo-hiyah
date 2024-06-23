

document.addEventListener('DOMContentLoaded', function() {
    let mobileNav = document.querySelector(".mobile-navigation");
    let mobileNavButton = document.querySelector(".mobile-menu");
    
    // Function to toggle mobile navigation
    function toggleMobileNav() {
        mobileNav.classList.toggle("active");

        // Toggle icon between bars and xmark
        if (mobileNavButton.classList.contains("fa-bars")) {
            mobileNavButton.classList.remove("fa-bars");
            mobileNavButton.classList.add("fa-xmark");
            mobileNavButton.classList.add("fa-flip");
            setTimeout(() => {
                mobileNavButton.classList.remove("fa-flip");
            }, 400);
        } else if (mobileNavButton.classList.contains("fa-xmark")) {
            mobileNavButton.classList.remove("fa-xmark");
            mobileNavButton.classList.add("fa-bars");
            mobileNavButton.classList.add("fa-flip");
            setTimeout(() => {
                mobileNavButton.classList.remove("fa-flip");
            }, 400);
        }
    }

    // Event listener for mobile menu button
    mobileNavButton.addEventListener("click", toggleMobileNav);

    // Event listener for navigation links to close the menu
    let navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            toggleMobileNav();
        });
    });

    // Event listener for window resize to close menu if window width > 800px
    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            mobileNav.classList.remove("active");
            if (mobileNavButton.classList.contains("fa-xmark")) {
                mobileNavButton.classList.remove("fa-xmark");
                mobileNavButton.classList.add("fa-bars");
            }
        }
    });
});

       
        
    const header = document.getElementById("landing-page");

    window.onscroll = function(){
        var top = window.scrollY;
        console.log(top);
        if(top >= 568){
            header.classList.add('active')
        }else{
            header.classList.remove('active');
        }
    };
