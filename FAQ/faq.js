let questionContainer = document.querySelector('.question-container');
let questionAnswerContainer = document.querySelector('.question-answer')
let questionArray = ['What is your favorite color?', 'What is your cats name?', 'What is your wifes name?'];
let answerArray = ['Blue is my favorite color', 'Ashe is a grey cat', 'Eden, we have been married for 3 years']


let i = 0;

questionArray.forEach(question => {
    let q = document.createElement('h1');
    let qButton = document.createElement('button');
    let a = document.createElement('h2');
    let qContainer = document.createElement('div');
    qContainer.classList.add('question-answer');
    q.classList.add('question');
    a.classList.add('answer');
    qButton.classList.add('q-button');

    q.textContent = questionArray[i];
    a.textContent = answerArray[i];
    qButton.textContent = 'X';

    questionContainer.appendChild(qContainer);
    qContainer.appendChild(q);
    qContainer.appendChild(a);
    qContainer.appendChild(qButton);

    qButton.addEventListener('click', () => {
        qContainer.classList.toggle('active');
    })

    i++;
    

});

