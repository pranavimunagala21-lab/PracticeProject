const phoneInput = document.getElementById('phone');
const otpInput = document.getElementById('otp');
const otpGroup = document.querySelector('.otp-group');
const loginButton = document.getElementById('loginButton');

// Basic guard for missing elements when file is reused
if (phoneInput && otpInput && otpGroup && loginButton) {
  loginButton.addEventListener('click', () => {
    const isOtpStep = otpGroup.style.display === 'block';

    if (!isOtpStep) {
      if (phoneInput.value.trim().length === 10) {
        otpGroup.style.display = 'block';
        loginButton.textContent = 'Verify & Login';
        phoneInput.setAttribute('disabled', 'true');
        alert('OTP sent (mock). Use 1234 to log in.');
      } else {
        alert('Please enter a valid 10-digit phone number.');
      }
      return;
    }

    if (otpInput.value === '1234') {
      window.location.href = 'DashboardScreen.html';
    } else {
      alert('Invalid OTP. Please try again.');
    }
  });
}


