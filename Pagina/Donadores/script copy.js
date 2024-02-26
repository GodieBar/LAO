// Función para alternar la visibilidad del menú desplegable
function toggleMenu() {
    var dropdown = document.getElementById("myDropdown");
    // Cambia la clase 'active' en el botón del menú de hamburguesa
    var menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active');

    // Alternar la visualización del menú desplegable
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Evento que se dispara cuando el usuario hace clic fuera del menú desplegable
window.onclick = function(event) {
    var dropdown = document.getElementById("myDropdown");
    if (!event.target.matches('.menu-toggle')) {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
            document.querySelector('.menu-toggle').classList.remove('active');
        }
    }
}

// Asegurarse de que el JavaScript no se ejecute hasta que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Puede poner aquí más código que debe ejecutarse una vez que el DOM esté completamente cargado
});
