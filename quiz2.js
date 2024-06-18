// quiz2.js

const questions = [
    {
        images: ["img/img1.jpg", "img/img2.jpg"],
        correct: 0
    },
    {
        images: ["img/img3.jpg", "img/img4.jpg"],
        correct: 0
    },
    {
        images: ["img/img5.jpg", "img/img6.jpg"],
        correct: 1
    },
    {
        images: ["img/img7.jpg", "img/img8.jpg"],
        correct: 0
    },
    {
        images: ["img/img9.jpg", "img/img10.jpg"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        const questionHTML = `
            <div class="question">
                <img src="${question.images[0]}" alt="Image 1" onclick="checkAnswer(${currentQuestion}, 0)">
                <img src="${question.images[1]}" alt="Image 2" onclick="checkAnswer(${currentQuestion}, 1)">
            </div>
        `;
        document.getElementById("quiz-content").innerHTML = questionHTML;
    } else {
        showResults();
    }
}

function checkAnswer(questionIndex, answer) {
    if (answer === questions[questionIndex].correct) {
        score++;
    }
    currentQuestion++;
    showQuestion();
}

function showResults() {
    document.getElementById("quiz-content").style.display = 'none';
    document.getElementById("result-container").style.display = 'block';
    const resultMessage = `Você acertou ${score} de ${questions.length} perguntas!`;
    document.getElementById("result-message").innerText = resultMessage;
    if (score >= 4) {
        document.getElementById("next-button").style.display = 'block';
    } else {
        document.getElementById("retry-button").style.display = 'block';
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-content").style.display = 'block';
    document.getElementById("result-container").style.display = 'none';
    showQuestion();
}

window.onload = showQuestion;
