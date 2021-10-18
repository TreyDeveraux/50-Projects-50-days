let previousButton = document.querySelector('.previous');
let nextButton = document.querySelector('.next');
let i = 0;

nextButton.addEventListener('click', () => {
    if (i === 0) {
        let progressLine1 = document.querySelector('.progress-line-1');
        let stepNumber2 = document.querySelector('.number-2');
        stepNumber2.classList.add('active-number');
        progressLine1.classList.add('active-border');
        previousButton.disabled = true;
        previousButton.classList.add('previous')
        i++;
        console.log(i);

    }
    if (i === 1) {
        let progressLine2 = document.querySelector('.progress-line-2');
        let stepNumber3 = document.querySelector('.number-3');
        progressLine2.classList.add('active-border');
        stepNumber3.classList.add('active-number');
        previousButton.disabled = false;
        previousButton.classList.add('prev')
        i++
    }
    console.log(i)
});