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
});
// Ajusta la altura y el ancho del cubo
const cube = document.getElementById('cube');
cube.style.width = '150px'; // Cambia esto según tus necesidades
cube.style.height = '150px'; // Cambia esto según tus necesidades
