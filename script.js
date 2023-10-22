// script.js
window.onload = function () {
    alert("Prohibido difundir este link");
}
// Obtener elementos del menú y el botón de hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav ul");
// Agregar un evento clic al botón de hamburguesa
menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
});// Función para abrir y cerrar el modal
function cerrarModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
// Función para mostrar el menú desplegable en pantallas pequeñas
document.querySelector('.menu-toggle').addEventListener('click', function () {
    var mainNav = document.querySelector('.main-nav ul');
    mainNav.classList.toggle('active');
});
// Cerrar el menú cuando se hace clic en un enlace
const navLinks = document.querySelectorAll(".main-nav ul li a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
    });
});
// Agrega un evento de clic al botón de hamburguesa para alternar el menú
menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

