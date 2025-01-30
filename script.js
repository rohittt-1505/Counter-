// Updated script.js without Vibration Handling for Main & Sub Counter
let mainCount = 0;
let subCount = 0;
let countingEnabled = true;

const mainCounter = document.getElementById('main-counter');
const subCounter = document.getElementById('sub-counter');
const progressCircle = document.getElementById('progress-circle');
const progressText = document.getElementById('progress-text');
const popup = document.getElementById('popup');
const openPopupButton = document.getElementById('open-popup');
const closePopupButton = document.getElementById('close-popup');

// Function to increment counters on screen touch
function incrementCounters(event) {
    if (!countingEnabled || event.target.tagName === "BUTTON") return;

    mainCount++;
    mainCounter.textContent = mainCount.toString().padStart(6, '0');

    // When main counter reaches a multiple of 108, increment sub counter
    if (mainCount % 108 === 0) {
        subCount++;
        subCounter.textContent = subCount.toString().padStart(6, '0');
    }

    // Update progress circle
    updateProgress();
}

document.getElementById("counter-container").addEventListener("click", incrementCounters);

function updateProgress() {
    let progress = (mainCount % 108) / 108 * 100;
    progressCircle.style.strokeDashoffset = 314 - (314 * progress / 100); // 314 is the circle circumference
    progressText.textContent = `${Math.round(progress)}%`;
}

// Handling the opening and closing of the pop-up
openPopupButton.addEventListener('click', () => {
    countingEnabled = false; // Disable counting when pop-up is open
    popup.style.display = 'block'; // Show pop-up when button clicked
});

closePopupButton.addEventListener('click', () => {
    countingEnabled = true; // Re-enable counting when pop-up is closed
    popup.style.display = 'none'; // Close pop-up when button clicked
});

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

// Prevent zooming issue on mobile
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
