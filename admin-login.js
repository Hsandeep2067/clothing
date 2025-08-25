// Admin Login JavaScript
class AdminLogin {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthStatus();
    }

    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleLogin();
            });
        }

        // Add enter key support
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleLogin();
            }
        });
    }

    checkAuthStatus() {
        // Check if user is already logged in
        const isLoggedIn = localStorage.getItem('adminLoggedIn');
        if (isLoggedIn === 'true') {
            // Redirect to admin panel
            window.location.href = 'admin.html';
        }
    }

    handleLogin() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const rememberMe = document.getElementById('rememberMe').checked;

        // Clear previous error messages
        this.clearMessages();

        // Validate inputs
        if (!username || !password) {
            this.showError('Please enter both username and password');
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        // Simulate API call delay
        setTimeout(() => {
            if (this.authenticate(username, password)) {
                this.loginSuccess(rememberMe);
            } else {
                this.loginError();
            }
            this.setLoadingState(false);
        }, 1000);
    }

    authenticate(username, password) {
        // Default admin credentials
        const validCredentials = {
            username: 'admin',
            password: 'admin123'
        };

        // In production, this would be a server-side authentication
        return username === validCredentials.username && password === validCredentials.password;
    }

    loginSuccess(rememberMe) {
        // Set authentication status
        localStorage.setItem('adminLoggedIn', 'true');
        
        if (rememberMe) {
            localStorage.setItem('adminRememberMe', 'true');
            localStorage.setItem('adminUsername', document.getElementById('username').value);
        } else {
            localStorage.removeItem('adminRememberMe');
            localStorage.removeItem('adminUsername');
        }

        // Show success message
        this.showSuccess('Login successful! Redirecting...');

        // Redirect to admin panel
        setTimeout(() => {
            window.location.href = 'admin.html';
        }, 1500);
    }

    loginError() {
        this.showError('Invalid username or password');
        this.shakeForm();
    }

    showError(message) {
        const form = document.getElementById('loginForm');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            ${message}
        `;
        
        form.insertBefore(errorDiv, form.firstChild);
    }

    showSuccess(message) {
        const form = document.getElementById('loginForm');
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            ${message}
        `;
        
        form.insertBefore(successDiv, form.firstChild);
    }

    clearMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        const successMessages = document.querySelectorAll('.success-message');
        
        errorMessages.forEach(msg => msg.remove());
        successMessages.forEach(msg => msg.remove());
    }

    setLoadingState(loading) {
        const loginBtn = document.querySelector('.login-btn');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        if (loading) {
            loginBtn.classList.add('loading');
            loginBtn.innerHTML = '<i class="fas fa-spinner"></i> Logging in...';
            usernameInput.disabled = true;
            passwordInput.disabled = true;
        } else {
            loginBtn.classList.remove('loading');
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            usernameInput.disabled = false;
            passwordInput.disabled = false;
        }
    }

    shakeForm() {
        const loginCard = document.querySelector('.login-card');
        loginCard.classList.add('shake');
        
        setTimeout(() => {
            loginCard.classList.remove('shake');
        }, 600);
    }

    // Utility function to check if user is authenticated
    static isAuthenticated() {
        return localStorage.getItem('adminLoggedIn') === 'true';
    }

    // Utility function to logout
    static logout() {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminRememberMe');
        localStorage.removeItem('adminUsername');
        window.location.href = 'admin-login.html';
    }
}

// Initialize login functionality
document.addEventListener('DOMContentLoaded', function() {
    window.adminLogin = new AdminLogin();
    
    // Auto-fill username if remembered
    const rememberedUsername = localStorage.getItem('adminUsername');
    if (rememberedUsername) {
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('rememberMe').checked = true;
    }
});

// Add some security features
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Prevent F12, Ctrl+Shift+I, Ctrl+U
document.addEventListener('keydown', function(e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.key === 'u')
    ) {
        e.preventDefault();
        return false;
    }
});

// Add visual feedback for form interactions
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Add filled class if input has value
        if (input.value) {
            input.parentElement.classList.add('filled');
        }
        
        input.addEventListener('input', function() {
            if (this.value) {
                this.parentElement.classList.add('filled');
            } else {
                this.parentElement.classList.remove('filled');
            }
        });
    });
});

// Add password visibility toggle (optional enhancement)
function addPasswordToggle() {
    const passwordInput = document.getElementById('password');
    const passwordLabel = passwordInput.previousElementSibling;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.type = 'button';
    toggleBtn.className = 'password-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
    toggleBtn.style.cssText = `
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        padding: 5px;
    `;
    
    passwordLabel.style.position = 'relative';
    passwordLabel.appendChild(toggleBtn);
    
    toggleBtn.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
    });
}

// Uncomment the line below to enable password visibility toggle
// addPasswordToggle();
