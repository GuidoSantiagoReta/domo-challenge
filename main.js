const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-links');
    const body = document.querySelector('body');
    
    burger.addEventListener('click', () => {
        // Toggle nav visibility
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle');

         // Disable scroll when menu is active
    if (navbarLinks.classList.contains('nav-active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
    });
}

navSlide();