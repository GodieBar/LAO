document.addEventListener("DOMContentLoaded", function () {
    var stopAnimationImage = document.querySelector('.stop-animation');

    stopAnimationImage.onload = function () {
        setTimeout(function () {
            stopAnimationImage.style.animation = 'none'; // Elimina la animación
        }, 4000);
    };

    // Esta función maneja la apertura y el cierre del menú desplegable
    function toggleMenu() {
        var dropdown = document.getElementById("myDropdown");

        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }

    // Esta función cierra el modal cuando se hace clic en el botón de cierre (X)
    function cerrarModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        var dropdown = document.getElementById("myDropdown");

        if (!event.target.matches('.menu-toggle')) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    };
});
document.addEventListener("DOMContentLoaded", function () {
    var stopAnimationImage = document.querySelector('.stop-animation');

    stopAnimationImage.onload = function () {
        setTimeout(function () {
            stopAnimationImage.style.animation = 'none'; // Elimina la animación
        }, 4000);
    };

    // Resto del código...
});
