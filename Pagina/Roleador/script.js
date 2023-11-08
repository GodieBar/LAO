// Función para abrir un modal específico
function abrirModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Función mejorada para cerrar un modal específico
function cerrarModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Añadir la lógica para cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
