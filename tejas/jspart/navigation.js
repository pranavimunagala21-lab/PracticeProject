const signalLabel = document.getElementById('signalLabel');
const signalStatus = document.getElementById('signalStatus');
const distanceValue = document.getElementById('distanceValue');
const etaValue = document.getElementById('etaValue');
const alertText = document.getElementById('alertText');
const refreshButton = document.getElementById('refreshButton');
const startPickup = document.getElementById('startPickup');

const updates = [
  { dist: '200m', status: 'Will turn GREEN', eta: '4 min', alert: '🚨 Traffic Density Alert: High volume near Central Plaza.' },
  { dist: '120m', status: 'GREEN now', eta: '3 min', alert: '✅ Signal optimized via green corridor.' },
  { dist: '500m', status: 'YELLOW in 5s', eta: '5 min', alert: '⚠️ Mild congestion ahead, reroute ready.' },
];

let pointer = 0;

function applyUpdate(update) {
  signalLabel.textContent = `Next Signal in: ${update.dist}`;
  signalStatus.textContent = `→ ${update.status}`;
  distanceValue.textContent = update.dist.replace('m', ' m');
  etaValue.textContent = update.eta;
  alertText.textContent = update.alert;
}

if (refreshButton) {
  refreshButton.addEventListener('click', () => {
    pointer = (pointer + 1) % updates.length;
    applyUpdate(updates[pointer]);
  });
}

// Parse URL parameters to determine stage
const urlParams = new URLSearchParams(window.location.search);
const stageParam = urlParams.get('stage');

let tripStage = stageParam === 'hospital' ? 'hospital' : 'pickup';

// Initialize UI based on stage
function initUI() {
  if (tripStage === 'hospital') {
    startPickup.textContent = 'Complete Trip';
    startPickup.style.backgroundColor = 'var(--color-primary-green)';

    const labels = document.querySelectorAll('.info-label');
    if (labels[0]) labels[0].textContent = 'Distance to Hospital';

    distanceValue.textContent = '5.2 km';
    etaValue.textContent = '12 min';
    alertText.textContent = '🏥 Navigating to City Hospital - Green Corridor Active';
  } else {
    // Default Pickup State
    startPickup.textContent = 'Start Pickup (Arrived)';
    startPickup.style.backgroundColor = 'var(--color-primary-blue)';
  }
}

if (startPickup) {
  // Initialize on load
  initUI();

  startPickup.addEventListener('click', () => {
    if (tripStage === 'pickup') {
      // Go to Confirmation Screen
      window.location.href = 'PickupConfirmation.html';
    } else {
      // Stage 2 Complete: Show Summary
      window.location.href = 'TripSummary.html';
    }
  });
}

// Initialize with the first state
if (updates.length) {
  applyUpdate(updates[0]);
}

