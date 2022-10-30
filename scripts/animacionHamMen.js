document.querySelector(".MenuHamburguesa").addEventListener("click", animateBars);

var linea1 = document.querySelector(".linea1_MenuHamburguesa");
var linea2 = document.querySelector(".linea2_MenuHamburguesa");
var linea3 = document.querySelector(".linea3_MenuHamburguesa");
var opciones = document.querySelector(".nav-2")

function animateBars(){
    linea1.classList.toggle("activelinea1_MenuHamburguesa");
    linea2.classList.toggle("activelinea2_MenuHamburguesa");
    linea3.classList.toggle("activelinea3_MenuHamburguesa");
    opciones.classList.toggle("activenav-2")
}