const statusToggle = document.getElementById('statusToggle');
const statusText = document.getElementById('statusText');
const mainStatusCard = document.getElementById('mainStatusCard');
const mainStatusText = document.getElementById('mainStatusText');

if (statusToggle && statusText && mainStatusCard && mainStatusText) {
  statusToggle.addEventListener('click', () => {
    const isOnline = statusToggle.getAttribute('data-status') === 'online';

    if (isOnline) {
      statusToggle.setAttribute('data-status', 'offline');
      statusToggle.style.backgroundColor = '#767577';
      statusText.textContent = 'OFFLINE';
      statusText.style.color = 'var(--color-text-medium)';
      mainStatusCard.style.backgroundColor = 'var(--color-alert-dark)';
      mainStatusText.textContent = 'Go Online to Accept Requests';
      mainStatusText.style.color = 'var(--color-alert-red)';
    } else {
      statusToggle.setAttribute('data-status', 'online');
      statusToggle.style.backgroundColor = 'var(--color-primary-green)';
      statusText.textContent = 'ONLINE';
      statusText.style.color = 'var(--color-primary-green)';
      mainStatusCard.style.backgroundColor = 'var(--color-card-bg)';
      mainStatusText.textContent = 'Waiting for Request...';
      mainStatusText.style.color = 'var(--color-text-light)';

      // Simulate incoming request after 3 seconds
      setTimeout(() => {
        window.location.href = 'IncomingRequest.html';
      }, 3000);
    }
  });
}


