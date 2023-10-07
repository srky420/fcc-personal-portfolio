var TOGGLE = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#see-more-btn').addEventListener('click', (e) => {
        document.querySelectorAll('.project-hidden').forEach(project => {
            project.classList.toggle('project-show');
            
            // Toggle show more/less link text
            if (TOGGLE === 0) {
                e.currentTarget.innerHTML = `Show Less <span class="arrow-backward">&lt</span>`;
                e.currentTarget.removeAttribute('href');
                TOGGLE = 1;
            }
            else {
                e.currentTarget.innerHTML = 'Show More <span class="arrow-forward">&gt</span>';
                e.currentTarget.setAttribute('href', '#projects');
                TOGGLE = 0;
            }
        });
    });
});