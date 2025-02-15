const images = [
    { src: "images/A1.jpg", message: "You are my heart's delight, Happy Valentine's Day!" },
    { src: "images/A2.jpg", message: "Roses are red, violets are blue, my love for you is forever true." },
    { src: "images/A3.jpg", message: "Every moment with you is a treasure, Happy Valentine's Day!" },
    { src: "images/A4.jpg", message: "You are my sunshine on a cloudy day, Happy Valentine's Day!" },
    { src: "images/A5.jpg", message: "My love for you grows stronger every day, Happy Valentine's Day!" },
    { src: "images/A6.jpg", message: "You are my everything, Happy Valentine's Day!" },
    { src: "images/A7.jpg", message: "Together forever, never apart, Happy Valentine's Day!" },
    { src: "images/A8.jpg", message: "You complete me, Happy Valentine's Day!" },
    { src: "images/A9.jpg", message: "My heart beats for you, Happy Valentine's Day!" },
    { src: "images/A10.jpg", message: "You are my one and only, Happy Valentine's Day!" },
    { src: "images/A11.jpg", message: "Love you to the moon and back, Happy Valentine's Day!" },
    { src: "images/A12.jpg", message: "You are my dream come true, Happy Valentine's Day!" },
    { src: "images/A13.jpg", message: "Forever and always, Happy Valentine's Day!" }
];

const imageBox = document.querySelector('.image-box');
const messageBox = document.querySelector('.message-box');
const backgroundMusic = document.getElementById('background-music');

let currentIndex = 0;

// Function to update the displayed image and message
function updateDisplay() {
    // Update the image
    imageBox.innerHTML = `<img src="${images[currentIndex].src}" alt="Image ${currentIndex + 1}" class="active">`;
    // Update the message box
    messageBox.textContent = images[currentIndex].message;
}

// Initialize the first image
updateDisplay();

// Play background music
backgroundMusic.play();

// Calculate the interval time based on the music duration and number of images
const musicDuration = 3 * 60 + 15; // 3 minutes 15 seconds in seconds
const intervalTime = (musicDuration / images.length) * 1000; // Convert to milliseconds

// Set up the slideshow to change images at the calculated interval
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateDisplay();
}, intervalTime);