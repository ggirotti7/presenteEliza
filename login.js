document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const correctPassword = 'discover';
    
    if (password === correctPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
    });