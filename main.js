const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-links');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        // Toggle burger animation
        burger.classList.toggle('toggle');

        if (nav.classList.contains('nav-active')) {
            // Si el menú está abierto, agregar la animación de salida
            nav.classList.remove('animate__fadeInDown'); // Quitar la animación de entrada
            nav.classList.add('animate__animated', 'animate__fadeOutUp'); // Agregar animación de salida
        } else {
            // Si el menú está cerrado, agregar la animación de entrada y mostrar el menú
            nav.classList.add('nav-active', 'animate__animated', 'animate__fadeInDown');
        }

        // Toggle scroll blocking
        body.classList.toggle('no-scroll');
    });

    // Escuchar el evento de finalización de la animación
    nav.addEventListener('animationend', () => {
        // Si la animación de salida termina, sacar la clase nav-active
        if (nav.classList.contains('animate__fadeOutUp')) {
            nav.classList.remove('nav-active', 'animate__fadeOutUp');
        }
    });
}

navSlide();
