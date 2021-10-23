let jokeEl = document.getElementById('joke-text');
let jokeBtn = document.querySelector('.get-joke');
let config = { 
    headers: {
        'Accept': 'application/json'
    }
}
jokeBtn.addEventListener('click', () => {
    generateJoke();
})
function generateJoke(){
    fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
        jokeEl.innerHTML = data.joke;
    });
    
}