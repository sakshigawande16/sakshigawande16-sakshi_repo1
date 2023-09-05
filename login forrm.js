// Sample user data (in a real app, use a database)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
];

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const registerLink = document.getElementById('register-link');
const securePage = document.getElementById('secure-page');
const logoutButton = document.getElementById('logout-button');

let currentUser = null;

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered credentials match any user in the sample data
    const user = users.find(
        (u) => u.username === enteredUsername && u.password === enteredPassword
    );

    if (user) {
        // Successful login
        currentUser = user;
        errorMessage.textContent = '';
        showSecurePage();
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid username or password';
    }
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('In a real application, you would implement user registration.');
});

logoutButton.addEventListener('click', () => {
    currentUser = null;
    hideSecurePage();
    usernameInput.value = '';
    passwordInput.value = '';
});

function showSecurePage() {
    loginForm.style.display = 'none';
    securePage.style.display = 'block';
}

function hideSecurePage() {
    loginForm.style.display = 'block';
    securePage.style.display = 'none';
}
