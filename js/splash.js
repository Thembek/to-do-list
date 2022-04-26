const splash = document.querySelector('.splsh-pg');


document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 3000);
})