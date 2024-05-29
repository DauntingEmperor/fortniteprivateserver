// script.js
document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('showRegister').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showReset').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('resetForm').style.display = 'block';
});

document.getElementById('showLoginFromReset').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('resetForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    fetch('https://your-server-endpoint.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        const message = document.getElementById('message');
        if (data.success) {
            message.textContent = 'Registration successful!';
            message.style.color = 'green';
            document.getElementById('registerForm').reset();
        } else {
            message.textContent = 'Registration failed: ' + data.message;
            message.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const message = document.getElementById('message');
        message.textContent = 'An error occurred. Please try again later.';
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    fetch('https://your-server-endpoint.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        const message = document.getElementById('message');
        if (data.success) {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
            window.location.href = 'https://your-game-page.com';
        } else {
            message.textContent = 'Invalid credentials. Please try again.';
            message.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const message = document.getElementById('message');
        message.textContent = 'An error occurred. Please try again later.';
    });
});

document.getElementById('resetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('reset-username').value;
    const password = document.getElementById('reset-password').value;

    fetch('https://your-server-endpoint.com/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        const message = document.getElementById('message');
        if (data.success) {
            message.textContent = 'Password reset successful!';
            message.style.color = 'green';
            document.getElementById('resetForm').reset();
        } else {
            message.textContent = 'Password reset failed: ' + data.message;
            message.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const message = document.getElementById('message');
        message.textContent = 'An error occurred. Please try again later.';
    });
});
