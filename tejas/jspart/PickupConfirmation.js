const patientToggle = document.getElementById('patientToggle');
const startRouteBtn = document.getElementById('startRouteBtn');
const instructionText = document.getElementById('instructionText');

if (patientToggle && startRouteBtn) {
    patientToggle.addEventListener('change', () => {
        if (patientToggle.checked) {
            startRouteBtn.disabled = false;
            startRouteBtn.classList.add('active');
            instructionText.textContent = "Ready to go!";
            instructionText.style.color = "var(--color-primary-green)";
        } else {
            startRouteBtn.disabled = true;
            startRouteBtn.classList.remove('active');
            instructionText.textContent = "Please verify patient is safely secured before proceeding.";
            instructionText.style.color = "var(--color-text-medium)";
        }
    });

    startRouteBtn.addEventListener('click', () => {
        if (!startRouteBtn.disabled) {
            // Redirect to Navigation with hospital stage param
            window.location.href = 'NavigationScreen.html?stage=hospital';
        }
    });
}
