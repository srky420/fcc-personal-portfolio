document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', (e) => {
        // Get height navbar
        const navHeight = navbar.getBoundingClientRect().height;
        const scrollHeight = window.scrollY;

        // Switch navbar bg color
        if (scrollHeight > navHeight) {
            navbar.classList.remove('navbar-transparent');
        }
        else {
            navbar.classList.add('navbar-transparent');
        }
 
    })
});