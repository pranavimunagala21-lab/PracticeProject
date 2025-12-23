const timerText = document.getElementById('timerText');
const timerFill = document.getElementById('timerFill');
const acceptBtn = document.getElementById('acceptBtn');
const rejectBtn = document.getElementById('rejectBtn');
const levelBadge = document.getElementById('levelBadge');

const emergencyLevels = {
  Critical: 'badge-critical',
  High: 'badge-high',
  Normal: 'badge-normal',
};

let remaining = 20;
let intervalId = null;
let resolved = false;

function updateTimerDisplay() {
  timerText.textContent = `Auto-rejecting in ${remaining}s`;
  const widthPercent = Math.max(0, (remaining / 20) * 100);
  timerFill.style.width = `${widthPercent}%`;
}

function resolveRequest(state) {
  if (resolved) return;
  resolved = true;
  clearInterval(intervalId);
  acceptBtn.disabled = true;
  rejectBtn.disabled = true;

  if (state === 'accepted') {
    timerText.textContent = 'Request Accepted. Navigating...';
    timerFill.style.background = 'var(--color-primary-green)';
    setTimeout(() => {
      window.location.href = 'NavigationScreen.html';
    }, 800);
  } else {
    timerText.textContent = 'Request Rejected';
    timerFill.style.background = 'var(--color-alert-red)';
    timerFill.style.width = '0%';
    setTimeout(() => {
      window.location.href = 'DashboardScreen.html';
    }, 1000);
  }
}

function tick() {
  remaining -= 1;
  updateTimerDisplay();
  if (remaining <= 0) {
    resolveRequest('rejected');
  }
}

function startTimer() {
  updateTimerDisplay();
  intervalId = setInterval(tick, 1000);
}

if (acceptBtn) {
  acceptBtn.addEventListener('click', () => resolveRequest('accepted'));
}

if (rejectBtn) {
  rejectBtn.addEventListener('click', () => resolveRequest('rejected'));
}

// Example of changing level badge based on some state
function setEmergencyLevel(level) {
  levelBadge.textContent = level;
  levelBadge.className = `badge ${emergencyLevels[level] || 'badge-normal'}`;
}

setEmergencyLevel('Critical'); // default sample
startTimer();

