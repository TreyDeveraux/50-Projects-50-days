let content = document.querySelector('.container');
let menuButton = document.getElementById('open');
let closeMenu = document.getElementById('close');
let navMenu = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
    content.classList.add('rotated');
    navMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
    content.classList.add('normal');
    content.classList.remove('rotated');
});