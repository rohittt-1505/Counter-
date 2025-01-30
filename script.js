let mainCount = 0;
let subCount = 0;
let countingEnabled = true; // To track whether counting is enabled or not

const mainCounter = document.getElementById('main-counter');
const subCounter = document.getElementById('sub-counter');
const mainCounterName = document.getElementById('main-counter-name');
const subCounterName = document.getElementById('sub-counter-name');

// Function to increment counters on screen touch
function incrementCounters(event) {
    if (!countingEnabled || event.target.tagName === "BUTTON") return; // Do not increment if the target is a button

    mainCount++; // Increment main counter on each touch
    mainCounter.textContent = mainCount.toString().padStart(6, '0');

    // When main counter reaches a multiple of 108, increment sub counter
    if (mainCount % 10 === 0) {
        subCount++;
        subCounter.textContent = subCount.toString().padStart(6, '0');
    }
}

// Increment counters when screen is clicked (but not on button clicks)
document.getElementById("counter-container").addEventListener("click", incrementCounters);

// Handling the opening and closing of the pop-up
const openPopupButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closePopupButton = document.getElementById('close-popup');

openPopupButton.addEventListener('click', () => {
    countingEnabled = false; // Disable counting when pop-up is open
    popup.style.display = 'block'; // Show pop-up when button clicked
});

closePopupButton.addEventListener('click', () => {
    countingEnabled = true; // Re-enable counting when pop-up is closed
    popup.style.display = 'none'; // Close pop-up when button clicked
});

// Reset counters functionality
const resetMainButton = document.getElementById('reset-main');
const resetSubButton = document.getElementById('reset-sub');
const resetNamesButton = document.getElementById('reset-names');

resetMainButton.addEventListener('click', () => {
    mainCount = 0;
    mainCounter.textContent = '000000'; // Reset main counter
});

resetSubButton.addEventListener('click', () => {
    subCount = 0;
    subCounter.textContent = '000000'; // Reset sub counter
});

// Reset counter names (titles)
resetNamesButton.addEventListener('click', () => {
    mainCounterName.textContent = 'Main Counter'; // Reset Main Counter name
    subCounterName.textContent = 'Sub Counter'; // Reset Sub Counter name
});
