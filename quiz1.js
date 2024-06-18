// quiz1.js

const correctAnswers = {
    q1: 'confianca',
    q2: 'sorriso',
    q3: 'pescocin',
    q4: 'esquerda',
    q5: '2012'
};

let score = 0;

function submitQuiz1(questionNumber) {
    const form = document.getElementById('quiz-form');
    const resultElement = document.getElementById('result');
    const resultContainer = document.getElementById('result-container');
    const retryButton = document.getElementById('retry-button');
    const nextPageButton = document.getElementById('next-page-button');
    const currentQuestionId = 'q' + questionNumber;
    const userAnswer = form.elements[currentQuestionId].value;

    if (userAnswer === correctAnswers[currentQuestionId]) {
        score++;
    }

    if (questionNumber < 5) {
        document.getElementById('question' + questionNumber).style.display = 'none';
        document.getElementById('question' + (questionNumber + 1)).style.display = 'block';
    } else {
        resultContainer.style.display = 'block';
        form.style.display = 'none';
        if (score >= 4) { // Pontuação mínima para passar (4 de 5)
            resultElement.textContent = `Você acertou ${score} de 5 perguntas. Parabéns!`;
            nextPageButton.style.display = 'block';
        } else {
            resultElement.textContent = `Você acertou apenas ${score} de 5 perguntas. Tente novamente.`;
            retryButton.style.display = 'block';
        }
    }
}

function retryQuiz() {
    const form = document.getElementById('quiz-form');
    const resultContainer = document.getElementById('result-container');
    const retryButton = document.getElementById('retry-button');
    const nextPageButton = document.getElementById('next-page-button');

    score = 0;
    document.getElementById('question5').style.display = 'none';
    document.getElementById('question1').style.display = 'block';
    form.style.display = 'block';
    resultContainer.style.display = 'none';
    retryButton.style.display = 'none';
    nextPageButton.style.display = 'none';
    form.reset();
}
