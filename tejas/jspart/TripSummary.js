const dashboardBtn = document.getElementById('dashboardBtn');

if (dashboardBtn) {
    dashboardBtn.addEventListener('click', () => {
        // Return to Dashboard to complete the loop
        window.location.href = 'DashboardScreen.html';
    });
}
