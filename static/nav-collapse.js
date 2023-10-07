document.addEventListener('DOMContentLoaded', () => {
    // Toggle nav
    document.querySelector('.burger').addEventListener('click', (e) => {
        document.querySelector('.nav-links').classList.toggle('nav-show');
    });
    // Toggle nav on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelector('.nav-links').classList.toggle('nav-show');
        });
    });
});