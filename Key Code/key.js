const insert = document.getElementById('insert');
let header = document.querySelector('.header');
let resultContainer = document.querySelector('.result-container');

window.addEventListener('keydown', function(event){
    header.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultContainer.classList.add('active');

    let key = document.querySelector('.result-1');
    key.textContent = event.key;

    let code = document.querySelector('.result-2');
    code.textContent = event.code;
}, true)

let changeColorScheme = document.getElementById('color-scheme-btn');
changeColorScheme.innerText = 'Light Mode';
changeColorScheme.addEventListener('click', () => {
    document.querySelector('h1').classList.toggle('light-mode');
    document.querySelector('h2').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('.color-scheme-btn').classList.toggle('light-mode');
    document.querySelector('.toggle-table').classList.toggle('light-mode');
    document.querySelector('.table-container').classList.toggle('light-mode');

    let th = document.querySelectorAll('th');
    th.forEach(header => {
        header.classList.toggle('light-mode');
    })
    let td = document.querySelectorAll('td');
    td.forEach(data => {
        data.classList.toggle('light-mode');
        
    });
    document.querySelector('.result-1').classList.toggle('light-mode');
    document.querySelector('.result-2').classList.toggle('light-mode');
    document.querySelector('.result-2-heading').classList.toggle('light-mode');

    if(changeColorScheme.textContent === 'Light Mode'){
        changeColorScheme.textContent = 'Dark Mode';
    }
    else{
        changeColorScheme.textContent = 'Light Mode';
    }
});

let tableBtn = document.getElementById('toggle-table');
tableBtn.innerText = 'Table';
tableBtn.addEventListener('click', () => {
    let table = document.getElementById('table-container');
    header.classList.toggle('hidden');
    table.classList.toggle('hidden');

    if(resultContainer.classList.contains('active')){
        header.classList.add('hidden');
        resultContainer.classList.toggle('hidden');
    };
    

})