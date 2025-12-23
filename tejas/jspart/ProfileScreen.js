const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Clear session if any (mock)
        // Redirect to Login
        window.location.href = 'LoginScreen.html';
    });
}
