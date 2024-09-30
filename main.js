const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar-links');


    burger.addEventListener('click', () => {
        // Toggle nav visibility
        nav.classList.toggle('nav-active');

        // Burger animation
        burger.classList.toggle('toggle');

 
    });
}

navSlide();