const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-links');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        // Toggle nav visibility
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle');

        // Toggle scroll blocking
        body.classList.toggle('no-scroll');
    });


}

navSlide();