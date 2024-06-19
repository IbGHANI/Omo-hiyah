


var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.left = "0";
    navLinks.classList.add("active"); // Add the "active" class to handle the display
}

function hideMenu() {
    navLinks.style.left = "-250px";
    navLinks.classList.remove("active"); // Remove the "active" class
}

var targetElement = document.getElementById("myTarget");
        if (targetElement) {
            targetElement.addEventListener("click", hideMenu);
        }



        // document.addEventListener('click', function(event) {
        //         var isClickInsideNav = navLinks.contains(event.target);
        //         var isClickOnShowMenuButton = document.getElementById("showMenu").contains(event.target);
                        
        //             if (!isClickInsideNav && !isClickOnShowMenuButton) {
        //                 hideMenu();
        //             }
        //         });  

// var navLinks = document.getElementById("navLinks");

// function showMenu() {
//     navLinks.style.left = "0";
//     navLinks.classList.add("active"); // Add the "active" class to handle the display
// }

// function hideMenu() {
//     navLinks.style.left = "-300px";
//     navLinks.classList.remove("active"); // Remove the "active" class
// }


// document.addEventListener('click', function(event) {
//     var isClickInsideNav = navLinks.contains(event.target);
//     var isClickOnShowMenuButton = document.getElementById("showMenu").contains(event.target);
            
//         if (!isClickInsideNav && !isClickOnShowMenuButton) {
//             hideMenu();
//         }
//     });  


// var targetElement = document.getElementById("yourTarget");
//         if (targetElement) {
//             targetElement.addEventListener("click", hideMenu);
//         }
        
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
