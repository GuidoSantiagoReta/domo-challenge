const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-links');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        // Toggle la clase 'nav-active' para abrir/cerrar el menú
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        
        // Controlar el scroll cuando el menú está abierto
        if (nav.classList.contains('nav-active')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    // Controlar visibilidad del menú según el estado de la clase nav-active
    nav.addEventListener('transitionend', () => {
        if (!nav.classList.contains('nav-active')) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });
}

navSlide();