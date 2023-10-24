// Esta función se encarga de abrir y cerrar el menú desplegable
function toggleMenu() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Esta función se encarga de cerrar el modal
function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Esta función se ejecuta cuando la página está lista
document.addEventListener("DOMContentLoaded", function () {
    // Agregar cualquier lógica adicional que necesites aquí.
});
