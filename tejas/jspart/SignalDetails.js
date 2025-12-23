const signalList = document.getElementById('signalList');
const backButton = document.getElementById('backButton');

const signals = [
    {
        id: 'SIG-104',
        name: 'Central Plaza Crossing',
        status: 'green',
        statusText: 'GREEN NOW',
        reason: 'Signal 12 → Turned GREEN due to ambulance proximity and traffic load.'
    },
    {
        id: 'SIG-109',
        name: 'Market Road Junction',
        status: 'green',
        statusText: 'HOLDING GREEN',
        reason: 'Extended green phase by 15s to clear congestion ahead of route.'
    },
    {
        id: 'SIG-112',
        name: 'Hospital Avenue',
        status: 'yellow',
        statusText: 'ADAPTIVE DELAY',
        reason: 'Syncing cycle to ensure green wave arrival in 45s.'
    }
];

function renderSignals() {
    signalList.innerHTML = signals.map(sig => `
        <li class="signal-item status-${sig.status}">
            <div class="signal-header">
                <span class="signal-name">${sig.name}</span>
                <span class="signal-badge badge-${sig.status}">${sig.statusText}</span>
            </div>
            <div class="ai-reason-box">
                <span class="ai-label">AI Decision Engine</span>
                <p class="ai-text">${sig.reason}</p>
            </div>
        </li>
    `).join('');
}

if (backButton) {
    backButton.addEventListener('click', () => {
        window.history.back();
    });
}

// Initial render
renderSignals();
