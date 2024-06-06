

// navbar 
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.classList.add("show-menu");
    navLinks.style.left = "0";
}

function hideMenu() {
    navLinks.classList.remove("show-menu");
    navLinks.style.left = "-300px";
}

document.addEventListener('click', function(event) {
    var isClickInsideNav = navLinks.contains(event.target);
    var isClickOnShowMenuButton = document.getElementById("showMenu").contains(event.target);

    if (!isClickInsideNav && !isClickOnShowMenuButton) {
        hideMenu();
    }
});

var hideMenuButton = document.getElementById("hideMenu");
if (hideMenuButton) {
    hideMenuButton.addEventListener("click", hideMenu);
}

document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');
 
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
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
