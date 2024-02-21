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
            dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
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
            dropdown.style.display = "none";
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
    let currentFace = 0; // Inicia en la primera cara
    let animation;

    // Función para cambiar la cara del cubo
    function changeFace(direction) {
        if (!animation) {
            if (direction === 'left') {
                currentFace = (currentFace - 1 + 4) % 4;
            } else if (direction === 'right') {
                currentFace = (currentFace + 1) % 4;
            }

            cube.style.transform = `rotateY(${90 * currentFace}deg)`;

            // Restablece la variable de animación
            animation = null;
        }
    }

    // Asigna la función changeFace a los botones izquierdo y derecho
    document.getElementById('btnLeft').addEventListener('click', function () {
        changeFace('left');
    });

    document.getElementById('btnRight').addEventListener('click', function () {
        changeFace('right');
    });

    // Agregar la lógica para detener/reanudar la animación del cubo
    document.getElementById('stopCube').addEventListener('click', function () {
        if (animation) {
            animation.cancel();
            animation = null;
        } else {
            // Inicia la animación solo si no está en pausa
            if (cube.style.animationPlayState !== 'paused') {
                animation = cube.animate(
                    [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(360deg)' }],
                    {
                        duration: 5000,
                        iterations: Infinity,
                        easing: 'linear'
                    }
                );
            }
        }
    });
});
