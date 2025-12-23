// Minimal logic for settings interactive feel
const toggles = document.querySelectorAll('input[type="checkbox"]');
const langSelect = document.querySelector('.select-input');

toggles.forEach(toggle => {
    if (!toggle.disabled) {
        toggle.addEventListener('change', () => {
            console.log('Setting changed');
        });
    }
});

if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        alert('Language changed to: ' + e.target.options[e.target.selectedIndex].text);
    });
}
