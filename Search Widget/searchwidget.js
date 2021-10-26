let input = document.querySelector('input');
let button = document.querySelector('.search-button');
let closeSearchBtn = document.querySelector('.close-search')

button.addEventListener('click', () => {
    input.classList.toggle('input-clicked');
    button.classList.toggle('btn-clicked');

    setTimeout(function () {
        closeSearchBtn.classList.remove('hidden');
    }, 700);
});

