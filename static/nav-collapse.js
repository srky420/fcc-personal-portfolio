document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Toggle nav
    document.querySelector('.burger').addEventListener('click', (e) => {
        navLinks.classList.toggle('nav-show');
    });
    // Toggle nav on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.classList.toggle('nav-show');
        });
    });
});