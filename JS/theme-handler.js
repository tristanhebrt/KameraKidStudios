// Define the variable for the theme toggle text
let lightModeText = "☀️";
let darkModeText = "🌙";
let hoverTextLight = "☀️"; // Text for hover in light mode
let hoverTextDark = "🌙"; // Text for hover in dark mode

// Define the image sources for each theme
const lightThemeImages = [
    "ASSETS/Text/dblUpArrowBlack.png", // Image for light theme
];

const darkThemeImages = [
    "ASSETS/Text/dblUpArrowWhite.png", // Image for dark theme
];

// Get the theme toggle button and image elements
const toggleButton = document.getElementById('theme-toggle');
const gallerySelectionImages = document.querySelectorAll('.gallerySelectionButton img');

// Function to update the image sources based on the current theme
function updateImageSources(theme) {
    const images = theme === 'light' ? lightThemeImages : darkThemeImages;
    gallerySelectionImages.forEach((img, index) => {
        img.src = images[index];
    });
}

// Set the initial theme based on preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let currentTheme = prefersDarkScheme ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateImageSources(currentTheme);

// Set the initial text for the button
toggleButton.textContent = currentTheme === 'light' ? lightModeText : darkModeText;

// Event listener for the theme toggle button
toggleButton.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Set the new theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update the button text based on the new theme
    toggleButton.textContent = currentTheme === 'light' ? lightModeText : darkModeText;

    // Update image sources based on the new theme
    updateImageSources(currentTheme);
});

// Change text on hover
toggleButton.addEventListener('mouseover', () => {
    toggleButton.textContent = currentTheme === 'light' ? hoverTextDark : hoverTextLight;
});

toggleButton.addEventListener('mouseout', () => {
    toggleButton.textContent = currentTheme === 'light' ? lightModeText : darkModeText;
});