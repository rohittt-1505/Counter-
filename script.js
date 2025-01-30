// Updated script.js with Haptic Feedback & Progress Circle
let mainCount = 0;
let subCount = 0;
let countingEnabled = true;

const mainCounter = document.getElementById('main-counter');
const subCounter = document.getElementById('sub-counter');
const progressCircle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-text');

// Function to increment counters on screen touch
function incrementCounters(event) {
    if (!countingEnabled || event.target.tagName === "BUTTON") return;
    
    mainCount++;
    mainCounter.textContent = mainCount.toString().padStart(6, '0');
    
    // Vibrate on mobile devices
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }

    // When main counter reaches a multiple of 10, increment sub counter
    if (mainCount % 10 === 0) {
        subCount++;
        subCounter.textContent = subCount.toString().padStart(6, '0');
    }

    // Update progress circle
    updateProgress();
}

document.getElementById("counter-container").addEventListener("click", incrementCounters);

function updateProgress() {
    let progress = (mainCount % 10) / 10 * 100;
    progressCircle.style.strokeDashoffset = 314 - (314 * progress / 100); // 314 is the circle circumference
    progressText.textContent = `${Math.round(progress)}%`;
}

// Reset functionality
const resetMainButton = document.getElementById('reset-main');
const resetSubButton = document.getElementById('reset-sub');

resetMainButton.addEventListener('click', () => {
    mainCount = 0;
    mainCounter.textContent = '000000';
    updateProgress();
});

resetSubButton.addEventListener('click', () => {
    subCount = 0;
    subCounter.textContent = '000000';
});