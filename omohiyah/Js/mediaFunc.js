

// navbar 
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.left = "0";
}
function hideMenu(){
    navLinks.style.left = "-300px";
}

var targetElement = document.getElementById("myTarget"); 
if(targetElement){
    targetElement.addEventListener("click", hideMenu);
}