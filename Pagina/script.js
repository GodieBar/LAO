// Función para abrir y cerrar el menú de hamburguesa
function toggleMenu(event) {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Comprueba si el menú está abierto
    const isOpen = mainNav.classList.contains('active');

    if (isOpen) {
        // Obtén las coordenadas del botón de hamburguesa
        const rect = menuToggle.getBoundingClientRect();

        // Posiciona el menú desplegable al lado del botón de hamburguesa
        mainNav.style.left = rect.right + 'px';
        mainNav.style.top = rect.top + 'px';
    }
}

// Obtener el botón de hamburguesa
const menuToggle = document.querySelector('.menu-toggle');

// Agregar un evento clic al botón de hamburguesa
menuToggle.addEventListener('click', (event) => {
    toggleMenu(event); // Abre o cierra el menú
});

// Cerrar el menú cuando se hace clic en cualquier parte del documento
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !document.querySelector('.main-nav').contains(event.target)) {
        document.querySelector('.main-nav').classList.remove('active');
        menuToggle.classList.remove('active');
    }
});
