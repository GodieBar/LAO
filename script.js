// Esta función maneja la apertura y el cierre del menú desplegable
function toggleMenu() {
    // Seleccionamos el menú desplegable por su ID
    var dropdown = document.getElementById("myDropdown");

    // Verificamos si el menú ya está visible
    if (dropdown.style.display === "block") {
        // Si está visible, lo ocultamos
        dropdown.style.display = "none";
    } else {
        // Si está oculto, lo mostramos
        dropdown.style.display = "block";
    }
}

// Esta función cierra el modal cuando se hace clic en el botón de cierre (X)
function cerrarModal() {
    // Seleccionamos el modal por su ID
    var modal = document.getElementById("myModal");
    
    // Establecemos la propiedad de visualización en 'none' para ocultarlo
    modal.style.display = "none";
}

// Este evento se dispara cuando se hace clic en cualquier lugar fuera del menú desplegable
window.onclick = function(event) {
    // Obtenemos el menú desplegable por su ID
    var dropdown = document.getElementById("myDropdown");

    // Comprobamos si se hace clic fuera del menú desplegable
    if (!event.target.matches('.menu-toggle')) {
        // Si el menú está abierto y se hace clic fuera de él, lo cerramos
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}

// Esperamos a que el contenido de la página se cargue completamente
document.addEventListener("DOMContentLoaded", function () {
    // Aquí puedes añadir cualquier script que quieras ejecutar después de que el DOM esté completamente cargado
});
