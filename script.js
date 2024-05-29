document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('message');

    fetch('https://raw.githubusercontent.com/DauntingEmperor/fortniteprivateserver/main/login.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                message.textContent = 'Login successful!';
                message.style.color = 'green';
                // Redirect to the game page or dashboard
                window.location.href = 'https://your-game-page.com';
            } else {
                message.textContent = 'Invalid credentials. Please try again.';
                message.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            message.textContent = 'An error occurred. Please try again later.';
            message.style.color = 'red';
        });
});
