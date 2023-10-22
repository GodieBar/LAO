window.onload = function () {
    alert("Prohibido difundir este link");
}

// Función para abrir y cerrar el menú de hamburguesa
function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú cuando se hace clic en un enlace
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            toggleMenu(); // Cierra el menú
        });
    });
});
