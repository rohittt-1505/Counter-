let mainCount = 0;
let subCount = 0;
const mainCounter = document.getElementById("main-counter");
const subCounter = document.getElementById("sub-counter");

let isResetting = false; // Flag to prevent counting when resetting

// Event listener for clicks on the counter container
document.getElementById("counter-container").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON" && !isResetting) {  // Ensure click is not on a button
        mainCount++;
        mainCounter.textContent = mainCount.toString().padStart(6, '0'); // Format as 6 digits

        if (mainCount % 108 === 0) {
            subCount++;
            subCounter.textContent = subCount.toString().padStart(6, '0'); // Format as 6 digits
        }
    }
});

// Reset button for main counter
document.getElementById("reset-main").addEventListener("click", (e) => {
    e.stopPropagation();  // Prevent the click from propagating to the counter container
    isResetting = true; // Set the flag to prevent counting
    mainCount = 0;
    mainCounter.textContent = mainCount.toString().padStart(6, '0'); // Reset to 000000
    setTimeout(() => isResetting = false, 50); // Reset flag after a short delay
});

// Reset button for sub counter
document.getElementById("reset-sub").addEventListener("click", (e) => {
    e.stopPropagation();  // Prevent the click from propagating to the counter container
    isResetting = true; // Set the flag to prevent counting
    subCount = 0;
    subCounter.textContent = subCount.toString().padStart(6, '0'); // Reset to 000000
    setTimeout(() => isResetting = false, 50); // Reset flag after a short delay
});
