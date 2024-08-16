// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dark Mode
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Form Validation for Login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            const username = loginForm.querySelector('input[name="username"]');
            const password = loginForm.querySelector('input[name="password"]');
            if (!username.value || !password.value) {
                event.preventDefault();
                alert('Please fill out all fields.');
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("remember-me");

    // Load saved credentials if they exist
    if (localStorage.getItem("rememberMe") === "true") {
        usernameInput.value = localStorage.getItem("username");
        passwordInput.value = localStorage.getItem("password");
        rememberMeCheckbox.checked = true;
    }

    // Save credentials on form submit
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            localStorage.setItem("rememberMe", "true");
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            localStorage.setItem("rememberMe", "false");
        }

        // Proceed with form submission (e.g., authenticate the user)
        // This is where you would add your authentication logic
        alert("Form submitted");
    });
});
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function createAccount() {
    showLoading();

    // Your account creation logic here

    hideLoading();
}
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    errorMessage.style.display = "none";
    return true;
}
