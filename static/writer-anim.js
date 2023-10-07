var STATE = 0;

document.addEventListener('DOMContentLoaded', () => {
    setInterval(change_text, 6000);
});

// Switch typewriter text
function change_text() {
    if (STATE === 0) {
        document.querySelector('.typewriter p').innerHTML = 'a software engineer';
        STATE = 1;
    }
    else {
        document.querySelector('.typewriter p').innerHTML = 'a web developer';
        STATE = 0;
    }
}