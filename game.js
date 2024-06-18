// game.js

const hints = [
    "Dica 1: Letra inicial da minha marca de roupa e tenis favorita.",
    "Dica 2: Último dígito do meu celular.",
    "Dica 3: Número da camisa dos meus dois maiores ídolos do Corinthians.",
    "Dica 4: Meu número favorito por vários motivos.",
    "Dica 5: Mês em que pedi o amor da minha vida em namoro."
];

let currentHintIndex = 0;
let codeCorrect = false;

function showNextHint() {
    if (currentHintIndex < hints.length) {
        const hintElement = document.getElementById('hint');
        hintElement.textContent = hints[currentHintIndex];
        currentHintIndex++;

        if (currentHintIndex === hints.length && codeCorrect) {
            document.getElementById('next-button').style.display = 'none';
            document.getElementById('next-page-button').style.display = 'block';
        }
    }
}

function checkCode() {
    const userInput = document.getElementById('code-input').value.trim();
    // Lógica para verificar se o código inserido está correto
    // Exemplo simplificado:
    if (userInput === 'a3876') {
        codeCorrect = true;
        document.getElementById('next-page-button').style.display = 'block';
    } else {
        codeCorrect = false;
        alert('Código incorreto. Tente novamente.');
    }
}