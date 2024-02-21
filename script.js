let currentRotation = 0;

function toggleMenu() {
    // Agrega tu lógica para mostrar/ocultar el menú aquí
}

function changeFace(direction) {
    const cube = document.getElementById('cube');

    if (direction === 'left') {
        currentRotation -= 90;
    } else if (direction === 'right') {
        currentRotation += 90;
    }

    cube.style.transform = `rotateY(${currentRotation}deg)`;
}
function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
