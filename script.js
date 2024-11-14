    function mostrarEnBloque() {
    var nav = document.getElementById("nav");
    nav.classList.add("nav-visible");
    var elboton = document.getElementById("elbotonabrir");
    
    if (nav.classList.contains("nav-visible")) {
        elboton.style.display = "none";
    }

}
function ocultar() {
    var nav = document.getElementById("nav");
    nav.classList.remove("nav-visible");
    var elboton = document.getElementById("elbotoncerrar");
    var elboton = document.getElementById("elbotonabrir");
    
    if (nav.classList.contains("nav-visible")) { //Obtuve un poco de ayuda de chatgpt para entender como hacer esta comprobación
        elboton.style.display = "none";
    } else {
            elboton.style.display = "flex";
    }
}


