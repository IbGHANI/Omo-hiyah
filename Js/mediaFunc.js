


var navLinks = document.getElementById("navLinks");
    
    function showMenu(){
        navLinks.style.left = "0";
    }
    function hideMenu(){
        navLinks.style.left = "-300px";
    }

    var targetElement = document.getElementById("myTarget");
    if (targetElement) {
        targetElement.addEventListener("click", hideMenu);
    }












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
