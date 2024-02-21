let currentRotation = 0;

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
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
