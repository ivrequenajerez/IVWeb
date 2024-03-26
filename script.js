document.addEventListener('DOMContentLoaded', function () {
    var menuCheckbox = document.querySelector('.menu');
    var contenedorMenu = document.getElementById('contenedorMenu');

    menuCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Cuando el menú está marcado (abierto), añade la clase para mostrar el contenedor con animación
            contenedorMenu.classList.add('mostrar');
        } else {
            // Cuando el menú está desmarcado (cerrado), elimina la clase para ocultar el contenedor con animación
            contenedorMenu.classList.remove('mostrar');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var botonCTA = document.querySelector('.boton-cta');
    var popup = document.getElementById('popup');
    var popupCerrar = document.getElementById('popup-cerrar');

    botonCTA.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    popupCerrar.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var enlaceCTA = document.getElementById('enlace-cta');
    var popup = document.getElementById('popup');
    var popupCerrar = document.getElementById('popup-cerrar');

    enlaceCTA.addEventListener('click', function (event) {
        event.preventDefault(); 
        popup.style.display = 'block';
    });

    popupCerrar.addEventListener('click', function () {
        popup.style.display = 'none';
    });
});