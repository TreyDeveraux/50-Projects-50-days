let input = document.querySelector('input');
let button = document.querySelector('.search-button');
let closeSearchBtn = document.querySelector('.close-search')

button.addEventListener('click', () => {
    input.classList.add('input-clicked');
    button.classList.add('btn-clicked');

    setTimeout(function () {
        closeSearchBtn.classList.remove('hidden');
    }, 700);
});

closeSearchBtn.addEventListener('click', () => {
    input.classList.remove('input-clicked');
    button.classList.remove('btn-clicked');

    closeSearchBtn.classList.add('hidden');
});