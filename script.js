// Función para abrir y cerrar el menú de hamburguesa
function toggleMenu(event) {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Obtén las coordenadas del clic
    const x = event.clientX;
    const y = event.clientY;

    // Ajusta la posición del menú desplegable
    mainNav.style.left = x + 'px';
    mainNav.style.top = y + 'px';
}

// Obtener el botón de hamburguesa
const menuToggle = document.querySelector('.menu-toggle');

// Agregar un evento clic al botón de hamburguesa
menuToggle.addEventListener('click', (event) => {
    toggleMenu(event); // Abre el menú
});

// Cerrar el menú cuando se hace clic en cualquier parte del documento
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});
