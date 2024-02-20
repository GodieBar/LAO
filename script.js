document.addEventListener("DOMContentLoaded", function () {
    // Verifica la carga de la imagen y detiene la animación después de 4 segundos
    var stopAnimationImage = document.querySelector('.stop-animation');

    if (stopAnimationImage) {
        stopAnimationImage.onload = function () {
            setTimeout(function () {
                stopAnimationImage.style.animation = 'none'; // Elimina la animación
            }, 4000);
        };
    }

    // Esta función maneja la apertura y el cierre del menú desplegable
    function toggleMenu() {
        var dropdown = document.getElementById("myDropdown");

        if (dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "block";
            }
        }
    }

    // Esta función cierra el modal cuando se hace clic en el botón de cierre (X)
    function cerrarModal() {
        var modal = document.getElementById("myModal");
        if (modal) {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        var dropdown = document.getElementById("myDropdown");

        if (dropdown && !event.target.matches('.menu-toggle')) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    };

    // Agrega interactividad al icono del menú en dispositivos móviles
    var menuToggle = document.querySelector('.menu-toggle');
    var menuIcon = document.querySelector('.menu-icon');

    if (menuToggle && menuIcon) {
        menuToggle.addEventListener('click', function () {
            toggleMenu();
            this.classList.toggle('active');
        });

        menuIcon.addEventListener('mouseover', function () {
            this.style.transform = 'perspective(100px) rotateX(15deg)';
        });

        menuIcon.addEventListener('mouseout', function () {
            this.style.transform = 'none';
        });
    }

    console.log('DOM cargado correctamente en Android');

    // Obtén el cubo y las caras
    const cube = document.getElementById('cube');
    const faces = document.querySelectorAll('.face');
    let currentFace = 0; // Inicia en la primera cara

    // Función para cambiar la cara del cubo
    function changeFace(direction) {
        if (direction === 'left') {
            currentFace = (currentFace - 1 + faces.length) % faces.length;
        } else if (direction === 'right') {
            currentFace = (currentFace + 1) % faces.length;
        }

        faces.forEach((face, index) => {
            face.style.transform = `rotateY(${90 * (index - currentFace)}deg)`;
        });
    }

    // Asigna la función changeFace a los botones izquierdo y derecho
    document.getElementById('btnLeft').addEventListener('click', function () {
        changeFace('left');
    });

    document.getElementById('btnRight').addEventListener('click', function () {
        changeFace('right');
    });

    // Escucha clics en el cubo para cambiar la cara manualmente
    cube.addEventListener('click', function () {
        changeFace('right');
    });
});
    const cube = document.getElementById('cube');
    let currentFace = 0;

    function changeFace(direction) {
        if (direction === 'left') {
            currentFace = (currentFace - 1 + 4) % 4;
        } else if (direction === 'right') {
            currentFace = (currentFace + 1) % 4;
        }

        cube.style.transform = `rotateY(${90 * currentFace}deg)`;
    }

    document.getElementById('btnLeft').addEventListener('click', function () {
        changeFace('left');
    });

    document.getElementById('btnRight').addEventListener('click', function () {
        changeFace('right');
    });
    // Obtén el cubo y las caras
const cube = document.getElementById('cube');
const faces = document.querySelectorAll('.face');
let currentFace = 0; // Inicia en la primera cara

// Función para cambiar la cara del cubo
function changeFace(direction) {
    if (direction === 'left') {
        currentFace = (currentFace - 1 + faces.length) % faces.length;
    } else if (direction === 'right') {
        currentFace = (currentFace + 1) % faces.length;
    }

    faces.forEach((face, index) => {
        face.style.transform = `rotateY(${90 * (index - currentFace)}deg)`;
    });
}

// Asigna la función changeFace a los botones izquierdo y derecho
document.getElementById('btnLeft').addEventListener('click', function () {
    changeFace('left');
});

document.getElementById('btnRight').addEventListener('click', function () {
    changeFace('right');
});

// Escucha clics en el cubo para cambiar la cara manualmente
cube.addEventListener('click', function () {
    changeFace('right');
});
